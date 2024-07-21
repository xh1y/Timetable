/**
 * Create time: 2024 07 21  17:11:15
 * File name: home.ts
 * Path: src/stores/modules/home
 * About:
 */
import { createSlice } from '@reduxjs/toolkit'

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        lists: [],
        totalWeek: 0,
    },
    reducers: {
        //
    },
})

export default homeSlice
