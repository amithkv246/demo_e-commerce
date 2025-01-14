import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    // value: number;
    isMobile: boolean,
    searchText: string,
    isSearch: boolean,
    searchId: number[],
    noResults: number[],
    searchResults: Product[],
}

const initialState: CounterState = {
    // value: 0,
    isMobile: false,
    searchText: "",
    isSearch: false,
    searchId: [],
    searchResults: [],
    noResults: [],
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

        updateSearchId: (state, action: PayloadAction<number>) => {
            state.searchId = [...state.searchId, action.payload]
        },
        updateSearchResults: (state, action: PayloadAction<Product[]>) => {
            state.searchResults = action.payload
        },
        clearSearchId: (state) => {
            state.searchId = []
        },
        updateNoResults: (state, action: PayloadAction<number>) => {
            state.noResults = ([...state.noResults, action.payload])
        },
        clearNoResults: (state) => {
            state.noResults = []
        },

        // increment: (state) => {
        //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
        //     // doesn't actually mutate the state because it uses the Immer library,
        //     // which detects changes to a "draft state" and produces a brand new
        //     // immutable state based off those changes
        //     state.value += 1
        // },
        // decrement: (state) => {
        //     state.value -= 1
        // },
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload
        // },

    },
})

// Action creators are generated for each case reducer function
export const { updateIsMobile, updateSearchText, updateIsSearch, updateSearchId, clearSearchId, updateSearchResults, updateNoResults, clearNoResults } = counterSlice.actions

export default counterSlice.reducer