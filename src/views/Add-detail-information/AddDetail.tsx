/**
 * Create time: 2024 07 24  11:18:9
 * File name: AddDetail.tsx
 * Path: src\views\Add-detail-information\AddDetail.tsx
 * About:
 */
import { DetailWrapper } from './styles.ts'
import LeftArray from '../../assets/svg/left-array.tsx'
import { useState } from 'react'
import InputBox from '../../components/input-box'
import RightArrowWithLeft from '../../assets/svg/right-arrow-with-left-.tsx'
import { useLocation } from 'react-router-dom'
import { getQuery } from '../../assets/getQuery.ts'

function AddDetail() {
    // state
    const [inputTextDetail, setInputTextDetail] = useState('')
    // effect

    // event handler
    const location = useLocation()
    console.log(location)
    console.log(location.search.slice(1).split('&'))
    const query = getQuery(useLocation().search.slice(1).split('&'))
    const title = query.title
    console.log(title)
    // return
    return (
        <DetailWrapper>
            <div
                className='left-arr'
                onClick={() => {
                    window.location.href = '/#/add/title?title=' + title
                }}>
                <LeftArray />
            </div>
            <div className='add-title-container'>
                为你的行程添加
                <br />
                具体内容
            </div>
            <div className='input'>
                <InputBox
                    defaultValue={''}
                    onChange={(e) => setInputTextDetail(e.target.value)}
                />
            </div>
            <div
                className='go-to-next'
                onClick={() => {
                    window.location.href =
                        '/#/add/total?title=' +
                        title +
                        '&detail=' +
                        (inputTextDetail == '' ? ' ' : inputTextDetail)
                }}>
                <RightArrowWithLeft />
            </div>
        </DetailWrapper>
    )
}

export default AddDetail
// AddDetail
