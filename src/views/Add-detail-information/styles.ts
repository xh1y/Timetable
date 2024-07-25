/*
 * Create time: 2024 07 24  11:24:32
 */

import styled from 'styled-components'
import { width } from '../../assets/constant/constants.ts'

export const DetailWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    height: ${width * 2.22}px;
    width: ${width}px;
    background-color: #dfe6ff;

    .left-arr {
        position: relative;
        top: 10px;
        margin-left: 20px;
    }

    .add-title-container {
        margin-left: 20px;
        position: relative;
        top: 222px;
        height: 100px;
        font-size: 30px;
    }

    .input {
        position: relative;
        top: 210px;
    }

    .go-to-next {
        width: 70px;
        height: 70px;
        position: relative;
        top: 500px;
        left: 0;
        right: 0;
        margin: 0 auto;
        border-radius: 25px;
        align-items: center;
        background: linear-gradient(#5a5bf4, #2a23d2);

        > svg {
            position: relative;
            left: 20px;
            top: 20px;
            margin: auto;
        }
    }
`
