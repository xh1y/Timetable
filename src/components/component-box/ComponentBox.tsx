/* Create time: 2024 07 24  16:56:7 */

// A component that is mainly used as a button
import React, { MouseEvent } from 'react'
import { ComponentBoxWrapper } from './style.ts'

/**
 * @param width Specify the width of the component (not required, defaults to fit-content)
 * @param height Specify the height of the component (required)
 * @param backgroundColor Specify the background color of the component (not required, defaults to #eef5fd)
 * @param text Specifies the text to be displayed by the component
 * @param element Specifies the elements displayed by the component <br />
 * <b>(note: one of the two must be present with element, if both are present, only text will be executed)</b>
 * @param fontSize Specify text font size (not required)
 * @param color Specify text color (not required, default is black)
 * @param onClick Specify the click event (not required)
 */
function ComponentBox({
    width,
    height,
    backgroundColor,
    text,
    element,
    fontSize,
    color,
    onClick,
}: {
    width?: number
    height: number
    backgroundColor?: string
    text?: string
    element?: React.JSX.Element
    fontSize?: number
    color?: string
    onClick?: (e: MouseEvent<HTMLDivElement> | null) => void
}) {
    return (
        <ComponentBoxWrapper
            $height={height}
            $width={width}
            $background={backgroundColor}
            $fontSize={fontSize}
            $color={color}
            onClick={onClick}>
            {text ? <div>{text}</div> : element ? element : <></>}
        </ComponentBoxWrapper>
    )
}

export default ComponentBox
// ComponentBox
