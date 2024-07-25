/*
 * Create time: 2024 07 21  12:18:38
 */

import {
    AllWeekClasses,
    CoursesOneTime,
    OneWeekClasses,
} from '../../../../types/types.ts'
import { memo, MouseEvent, useState } from 'react'
import { getAccurateWeek } from '../../../../assets/function/getAccurateDate.ts'
import {
    firstDayDate,
    nowDate,
    width,
} from '../../../../assets/constant/constants.ts'
import { emptyItem } from '../../../../assets/function/sortData.ts'
import {
    BottomWrapper,
    CoursesWrapper,
    UnderMovableWrapper,
} from './styles.tsx'
import TopWeek from './child-components/top-show-week'
import TopDate from './child-components/top-show-date-month'
import LeftShowTime from './child-components/left-show-time'
import RightShowCourses from './child-components/right-show-courses'
import InformationBox from './child-components/Information-box'

const ShowCourses = ({ courses }: { courses: AllWeekClasses }) => {
    // state
    // const week = getAccurateDate(firstDayDate, nowDate)
    const totalWeek = courses.length

    const [startWeek, setStartWeek] = useState<number>(
        getAccurateWeek(firstDayDate, nowDate) < 1
            ? 1
            : getAccurateWeek(firstDayDate, nowDate) > totalWeek
              ? totalWeek
              : getAccurateWeek(firstDayDate, nowDate)
    )
    const [initX, setInitX] = useState<number>(0)
    const [isMoving, setIsMoving] = useState<boolean>(false)
    const [offset, setOffset] = useState<number>(0)
    const [display, setDisplay] = useState<boolean>(false)
    const [information, setInformation] = useState<CoursesOneTime>(emptyItem)
    // effect
    // let placeX = 0
    // event handler

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
        // if(startWeek < 0) {
        //     setStartWeek(1)
        //     return 0
        // } else if(startWeek > totalWeek) {
        //     setStartWeek(totalWeek)
        //     return (totalWeek - 1) * width
        // }
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
                currentWeek={
                    getAccurateWeek(firstDayDate, nowDate) < 1
                        ? 1
                        : getAccurateWeek(firstDayDate, nowDate) > totalWeek
                          ? totalWeek
                          : getAccurateWeek(firstDayDate, nowDate)
                }
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
