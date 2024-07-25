/**
 * Create time: 2024 07 21  17:11:15
 * File name: home.ts
 * Path: src/stores/modules/home
 * About:
 */
import { AsyncThunk, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { myRequest } from '../../../services'
import { AxiosResponse } from 'axios'

export const fetchClassesAndTotalWeekAction: AsyncThunk<
    AxiosResponse,
    any,
    any
> = createAsyncThunk('fetchClassesAndTotalWeekAction', async () => {
    const res = await myRequest.get()
    console.log(res)
    return res
})

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        lists: [],
        totalWeek: 0,
    },
    reducers: {
        changeClassesReducer(state, { payload }) {
            console.log(payload)
            state.lists = payload
        },
        getTotalWeekReducer(state, { payload }) {
            console.log(payload)
            state.totalWeek = payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            fetchClassesAndTotalWeekAction.pending,
            (state, { payload }) => {
                console.log('pending', payload)
                console.log(state)
            }
        )
        builder.addCase(
            fetchClassesAndTotalWeekAction.fulfilled,
            (state, action) => {
                console.log('fulfilled', action)
                state.lists = action.payload.data.list
                state.totalWeek = action.payload.data.totalWeek
            }
        )
        builder.addCase(
            fetchClassesAndTotalWeekAction.rejected,
            (state, action) => {
                console.log('rejected', action)
                console.log(state)
            }
        )
    },
})

export default homeSlice.reducer
export const { changeClassesReducer, getTotalWeekReducer } = homeSlice.actions
