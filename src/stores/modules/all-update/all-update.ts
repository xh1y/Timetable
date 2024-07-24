/**
 * Create time: 2024 07 24  21:33:48
 * File name: all-update.ts
 * Path: src/stores/modules/all-update
 * About:
 */
import { createSlice } from '@reduxjs/toolkit'
import { classDataRaw } from '../../../data'

const updateNewSlice = createSlice({
    name: 'updateNew',
    initialState: classDataRaw,
    reducers: {
        addNewItemInThingsAction(state, { payload }) {
            const newState = { ...state }
            newState.commonThingsList.push(payload)
            state = newState
        },
        deleteItemInThingsAction(state, { payload }) {
            const newState = { ...state }
            newState.commonThingsList = newState.commonThingsList.filter(
                (item) => item.id !== payload.id
            )

            state = newState
        },
    },
})

export const { addNewItemInThingsAction, deleteItemInThingsAction } =
    updateNewSlice.actions
export default updateNewSlice.reducer
