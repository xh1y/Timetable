/* Create time: 2024 07 24  16:24:28 */

import styled from 'styled-components'

export const ComponentBoxWrapper = styled.div<{
    $width?: number
    $height: number
    $background?: string
    $fontSize?: number
    $color?: string
}>`
    width: ${(props) => (props.$width ? props.$width + 'px' : 'fit-content')};
    height: ${(props) => props.$height}px;
    border-radius: ${(props) => props.$height / 2}px;
    background: ${(props) =>
        props.$background ? props.$background : '#eef5fd'};
    line-height: ${(props) => props.$height}px;
    text-align: center;
    color: ${(props) => (props.$color ? props.$color : '#000')};
    > div {
        margin-left: ${(props) => props.$height / 2}px;
        margin-right: ${(props) => props.$height / 2}px;
    }
    ${(props) => {
        return `
                ${props.$fontSize ? 'font-size: ' + props.$fontSize + 'px;' : ''}
            `
    }}
`
