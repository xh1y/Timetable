/**
 * Create time: 2024 07 21  17:09:30
 * File name: index.tsx
 * Path: src/stores
 * About:
 */
import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './modules/home/home'
import allUpdateReducer from './modules/all-update/all-update'

const store = configureStore({
    reducer: {
        home: homeReducer,
        allUpdate: allUpdateReducer,
    },
})

export default store
