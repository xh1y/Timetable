/*
 * Create time: 2024 07 21  14:33:49
 */

import { colorInList, CoursesOneTime } from '../../types/types.ts'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { SmallBoxInTableWrapper } from './styles.ts'
import { emptyItem } from '../../assets/function/sortData.ts'

/**
 * A component that displays text on two levels, mainly used in the class schedule display.
 * @param topText Specify the text of the above section (required)
 * @param bottomText Specify the text of the following section (required) <br />
 * <b>Note: If you want to display only one line of text, set bottomText to an empty string ('')</b>
 * @param color Specifies the color of the component. (required) <br />
 * there are these options in total:
 * morning,
 * afternoon,
 * evening,
 * defineAfter,
 * notNow,
 * now,
 * nothing,
 * add. <br />
 * The exact colors are in the constants.
 * @param fontSize Specify font size (not required)
 * @param height Specify component height (not required)
 * @param offset Specify component Y-axis offset (not required)
 * @param displayObj
 * @param course Specify the courses displayed by the component (used in class schedules, not required)
 * @param setInformation
 * @param img If image or other element want to display, set image to true (not required, default is false)
 * @param element Specify images or other elements to display (not required)
 */
function SmallBoxInTable({
    topText,
    bottomText,
    color,
    fontSize,
    height,
    offset,
    displayObj,
    course,
    setInformation,
    img,
    element,
}: {
    topText: string | number
    bottomText: string
    color: colorInList
    fontSize?: number
    height?: number
    offset?: number
    displayObj?: {
        setDisplay: Dispatch<SetStateAction<boolean>>
        display: boolean
    }
    course?: CoursesOneTime
    setInformation?: Dispatch<SetStateAction<CoursesOneTime>>
    img?: boolean
    element?: React.JSX.Element
}) {
    // state
    const [isPrepareAdd, setIsPrepareAdd] = useState<boolean>(false)
    // effect

    // event handler
    // return
    return (
        <SmallBoxInTableWrapper
            $offset={offset}
            $number={height != undefined ? height : 1}
            $color={color}
            onClick={(e) => {
                console.log('!!!')
                console.log(course)
                displayObj && displayObj.setDisplay(true)
                setInformation && setInformation(course ? course : emptyItem)
                if (topText != '') {
                    e.stopPropagation()
                }
                if (!isPrepareAdd) {
                    setIsPrepareAdd(true)
                } else {
                    setIsPrepareAdd(false)
                }
            }}>
            {!img ? (
                bottomText !== '' ? (
                    <>
                        <div className='top words'>{topText}</div>
                        <div className='bottomText words'>{bottomText}</div>
                    </>
                ) : (
                    <div
                        className='big'
                        style={{ fontSize: fontSize }}>
                        {topText}
                    </div>
                )
            ) : (
                element
            )}
        </SmallBoxInTableWrapper>
    )
}

export default SmallBoxInTable
// Index
