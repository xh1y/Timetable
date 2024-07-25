/* Create time: 2024 07 24  11:33:22 */
import { InputBoxWrapper } from './styles.ts'
import { ChangeEvent } from 'react'

/**
 * Text box made according to the usage scenario, without borders and default white color.
 * @param defaultValue Specify the default value of the text box (Not required)
 * @param onChange Specify the event when the input changes (not required)
 * @param backgroundColor Specify the background color (not required)
 */
function InputBox({
    defaultValue,
    onChange,
    backgroundColor,
}: {
    defaultValue?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    backgroundColor?: string
}) {
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
