/**
 * Create time: 2024 07 21  13:55:57
 * File name: index.tsx
 * Path: src\views\Home\child-components\show-courses\child-components\top-show-week\index.tsx
 * About:
 */
import { TopTimeWrapper } from './styles.ts'
import { getAccurateDate } from '../../../../../../assets/getAccurateDate.ts'
import { firstDayDate, nowDate } from '../../../../../../assets/constants.ts'

function TopWeek() {
    const week = getAccurateDate(firstDayDate, nowDate)
    // return
    return (
        <TopTimeWrapper>
            <div className='week'>第{week}周</div>
        </TopTimeWrapper>
    )
}

export default TopWeek
// TopWeek
