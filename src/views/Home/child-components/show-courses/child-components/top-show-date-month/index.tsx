/**
 * Create time: 2024 07 21  13:55:49
 * File name: index.tsx
 * Path: src\views\Home\child-components\show-courses\child-components\top-show-date-month\index.tsx
 * About:
 */
import { TopDateWrapper } from './styles.ts'
import SmallBoxInTable from '../../../../../../components/small-box-in-table'
import { colorInList } from '../../../../../../types/types.ts'
import { getFirstDayOfWeek } from '../../../../../../assets/getAccurateDate.ts'
import { firstDayDate, nowDate } from '../../../../../../assets/constants.ts'

function TopDate({ startWeek }: { startWeek: number }) {
    const firstDayOfThisWeek = getFirstDayOfWeek(firstDayDate, startWeek)
    // event handler
    return (
        <TopDateWrapper>
            <SmallBoxInTable
                topText={firstDayOfThisWeek.Month + '月'}
                bottomText={''}
                color={colorInList.notNow}
                fontSize={14}
            />
            <SmallBoxInTable
                topText={'周一'}
                bottomText={firstDayOfThisWeek.Day + '日'}
                color={
                    firstDayOfThisWeek.Day == nowDate.Day &&
                    firstDayOfThisWeek.Month == nowDate.Month
                        ? colorInList.now
                        : colorInList.notNow
                }
                fontSize={11}
            />
            <SmallBoxInTable
                topText={'周二'}
                bottomText={firstDayOfThisWeek.addOne().Day + '日'}
                color={
                    firstDayOfThisWeek.addOne().Day == nowDate.Day &&
                    firstDayOfThisWeek.addOne().Month == nowDate.Month
                        ? colorInList.now
                        : colorInList.notNow
                }
                fontSize={11}
            />
            <SmallBoxInTable
                topText={'周三'}
                bottomText={firstDayOfThisWeek.add(2).Day + '日'}
                color={
                    firstDayOfThisWeek.add(2).Day == nowDate.Day &&
                    firstDayOfThisWeek.add(2).Month == nowDate.Month
                        ? colorInList.now
                        : colorInList.notNow
                }
                fontSize={11}
            />
            <SmallBoxInTable
                topText={'周四'}
                bottomText={firstDayOfThisWeek.add(3).Day + '日'}
                color={
                    firstDayOfThisWeek.add(3).Day == nowDate.Day &&
                    firstDayOfThisWeek.add(3).Month == nowDate.Month
                        ? colorInList.now
                        : colorInList.notNow
                }
                fontSize={11}
            />
            <SmallBoxInTable
                topText={'周五'}
                bottomText={firstDayOfThisWeek.add(4).Day + '日'}
                color={
                    firstDayOfThisWeek.add(4).Day == nowDate.Day &&
                    firstDayOfThisWeek.add(4).Month == nowDate.Month
                        ? colorInList.now
                        : colorInList.notNow
                }
                fontSize={11}
            />
            <SmallBoxInTable
                topText={'周六'}
                bottomText={firstDayOfThisWeek.add(5).Day + '日'}
                color={
                    firstDayOfThisWeek.add(5).Day == nowDate.Day &&
                    firstDayOfThisWeek.add(5).Month == nowDate.Month
                        ? colorInList.now
                        : colorInList.notNow
                }
                fontSize={11}
            />
            <SmallBoxInTable
                topText={'周日'}
                bottomText={firstDayOfThisWeek.add(6).Day + '日'}
                color={
                    firstDayOfThisWeek.add(6).Day == nowDate.Day &&
                    firstDayOfThisWeek.add(6).Month == nowDate.Month
                        ? colorInList.now
                        : colorInList.notNow
                }
                fontSize={11}
            />
        </TopDateWrapper>
    )
}

export default TopDate
// TopDate
