/**
 * Create time: 2024 07 22  21:40:19
 * File name: styles.ts
 * Path: src/views/Home/child-components/show-courses/child-components/right-show-courses/child-components
 * About:
 */
import styled from 'styled-components'
import { width } from '../../../../../../assets/constants.ts'

const InformationWrapper = styled.div<{ $offset: number }>`
    position: absolute;
    height: 300px;
    width: ${width}px;
    //bottom: 0;
    top: 600px;
    z-index: 9;
    box-shadow: 1px 1px 5px 1px #f4f5fa;
    background-color: #fff;

    border-radius: 8px;
    //transform: translateX(px);
    //transform: translateX(-${(props) => props.$offset}px);
    > div {
        margin: 10px;
    }

    display: flex;
    flex-direction: column;
    .header-name {
        position: relative;
        top: 18px;
        font-size: 21px;
        height: 24px;
        line-height: 24px;
        display: flex;
        flex-direction: row;

        .name {
            align-items: flex-start;
        }

        .buttons {
            position: absolute;
            left: ${width - 20 - 56}px;
        }
    }

    .small-place-and-teacher {
        top: 15px;
        position: relative;
        height: 11px;
        font-size: 10px;
        line-height: 11px;

        .right-array {
            position: relative;
            left: 3px;
        }

        .teacher {
            position: relative;
            left: 8px;
        }
    }

    .bottom-word {
        position: relative;
        top: 20px;
        height: 150px;
        display: flex;
        flex-direction: column;
        flex: 1;

        font-size: 13px;

        .one-row {
            display: flex;
            flex-direction: row;
            width: ${width - 20}px;
            flex: 1;
            align-items: center;

            .row-left {
                display: flex;
                justify-content: flex-start;
                flex: 1;
            }

            .row-right {
                display: flex;
                justify-content: flex-end;
                flex: 1;
                margin-right: 5px;
            }
        }
    }
`

export { InformationWrapper }
