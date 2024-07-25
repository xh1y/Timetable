/*
 * Create time: 2024 07 21  13:53:38 */

import styled from 'styled-components'
import { width } from '../../../../../../assets/constant/constants.ts'

const RightShowWrapper = styled.div`
    position: absolute;
    left: ${width / 8}px;
    width: ${(width / 8) * 7}px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .one-time-grid {
        //display: flex;
        //flex-direction: row;
    }
`

const OneTimeWrapper = styled.div<{ $offset: number }>`
    position: absolute;
    display: flex;
    top: ${(props) => props.$offset * 62}px;
`

export { RightShowWrapper, OneTimeWrapper }
