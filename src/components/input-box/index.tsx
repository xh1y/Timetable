/**
 * Create time: 2024 07 24  11:33:22
 * File name: index.tsx
 * Path: src\components\input-box\index.tsx
 * About:
 */
import { InputBoxWrapper } from './styles.ts'
import { ChangeEvent } from 'react'

function InputBox({
    defaultValue,
    onChange,
    backgroundColor,
}: {
    defaultValue?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    backgroundColor?: string
}) {
    // state

    // effect

    // event handler

    // return
    return (
        <InputBoxWrapper $backgroundColor={backgroundColor}>
            <input
                type={'text'}
                defaultValue={defaultValue}
                onChange={onChange}
            />
        </InputBoxWrapper>
    )
}

export default InputBox
// InputBox
