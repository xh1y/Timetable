/**
 * Create time: 2024 07 21  17:09:30
 * File name: index.tsx
 * Path: src/stores
 * About:
 */
import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './modules/home/home'
import allUpdateReducer from './modules/all-update/all-update'
// @ts-ignore
import storageSession from 'redux-persist/lib/storage/session'
import { persistReducer, persistStore } from 'redux-persist'

const storageConfig = {
    key: 'root',
    storage: storageSession,
    blacklist: [],
}

const persistHomeReducer = persistReducer(storageConfig, homeReducer)
const persistAllUpdateStore = persistReducer(storageConfig, allUpdateReducer)

const store = configureStore({
    reducer: {
        home: persistHomeReducer,
        allUpdate: persistAllUpdateStore,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export const myPersistStore = persistStore(store)

export default store
