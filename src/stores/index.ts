/**
 * Create time: 2024 07 21  17:09:30
 * File name: index.ts
 * Path: src/stores
 * About:
 */
import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './modules/home/home'

const store = configureStore({
    reducer: {
        home: homeReducer,
    },
})

export default store
