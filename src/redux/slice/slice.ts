import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    isMobile: boolean,
    searchText: string,
    isSearch: boolean,
    isDisabled: boolean,
    isSorted: boolean,
    sortColor: string,
}

const initialState: CounterState = {
    isMobile: false,
    searchText: "",
    isSearch: false,
    isDisabled: false,
    isSorted: false,
    sortColor: "",
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

        updateIsSorted: (state, action: PayloadAction<boolean>) => {
            state.isSorted = action.payload
        },
        updateSortColor: (state, action: PayloadAction<string>) => {
            state.sortColor = action.payload
        },

    },
})

// Action creators are generated for each case reducer function
export const { updateIsMobile, updateSearchText, updateIsSearch, updateIsDisabled, updateIsSorted, updateSortColor } = counterSlice.actions

export default counterSlice.reducer
