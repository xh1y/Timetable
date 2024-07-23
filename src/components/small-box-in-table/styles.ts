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
    width: ${width / 8 - 2}px;
    height: ${(props) => {
        return props.$number * 60
    }}px;
    border-radius: 8px;
    background-color: ${(props) => {
        return colorOptions[props.$color].background
    }};

    &:hover {
        transition: 1.5s;
        transform: scale(0.9);
    }

    display: flex;
    //display: table;
    flex-direction: column;

    margin: 1px;
    transition: 1.5s;

    transform: translateY(${(props) => props.$offset}px);

    .top {
        color: ${(props) => {
            return colorOptions[props.$color].color
        }};
        margin-top: 10px;
        top: 0;
        align-items: flex-start;
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
        //align-content: center;
    }

    .bottomText {
        color: ${(props) => {
            return colorOptions[props.$color].colorBottom
        }};
        margin-bottom: 10px;
        align-items: flex-end;
    }

    .big {
        line-height: 60px;
        text-align: center;
        color: ${(props) => {
            return colorOptions[props.$color].color
        }};
    }
`
