/*
 * Create time: 2024 07 24  11:18:9
 */

import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getQuery } from '../../assets/function/getQuery.ts'
import { DetailWrapper } from './styles.ts'
import LeftArrow from '../../assets/svg/left-arrow.tsx'
import InputBox from '../../components/input-box'
import RightArrowWithLeft from '../../assets/svg/right-arrow-with-left-.tsx'

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
                <LeftArrow />
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
