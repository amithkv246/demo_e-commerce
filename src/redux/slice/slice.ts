import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    isMobile: boolean,
    searchText: string,
    isSearch: boolean,
    isDisabled: boolean,
}

const initialState: CounterState = {
    isMobile: false,
    searchText: "",
    isSearch: false,
    isDisabled: false,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

        updateSearchText: (state, action: PayloadAction<string>) => {
            state.searchText = action.payload
        },

        updateIsMobile: (state, action: PayloadAction<boolean>) => {
            state.isMobile = action.payload
        },

        updateIsSearch: (state, action: PayloadAction<boolean>) => {
            state.isSearch = action.payload
        },

        updateIsDisabled: (state, action: PayloadAction<boolean>) => {
            state.isDisabled = action.payload
        },

    },
})

// Action creators are generated for each case reducer function
export const { updateIsMobile, updateSearchText, updateIsSearch, updateIsDisabled } = counterSlice.actions

export default counterSlice.reducer
