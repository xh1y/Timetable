/**
 * Create time: 2024 07 21  14:33:29
 * File name: styles.ts
 * Path: src/components/small-box-in-table
 * About:
 */
import styled from 'styled-components'
import { IBoxProps } from '../../types'
import { colorOptions, width } from '../../assets/constants.ts'

export const SmallBoxInTableWrapper = styled.div<IBoxProps>`
    width: ${width / 8}px;
    height: ${(props) => {
        return props.$number * 60
    }}px;
    border-radius: 6px;
    background-color: ${(props) => {
        return colorOptions[props.$color].background
    }};

    display: flex;
    flex-direction: column;

    .top {
        color: ${(props) => {
            return colorOptions[props.$color].color
        }};
        margin-top: 10px;
        top: 0;
    }

    .words {
        display: flex;
        flex-direction: row;
        position: relative;
        margin-left: 9px;
        margin-right: 9px;
        //width: ${width / 8 - 18};
        justify-content: center;
        font-size: 9px;
        flex: 1;
        text-overflow: ellipsis;
        //white-space: nowrap;
        overflow: hidden;
        text-align: center;
    }

    .bottomText {
        color: ${(props) => {
            return colorOptions[props.$color].colorBottom
        }};
        bottom: 0;
    }

    .big {
        line-height: 60px;
        text-align: center;
        color: ${(props) => {
            return colorOptions[props.$color].color
        }};
    }
`
