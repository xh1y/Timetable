/**
 * Create time: 2024 07 24  14:49:48
 * File name: styles.ts
 * Path: src/views/Total
 * About:
 */
import styled from 'styled-components'
import { width } from '../../assets/constants.ts'

export const TotalPageWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    height: ${width * 2.22}px;
    width: ${width}px;
    background-color: #dfe6ff;
    overflow: hidden;
    transition: 2s;

    .left-arr {
        position: relative;
        top: 10px;
        margin-left: 20px;
    }

    .input-title {
        position: relative;
        top: 200px;
    }

    .input-detail {
        position: relative;
        top: 200px;
    }

    .week-show {
        position: relative;
        top: 210px;
        margin-left: 20px;
    }

    .day-and-start-end {
        position: relative;
        top: 215px;
        display: flex;
        flex-direction: row;
        margin-left: 20px;

        > div {
            margin-right: 5px;
        }
    }

    .add {
        transition: 2s;
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

export const ChooseWrapper = styled.div`
    background-color: #fff;
    height: 350px;
    position: absolute;
    bottom: 0;

    box-shadow: 0 1px 5px 5px #f4f5fa;
    align-content: flex-start;

    border-radius: 15px;

    .btns {
        margin-top: 20px;
        margin-left: 10px;
        margin-right: 10px;
        display: flex;
        flex-direction: row;
        flex-flow: row wrap;
        > div {
            margin: 5px 5px;
        }
    }

    .confirm {
        position: relative;
        top: 30px;
        left: ${(width - 100) / 2}px;
    }

    z-index: 100;
`

export const ChooseWrapperTime = styled.div`
    background-color: #fff;
    height: 450px;
    position: absolute;
    bottom: 0;

    box-shadow: 0 1px 5px 5px #f4f5fa;
    align-content: flex-start;

    border-radius: 15px;

    .btns {
        margin-top: 20px;
        margin-left: 10px;
        margin-right: 10px;
        display: flex;
        flex-direction: row;
        flex-flow: row wrap;

        > div {
            margin: 5px 5px;
        }
    }

    .confirm {
        position: relative;
        top: 30px;
        left: ${(width - 100) / 2}px;
    }

    .word-top {
        margin-top: 20px;
        margin-left: 20px;
        margin-right: 20px;
    }

    z-index: 102;
`
