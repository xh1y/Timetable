/*
 * Create time: 2024 07 22  21:52:59
 */

import { CoursesOneTime } from '../../../../../../types/types.ts'
import { InformationWrapper } from './styles.ts'
import { getTime } from '../../../../../../assets/function/getAccurateDate.ts'
import RightArrow from '../../../../../../assets/svg/right-arrow.tsx'

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
            <div className='header-name'>
                <div className='name'>{displayInformation.name}</div>
            </div>
            <div className='small-place-and-teacher'>
                <span className='place'>{displayInformation.place}</span>
                <span className='right-array'>
                    <RightArrow />
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
                    {displayInformation.isClass ? (
                        <>
                            <span className='row-left'>课程类型</span>
                            <span className='row-right'>
                                {displayInformation.compulsory
                                    ? '必修'
                                    : '选修'}
                            </span>
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </InformationWrapper>
    )
}

export default InformationBox
// InformationBox
