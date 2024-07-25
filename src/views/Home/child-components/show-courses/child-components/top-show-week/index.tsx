/*
 * Create time: 2024 07 21  13:55:57*/

import { Dispatch, SetStateAction } from 'react'
import {
    AddItemWrapper,
    BackToNowButtonWrapper,
    TopTimeWrapper,
} from './styles.ts'
import AddNewItem from '../../../../../../assets/svg/add-new-item.tsx'

const TopWeek = ({
    week,
    currentWeek,
    setStartWeek,
}: {
    week: number
    currentWeek: number
    setStartWeek: Dispatch<SetStateAction<number>>
}) => {
    // return
    return (
        <TopTimeWrapper onMouseDown={(e) => console.log(e, 'fxxk you')}>
            <div className='week'>第{week}周</div>
            {currentWeek != week ? (
                <BackToNowButtonWrapper
                    onMouseDown={(e) => {
                        e.stopPropagation()
                        e.preventDefault()
                        console.log('Fxxk! fxxk! fxxk!')
                        console.log('----------------------------')
                        setStartWeek(currentWeek)
                    }}>
                    回到本周
                </BackToNowButtonWrapper>
            ) : (
                <></>
            )}
            <AddItemWrapper>
                <AddNewItem />
            </AddItemWrapper>
        </TopTimeWrapper>
    )
}

export default TopWeek
// TopWeek
