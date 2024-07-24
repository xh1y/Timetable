/**
 * Create time: 2024 07 24  11:17:46
 * File name: AddTitle.tsx
 * Path: src\views\Add-title-page\AddTitle.tsx
 * About:
 */

import { TitleWrapper } from './styles.ts'
import InputBox from '../../components/input-box'
import LeftArray from '../../assets/svg/left-array.tsx'
import RightArrowWithLeft from '../../assets/svg/right-arrow-with-left-.tsx'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getQuery } from '../../assets/getQuery.ts'

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
                <LeftArray />
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
