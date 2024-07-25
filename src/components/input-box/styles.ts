/* Create time: 2024 07 24  11:33:40 */

import styled from 'styled-components'
import { width } from '../../assets/constant/constants.ts'

export const InputBoxWrapper = styled.div<{ $backgroundColor?: string }>`
    background-color: ${(props) =>
        props.$backgroundColor ? props.$backgroundColor : '#eef5fd'};
    margin-left: 20px;
    margin-right: 20px;
    width: ${width - 40}px;
    height: 60px;
    border-radius: 30px;

    > input {
        border: 0; // 去除未选中状态边框
        outline: none; // 去除选中状态边框
        background-color: rgba(0, 0, 0, 0); // 透明背景
        height: 50px;
        position: relative;
        left: 20px;
        top: 5px;
        font-size: 20px;
        width: ${width - 80}px;
    }
`
