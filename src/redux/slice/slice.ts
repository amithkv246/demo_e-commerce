import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    // value: number;
    isMobile: boolean,
}

const initialState: CounterState = {
    // value: 0,
    isMobile: false,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

        updateIsMobile: (state, action: PayloadAction<boolean>) => {
            state.isMobile = action.payload
        }

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
export const { updateIsMobile } = counterSlice.actions

export default counterSlice.reducer