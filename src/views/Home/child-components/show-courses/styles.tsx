/**
 * Create time: 2024 07 21  00:40:55
 * File name: index.ts
 * Path: src/views/Home/child-components/show-courses
 * About:
 */
import styled from 'styled-components'
import { width } from '../../../../assets/constants.ts'

const CoursesWrapper = styled.div`
    position: absolute;
    //border: 1px solid #000;
    transition: transform 1s;
`

const BottomWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    top: 60px;
    width: 100%;
    height: 780px;
    //background: green;
`

const UnderMovableWrapper = styled.div<{ offset: number }>`
    position: relative;
    top: 50px;
    display: flex;
    flex-direction: row;
    transform: translateX(-${(props) => props.offset}px);
    transition: transform 1s;
    height: ${width * 2.22 * 0.95 - 160}px;

    .oneWeek {
        margin: 0;
        width: ${width}px;
    }
`

export { CoursesWrapper, BottomWrapper, UnderMovableWrapper }
