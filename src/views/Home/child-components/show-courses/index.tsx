/**
 * Create time: 2024 07 21  12:18:38
 * File name: index.tsx
 * Path: src\views\Home\child-components\show-courses\index.tsx
 * About:
 */
import {
    BottomWrapper,
    CoursesWrapper,
    UnderMovableWrapper,
} from './styles.tsx'
import TopDate from './child-components/top-show-date-month'
import TopWeek from './child-components/top-show-week'
import LeftShowTime from './child-components/left-show-time'
import RightShowCourses from './child-components/right-show-courses'
import { memo, MouseEvent, useState } from 'react'
import { getAccurateDate } from '../../../../assets/getAccurateDate.ts'
import { firstDayDate, nowDate, width } from '../../../../assets/constants.ts'
import {
    AllWeekClasses,
    CoursesOneTime,
    OneWeekClasses,
} from '../../../../types'
import InformationBox from './child-components/Information-box'
import { emptyItem } from '../../../../assets/sortData.ts'

const ShowCourses = ({ courses }: { courses: AllWeekClasses }) => {
    // state
    // const week = getAccurateDate(firstDayDate, nowDate)
    const [startWeek, setStartWeek] = useState<number>(
        getAccurateDate(firstDayDate, nowDate)
    )
    const [initX, setInitX] = useState<number>(0)
    const [isMoving, setIsMoving] = useState<boolean>(false)
    const [offset, setOffset] = useState<number>(0)
    const [display, setDisplay] = useState<boolean>(false)
    const [information, setInformation] = useState<CoursesOneTime>(emptyItem)
    // effect
    // let placeX = 0
    // event handler
    const totalWeek = courses.length

    function mouseUpHandler(e: MouseEvent<HTMLDivElement>) {
        setIsMoving(false)
        console.log('!@#$' + e.pageX + '  ????  ' + initX)
        setOffset(e.pageX - initX)
        if (offset > width / 4 && startWeek > 1) {
            setStartWeek(() => startWeek - 1)
        } else if (offset < -width / 4 && startWeek < totalWeek) {
            setStartWeek(() => startWeek + 1)
        }
    }

    function mouseDownHandler(e: MouseEvent<HTMLDivElement>) {
        setIsMoving(true)
        setInitX(e.pageX)
    }

    function calculateOffset(offset: number) {
        let of = (startWeek - 1) * width
        if (isMoving && startWeek < totalWeek) {
            if (offset > width / 4 && startWeek > 0) {
                of -= width
            } else if (offset < 0 && startWeek < totalWeek) {
                of += width
            } else {
                of -= offset
            }
        } else if (startWeek > totalWeek) {
            of += -width
        }

        return of
    }

    // return
    return (
        <CoursesWrapper onClick={() => setDisplay(false)}>
            <TopWeek
                week={startWeek}
                currentWeek={getAccurateDate(firstDayDate, nowDate)}
                setStartWeek={setStartWeek}
            />
            <UnderMovableWrapper
                offset={calculateOffset(offset)}
                onMouseUp={mouseUpHandler}
                onMouseDown={mouseDownHandler}>
                {courses.map((_item: OneWeekClasses, index: number) => {
                    return (
                        <div
                            className='oneWeek'
                            key={index}>
                            <TopDate startWeek={index + 1} />
                            <BottomWrapper>
                                <LeftShowTime />
                                <RightShowCourses
                                    coursesInThisWeek={_item}
                                    showWeek={index + 1}
                                    setDisplay={setDisplay}
                                    display={display}
                                    setInformation={setInformation}
                                />
                            </BottomWrapper>
                        </div>
                    )
                })}
            </UnderMovableWrapper>
            {display && (
                <InformationBox
                    offset={calculateOffset(offset)}
                    displayInformation={information}
                />
            )}
        </CoursesWrapper>
    )
}

export const MemoShowCourses = memo(ShowCourses)

export default ShowCourses
// Index
