/*
 * Create time: 2024 07 25  19:25:00
 */

import styled from 'styled-components'
import { width } from '../../assets/constant/constants.ts'

export const TimeWrapper = styled.div`
    position: absolute;
    top: 2px;
    left: 0;
    right: 0;
    margin: 0 auto;
    font-size: 11px;
    height: 14px;
    width: ${width}px;
    background-color: #fff;
    z-index: 666;
    text-align: center;
`
