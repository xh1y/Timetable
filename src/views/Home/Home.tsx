/*
 * Create time: 2024 07 21  0:9:20
 */

import {
    MouseEvent,
    MutableRefObject,
    useEffect,
    useRef,
    useState,
} from 'react'
import { AllWeekClasses, IPosition } from '../../types/types.ts'
import { getQuery } from '../../assets/function/getQuery.ts'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { myRequest } from '../../services'
import { sortDataToWeek } from '../../assets/function/sortData.ts'
import { width } from '../../assets/constant/constants.ts'
import { AppWrapper, TimeTableWrapper } from './home-style.ts'
import ShowCourses from './child-components/show-courses'

function Home() {
    // state
    const [pending, setPending] = useState<boolean>(false)
    // @ts-ignore
    const [moving, setMoving] = useState<boolean>(false)
    const [initPosition, setInitPosition] = useState<IPosition>({ x: 0, y: 0 })
    const [transitionY, setTransitionY] = useState<number>(14.5)
    const [movingStatus, setMovingStatus] = useState<
        'start' | 'processing' | 'end'
    >('end')
    const [show, setShow] = useState(false)
    let offset = 14.5
    const query = getQuery(useLocation().search.slice(1).split('&')).length
    if (query > 0) {
        setPending(true)
    }
    const courses: MutableRefObject<AllWeekClasses> = useRef([
        [
            {
                teacher: '',
                day: 1,
                name: '',
                place: '',
                time: [],
                compulsory: true,
                startWeek: 0,
                endWeek: 0,
                weekType: 'all',
                isClass: true,
            },
        ],
    ])

    // effect
    useEffect(() => {
        console.log(transitionY, movingStatus)
    }, [transitionY, movingStatus])
    useEffect(() => {
        console.log('Home mounted!!')
        return console.log('Unmounted!!')
    }, [])

    useEffect(() => {
        axios.get('/class/data/').then((r) => console.log(r.data))
        myRequest.get().then((r: any) => {
            console.log(r)
            console.log(sortDataToWeek(r))
            courses.current = sortDataToWeek(r)
        })
    }, [])

    // event handler
    function mouseUpHandle(e: MouseEvent<HTMLDivElement>) {
        setMoving(false)
        console.log('Up!!!')
        setMovingStatus('processing')
        if (transitionY > width * 1.11) {
            setTransitionY(95)
        } else {
            setTransitionY(14.5)
        }
        setMovingStatus('end')
        setInitPosition({
            x: e.pageX,
            y: e.pageY,
        })
        setPending(true)
        setShow(true)
        console.log(courses)
    }

    function mouseDownHandle(e: MouseEvent<HTMLDivElement>) {
        setMoving(true)
        console.log('Down!!!')
        // if (movingStatus === 'end') {

        setMovingStatus('start')
        // } else if (movingStatus === 'start') {
        console.log('!!', ((e.pageY - initPosition.y) / 2.22 / width) * 100)
        offset += ((e.pageY - initPosition.y) / 2.22 / width) * 100
        setTransitionY(offset)
        // }
    }

    // return
    return (
        <AppWrapper
            onMouseUp={(e: MouseEvent<HTMLDivElement>) => {
                if (!pending) mouseUpHandle(e)
            }}
            onMouseDown={(e: MouseEvent<HTMLDivElement>) => {
                if (!pending) mouseDownHandle(e)
            }}>
            <div
                className='background'
                onClick={(e) => {
                    setPending(false)
                    setTimeout(() => {
                        setShow(false)
                    }, 1000)
                    e.stopPropagation()
                }}></div>
            <TimeTableWrapper
                $offsetx={0}
                $offsety={
                    pending
                        ? 95
                        : transitionY > 95
                          ? 95
                          : transitionY < 14.5
                            ? 14.5
                            : transitionY
                }
                onMouseUp={(e: MouseEvent<HTMLDivElement>) =>
                    e.preventDefault()
                }
                onMouseDown={(e: MouseEvent<HTMLDivElement>) =>
                    e.preventDefault()
                }>
                <div className='timetable'>
                    <div className='small-bar'></div>
                    {show ? (
                        <>
                            <ShowCourses courses={courses.current} />
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            </TimeTableWrapper>
        </AppWrapper>
    )
}

export default Home
// Home
