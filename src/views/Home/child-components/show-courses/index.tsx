/**
 * Create time: 2024 07 21  12:18:38
 * File name: index.tsx
 * Path: src\views\Home\child-components\show-courses\index.tsx
 * About:
 */
import { CoursesWrapper } from './styles.tsx'
import TopDate from './child-components/top-show-date-month'
import TopWeek from './child-components/top-show-week'
import LeftShowTime from './child-components/left-show-time'
import RightShowCourses from './child-components/right-show-courses'

function ShowCourses() {
    // state

    // effect

    // event handler

    // return
    return (
        <CoursesWrapper>
            <TopWeek />
            <TopDate />
            <div className='bottom'>
                <LeftShowTime />
                <RightShowCourses />
            </div>
        </CoursesWrapper>
    )
}

export default ShowCourses
// Index
