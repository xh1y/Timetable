/**
 * Create time: 2024 07 21  0:9:20
 * File name: Home.tsx
 * Path: src\views\Home.tsx
 * About: Home page
 */
import ShowCourses from './child-components/show-courses'
import { AppWrapper, TimeTableWrapper } from './home-style.ts'
import React, { MouseEvent, useEffect, useState } from 'react'
import { IPosition } from '../../types'
import { width } from '../../assets/constants.ts'

function Home() {
    // state
    const [pending, setPending] = useState<boolean>(false)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const [moving, setMoving] = useState<boolean>(false)
    const [initPosition, setInitPosition] = useState<IPosition>({ x: 0, y: 0 })
    const [transitionY, setTransitionY] = useState<number>(14.5)
    const [movingStatus, setMovingStatus] = useState<
        'start' | 'processing' | 'end'
    >('end')
    const [show, setShow] = useState(true)
    let offset = 14.5
    // effect
    useEffect(() => {
        console.log(transitionY, movingStatus)
    }, [transitionY, movingStatus])

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
            onMouseUp={(e: MouseEvent<HTMLDivElement>) => mouseUpHandle(e)}
            onMouseDown={(e: MouseEvent<HTMLDivElement>) => mouseDownHandle(e)}>
            <div
                className='background'
                onClick={(e) => {
                    setPending(false)
                    setTimeout(() => {
                        setShow(false)
                    }, 1000)
                    e.preventDefault()
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
                            <ShowCourses />
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
