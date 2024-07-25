/*
 * Create time: 2024 07 21  13:55:34*/

import { Dispatch, memo, SetStateAction } from 'react'
import {
    colorInList,
    CoursesOneTime,
    OneWeekClasses,
} from '../../../../../../types/types.ts'
import { sortDataInTimeForOneWeek } from '../../../../../../assets/function/sortData.ts'
import { OneTimeWrapper, RightShowWrapper } from './styles.ts'
import SmallBoxInTable from '../../../../../../components/small-box-in-table'

const RightPart = memo(
    ({
        showWeek,
        coursesInThisWeek,
        setDisplay,
        display,
        setInformation,
    }: {
        showWeek: number
        coursesInThisWeek: OneWeekClasses
        setDisplay: Dispatch<SetStateAction<boolean>>
        display: boolean
        setInformation: Dispatch<SetStateAction<CoursesOneTime>>
    }) => {
        // const [prepareToShow, setPrepareToShow] = useState<{
        //     week: number
        //     time: number
        //     day: number
        // } | null>(null)
        // event handler
        console.log('After formatting: in week ', showWeek)
        console.log(sortDataInTimeForOneWeek(coursesInThisWeek))
        const thisWeekCourses: CoursesOneTime[][] =
            sortDataInTimeForOneWeek(coursesInThisWeek)

        function getColor(course: CoursesOneTime) {
            if (course.isClass) {
                if (course.name !== '') {
                    switch (course.timeStart) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                            return colorInList.morning
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                            return colorInList.afternoon
                        case 9:
                        case 10:
                        case 11:
                        case 12:
                            return colorInList.evening
                        default:
                            return colorInList.now
                    }
                } else {
                    return colorInList.nothing
                }
            } else {
                return colorInList.defineAfter
            }
        }

        // return
        return (
            <RightShowWrapper>
                <div className={'one-time-grid'}>
                    {thisWeekCourses.map((eachTimeCourses, index) => {
                        return (
                            <OneTimeWrapper $offset={index}>
                                {eachTimeCourses.map((course, index_2) => {
                                    return (
                                        <>
                                            <SmallBoxInTable
                                                topText={course.name}
                                                bottomText={course.place}
                                                color={getColor(course)}
                                                key={index_2}
                                                height={course.timeDur}
                                                displayObj={{
                                                    setDisplay: setDisplay,
                                                    display: display,
                                                }}
                                                setInformation={setInformation}
                                                course={course}
                                                // img={index == prepareToShow?.week && index_2 == prepareToShow.time && course.day == prepareToShow.day}
                                                // setPrepareToShow={setPrepareToShow}
                                            />
                                        </>
                                    )
                                })}
                            </OneTimeWrapper>
                        )
                    })}
                </div>
            </RightShowWrapper>
        )
    }
)

export default RightPart
// RightPart
