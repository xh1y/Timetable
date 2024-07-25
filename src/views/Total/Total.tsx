/*
 * Create time: 2024 07 24  11:19:3
 */

import { getQuery } from '../../assets/function/getQuery.ts'
import { useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import {
    CourseOneDay,
    Day,
    IClassLists,
    ICommonThings,
} from '../../types/types.ts'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { addNewItemInThingsAction } from '../../stores/modules/all-update/all-update.ts'
import axios from 'axios'
import { myRequest } from '../../services'
import { sortDataToWeek } from '../../assets/function/sortData.ts'
import { ChooseWrapper, ChooseWrapperTime, TotalPageWrapper } from './styles.ts'
import ComponentBox from '../../components/component-box/ComponentBox.tsx'
import {
    changeNumberToChinese,
    getTime,
    newCourseOneDay,
    newDay,
} from '../../assets/function/getAccurateDate.ts'
import {
    endTimeOfClass,
    startTimeOfClass,
} from '../../assets/constant/constants.ts'
import LeftArrow from '../../assets/svg/left-arrow.tsx'
import InputBox from '../../components/input-box'
import RightArrowWithLeft from '../../assets/svg/right-arrow-with-left-.tsx'

function Total() {
    // state
    const query = getQuery(useLocation().search.slice(1).split('&'))
    const [detail, setDetail] = useState(decodeURI(query.detail))
    const [displayChoose, setDisplayChoose] = useState<
        'none' | 'week' | 'day' | 'class'
    >('none')
    const [title, setTitle] = useState<string>(decodeURI(query.title))
    console.log(decodeURI(title), decodeURI(detail))
    const [week, setWeek] = useState<number>(1)
    const [day, setDay] = useState<Day>(1)
    const [startClass, setStartClass] = useState<CourseOneDay>(1)
    const [endClass, setEndClass] = useState<CourseOneDay>(1)
    const totalWeek = useRef<number>(0)
    const dispatch = useDispatch()
    const { commonThingsList } = useSelector(
        (state: { allUpdate: IClassLists }) => ({
            commonThingsList: state.allUpdate.commonThingsList,
        }),
        shallowEqual
    )

    const { allUpdate } = useSelector(
        (state: any) => ({
            allUpdate: state.allUpdate,
        }),
        shallowEqual
    )
    console.log('!!!!______')
    console.log(allUpdate)

    function addItemsInCommonThings(payload: ICommonThings) {
        dispatch(addNewItemInThingsAction(payload))
    }
    console.log(commonThingsList)
    // effect
    useEffect(() => {
        axios.get('/class/data/').then((r) => console.log(r.data))
        myRequest.get().then((r: any) => {
            console.log(r)
            console.log(sortDataToWeek(r))
            totalWeek.current = r.totalWeek
        })
    }, [])
    // event handler
    function getLowerShow(
        displayChoose: 'none' | 'week' | 'day' | 'class',
        Week: JSX.Element,
        Day: JSX.Element,
        Class: JSX.Element
    ) {
        switch (displayChoose) {
            case 'week':
                return Week
            case 'day':
                return Day
            case 'class':
                return Class
            case 'none':
                return <></>
        }
    }

    function getArrayTime(
        startTime: CourseOneDay,
        endTime: CourseOneDay
    ): CourseOneDay[] {
        const newArr: CourseOneDay[] = []
        for (let i = startTime; i <= endTime; i++) {
            newArr.push(i)
        }

        return newArr
    }
    const newArrWeek = new Array(totalWeek.current).fill(1)
    console.log(totalWeek.current)

    const ChooseWeek = (
        <ChooseWrapper>
            <div className='btns'>
                {newArrWeek.map((_item, index) => {
                    return (
                        <ComponentBox
                            height={30}
                            fontSize={14}
                            key={index}
                            text={`第${index + 1}周`}
                            color={index + 1 == week ? '#efa49a' : '#000'}
                            onClick={() => {
                                setWeek(index + 1)
                            }}
                        />
                    )
                })}
            </div>
            <div
                className='confirm'
                onClick={() => {
                    setDisplayChoose('none')
                }}>
                <ComponentBox
                    height={40}
                    width={100}
                    text={'确定'}
                    backgroundColor={`linear-gradient(to right, #2a22d2, #5d5deb)`}
                    color={'#fff'}
                />
            </div>
        </ChooseWrapper>
    )
    const newArrDay = new Array(7).fill(1)
    const ChooseDay = (
        <ChooseWrapper>
            <div className='btns'>
                {newArrDay.map((_item, index) => {
                    return (
                        <ComponentBox
                            height={30}
                            fontSize={14}
                            key={index}
                            text={`星期${changeNumberToChinese(index + 1)}`}
                            color={index + 1 == day ? '#efa49a' : '#000'}
                            onClick={() => {
                                setDay(newDay(index + 1))
                            }}
                        />
                    )
                })}
            </div>
            <div
                className='confirm'
                onClick={() => {
                    setDisplayChoose('none')
                }}>
                <ComponentBox
                    height={40}
                    width={100}
                    text={'确定'}
                    backgroundColor={`linear-gradient(to right, #2a22d2, #5d5deb)`}
                    color={'#fff'}
                />
            </div>
        </ChooseWrapper>
    )
    const newArrTime = new Array(12).fill(1)
    const newArrSTime = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    const ChooseTime = (
        <ChooseWrapperTime>
            <div className='word-top'>开始时间：</div>
            <div className='btns'>
                {newArrTime.map((_item, index) => {
                    return (
                        <ComponentBox
                            height={30}
                            fontSize={14}
                            key={index}
                            text={`${startTimeOfClass[index]}`}
                            color={index + 1 == startClass ? '#efa49a' : '#000'}
                            onClick={() => {
                                setStartClass(newCourseOneDay(index + 1))
                            }}
                        />
                    )
                })}
            </div>
            <div className='word-top'>结束时间：</div>
            <div className='btns'>
                {newArrSTime
                    .filter((_item, index) => index + 1 >= startClass)
                    .map((_item, index) => {
                        if (startClass > endClass) {
                            setEndClass(startClass)
                        }
                        return (
                            <ComponentBox
                                height={30}
                                fontSize={14}
                                key={index + startClass + 999}
                                text={`${endTimeOfClass[index + startClass - 1]}`}
                                color={
                                    index + startClass == endClass
                                        ? '#efa49a'
                                        : '#000'
                                }
                                onClick={() => {
                                    setEndClass(
                                        newCourseOneDay(startClass + index)
                                    )
                                }}
                            />
                        )
                    })}
            </div>
            <div
                className='confirm'
                onClick={() => {
                    setDisplayChoose('none')
                }}>
                <ComponentBox
                    height={40}
                    width={100}
                    text={'确定'}
                    backgroundColor={`linear-gradient(to right, #2a22d2, #5d5deb)`}
                    color={'#fff'}
                />
            </div>
        </ChooseWrapperTime>
    )

    // return
    return (
        <TotalPageWrapper>
            <div
                className='left-arr'
                onClick={() => {
                    window.location.href = '/'
                }}>
                <LeftArrow />
            </div>
            <div className='input-title'>
                <InputBox
                    defaultValue={decodeURI(title)}
                    backgroundColor={'#dfe6ff'}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className='input-detail'>
                <InputBox
                    defaultValue={decodeURI(detail)}
                    onChange={(e) => setDetail(e.target.value)}
                />
            </div>

            <div
                className='week-show'
                onClick={() => {
                    setDisplayChoose('week')
                }}>
                <ComponentBox
                    height={30}
                    text={`第${week}周`}
                    fontSize={13}
                />
            </div>
            <div className='day-and-start-end'>
                <ComponentBox
                    height={30}
                    text={`星期${changeNumberToChinese(day)}`}
                    fontSize={13}
                    onClick={() => {
                        setDisplayChoose('day')
                    }}
                />
                <ComponentBox
                    height={30}
                    text={getTime(
                        startClass,
                        (endClass - startClass + 1) as CourseOneDay
                    )}
                    fontSize={13}
                    onClick={() => {
                        setDisplayChoose('class')
                    }}
                />
            </div>

            <div className='add'>
                {getLowerShow(displayChoose, ChooseWeek, ChooseDay, ChooseTime)}
            </div>

            <div
                className='go-to-next'
                onClick={() => {
                    addItemsInCommonThings({
                        id: week * 1000 + day * 100 + startClass,
                        title: decodeURI(title),
                        detail: decodeURI(detail),
                        week: [week],
                        day: day,
                        time: getArrayTime(startClass, endClass),
                    })
                    console.log(commonThingsList)
                    window.location.href = '/'
                }}>
                <RightArrowWithLeft />
            </div>
        </TotalPageWrapper>
    )
}

export default Total
// Total
