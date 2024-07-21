/**
 * Create time: 2024 07 21  14:33:49
 * File name: index.tsx
 * Path: src\components\small-box-in-table\index.tsx
 * About:
 */
import { SmallBoxInTableWrapper } from './styles.ts'
import { colorInList } from '../../types'

function SmallBoxInTable({
    topText,
    bottomText,
    color,
    fontSize,
}: {
    topText: string | number
    bottomText: string
    color: colorInList
    fontSize?: number
}) {
    // state

    // effect

    // event handler

    // return
    return (
        <SmallBoxInTableWrapper
            $number={1}
            $color={color}>
            {bottomText !== '' ? (
                <>
                    <div className='top words'>{topText}</div>
                    <div className='bottomText words'>{bottomText}</div>
                </>
            ) : (
                <div
                    className='big'
                    style={{ fontSize: fontSize }}>
                    {topText}
                </div>
            )}
        </SmallBoxInTableWrapper>
    )
}

export default SmallBoxInTable
// Index
