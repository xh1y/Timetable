/*
 * Create time: 2024 07 21  13:55:10
 */

import { LeftShowWrapper } from './styles.ts'
import SmallBoxInTable from '../../../../../../components/small-box-in-table'
import { colorInList } from '../../../../../../types/types.ts'

function LeftPart() {
    let counter = 1
    return (
        <LeftShowWrapper>
            <SmallBoxInTable
                topText={counter++}
                bottomText={''}
                color={colorInList.notNow}
                fontSize={10}></SmallBoxInTable>
            <SmallBoxInTable
                topText={counter++}
                bottomText={''}
                color={colorInList.notNow}
                fontSize={10}
                offset={1}></SmallBoxInTable>
            <SmallBoxInTable
                topText={counter++}
                bottomText={''}
                color={colorInList.notNow}
                fontSize={10}
                offset={2}></SmallBoxInTable>
            <SmallBoxInTable
                topText={counter++}
                bottomText={''}
                color={colorInList.notNow}
                fontSize={10}
                offset={counter - 2}></SmallBoxInTable>
            <SmallBoxInTable
                topText={counter++}
                bottomText={''}
                color={colorInList.notNow}
                fontSize={10}
                offset={4}></SmallBoxInTable>
            <SmallBoxInTable
                topText={counter++}
                bottomText={''}
                color={colorInList.notNow}
                fontSize={10}
                offset={counter - 2}></SmallBoxInTable>
            <SmallBoxInTable
                topText={counter++}
                bottomText={''}
                color={colorInList.notNow}
                fontSize={10}
                offset={counter - 2}></SmallBoxInTable>
            <SmallBoxInTable
                topText={counter++}
                bottomText={''}
                color={colorInList.notNow}
                fontSize={10}
                offset={counter - 2}></SmallBoxInTable>
            <SmallBoxInTable
                topText={counter++}
                bottomText={''}
                color={colorInList.notNow}
                fontSize={10}
                offset={counter - 2}></SmallBoxInTable>
            <SmallBoxInTable
                topText={counter++}
                bottomText={''}
                color={colorInList.notNow}
                fontSize={10}
                offset={counter - 2}></SmallBoxInTable>
            <SmallBoxInTable
                topText={counter++}
                bottomText={''}
                color={colorInList.notNow}
                fontSize={10}
                offset={counter - 2}></SmallBoxInTable>
            <SmallBoxInTable
                topText={counter++}
                bottomText={''}
                color={colorInList.notNow}
                fontSize={10}
                offset={counter - 2}></SmallBoxInTable>
        </LeftShowWrapper>
    )
}

export default LeftPart
// LeftPart
