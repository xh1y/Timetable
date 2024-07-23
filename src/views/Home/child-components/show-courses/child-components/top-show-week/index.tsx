/**
 * Create time: 2024 07 21  13:55:57
 * File name: index.tsx
 * Path: src\views\Home\child-components\show-courses\child-components\top-show-week\index.tsx
 * About:
 */
import { BackToNowButtonWrapper, TopTimeWrapper } from './styles.ts'
import { Dispatch, SetStateAction } from 'react'

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
        </TopTimeWrapper>
    )
}

export default TopWeek
// TopWeek
