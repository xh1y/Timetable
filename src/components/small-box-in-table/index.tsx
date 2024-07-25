/**
 * Create time: 2024 07 21  14:33:49
 * File name: index.tsx
 * Path: src\components\small-box-in-table\index.tsx
 * About:
 */
import { SmallBoxInTableWrapper } from './styles.ts'
import { colorInList, CoursesOneTime } from '../../types/types.ts'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { emptyItem } from '../../assets/sortData.ts'

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
