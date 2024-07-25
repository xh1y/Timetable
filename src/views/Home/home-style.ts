/*
 * Create time: 2024 07 21  00:18:26
 */

import styled from 'styled-components'
import { width } from '../../assets/constant/constants.ts'
import { IMovingBoxProps } from '../../types/types.ts'

export const AppWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    height: ${width * 2.22}px;
    width: ${width}px;

    overflow: hidden;
    .background {
        background-color: #f8f9fd;
        height: ${width * 2.22}px;
        width: ${width}px;
        transition: 1s;
    }
`

export const TimeTableWrapper = styled.div<IMovingBoxProps>`
    position: relative;
    transform: translateY(-${(props: IMovingBoxProps) => props.$offsety}vh);
    transition: transform 2s;
    height: ${width * 2.22}px;
    background-color: #fff;
    width: 100%;
    border-top: 1px solid #e8eaf0;
    border-radius: 13px;
    .timetable {
        position: relative;
        width: 100%;
        height: 100%;
        .small-bar {
            position: relative;
            top: 13px;
            width: 39px;
            height: 4px;
            border-radius: 2px;
            background-color: #e1edfb;
            left: 0;
            right: 0;
            margin: 0 auto;
        }
    }
`
