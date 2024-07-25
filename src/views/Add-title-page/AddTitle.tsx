/*
 * Create time: 2024 07 24  11:17:46
 */

import { getQuery } from '../../assets/function/getQuery.ts'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { TitleWrapper } from './styles.ts'
import LeftArrow from '../../assets/svg/left-arrow.tsx'
import InputBox from '../../components/input-box'
import RightArrowWithLeft from '../../assets/svg/right-arrow-with-left-.tsx'

function AddTitle() {
    // state
    const query = getQuery(decodeURI(useLocation().search).slice(1).split('&'))
    console.log(query.title, query.thing)
    const defaultValue =
        query.title == null || query.title == ' ' ? '' : query.title
    const [inputText, setInputText] = useState(defaultValue)

    // effect

    // event handler

    // return
    return (
        <TitleWrapper>
            <div
                className='left-arr'
                onClick={() => {
                    window.location.href = '/'
                }}>
                <LeftArrow />
            </div>
            <div className='add-title-container'>
                为你的行程添加
                <br />
                标题
            </div>
            <div className='input'>
                <InputBox
                    defaultValue={defaultValue}
                    onChange={(e) => setInputText(e.target.value)}
                />
            </div>
            <div
                className='go-to-next'
                onClick={() => {
                    if (inputText == '') {
                        alert('标题不能为空')
                    } else {
                        window.location.href =
                            '/#/add/detail?title=' + inputText
                    }
                }}>
                <RightArrowWithLeft />
            </div>
        </TitleWrapper>
    )
}

export default AddTitle
// AddTitle
