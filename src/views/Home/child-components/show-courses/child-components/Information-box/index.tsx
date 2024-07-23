/**
 * Create time: 2024 07 22  21:52:59
 * File name: index.tsx
 * Path: src\views\Home\child-components\show-courses\child-components\Information-box\index.tsx
 * About:
 */
import { InformationWrapper } from './styles.ts'
import RightArray from '../../../../../../assets/svg/right-array.tsx'
import { CoursesOneTime } from '../../../../../../types'
import { getTime } from '../../../../../../assets/sortData.ts'

function InformationBox({
    offset,
    displayInformation,
}: {
    offset: number
    displayInformation: CoursesOneTime
}) {
    console.log(`()()${displayInformation.timeDur}`)
    return (
        <InformationWrapper $offset={offset}>
            <div className='header-name'>{displayInformation.name}</div>
            <div className='small-place-and-teacher'>
                <span className='place'>{displayInformation.place}</span>
                <span className='right-array'>
                    <RightArray />
                </span>
                <span className='teacher'>{displayInformation.teacher}</span>
            </div>
            <div className='bottom-word'>
                <div className='one-row'>
                    <span className='row-left'>周期</span>
                    <span className='row-right'>
                        {displayInformation.startWeek !=
                        displayInformation.endWeek
                            ? displayInformation.startWeek +
                              '-' +
                              displayInformation.endWeek +
                              '周' +
                              (displayInformation.weekType != 'all'
                                  ? displayInformation.weekType == 'odd'
                                      ? '单周'
                                      : '双周'
                                  : '')
                            : displayInformation.startWeek + '周'}
                    </span>
                </div>
                <div className='one-row'>
                    <span className='row-left'>时间</span>
                    <span className='row-right'>
                        {displayInformation.timeStart &&
                            displayInformation.timeDur &&
                            getTime(
                                displayInformation.timeStart,
                                displayInformation.timeDur
                            )}
                    </span>
                </div>
                <div className='one-row'>
                    <span className='row-left'>课程类型</span>
                    <span className='row-right'>
                        {displayInformation.compulsory ? '必修' : '选修'}
                    </span>
                </div>
            </div>
        </InformationWrapper>
    )
}

export default InformationBox
// InformationBox
