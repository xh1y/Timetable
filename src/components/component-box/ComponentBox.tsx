/**
 * Create time: 2024 07 24  16:56:7
 * File name: ComponentBox.tsx
 * Path: src\components\component-box\ComponentBox.tsx
 * About:
 */
import { ComponentBoxWrapper } from './style.ts'
import React, { MouseEvent } from 'react'

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
