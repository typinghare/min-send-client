import { configureStore } from '@reduxjs/toolkit'
import repeaterSlice from './repeater/RepeaterSlice'

export const store = configureStore({
    reducer: {
        repeaterSlice,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

// export type AppThunk<ReturnType = void> = ThunkAction<
//     ReturnType,
//     RootState,
//     unknown,
//     Action<string>
// >
