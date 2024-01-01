import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

/**
 * In telecommunication, a repeater receives a signal and retransmits it. Here, the repeater is used
 * to transmit signals to let certain components update. A component can subscribe to a signal by
 * using useAppSelector, for example, add this at the beginning of the component to make it
 * subscribe to the user updated signal:
 *     useAppSelector(selectUserUpdatedSignal)
 *     useEffect(() => {
 *         // This callback function will be invoked when the userUpdatedSignal flips
 *     }, [selectUserUpdatedSignal])
 *
 * Since the user updated signal flips every time the user is updated, the component is refreshed.
 * On the other hand, make sure to notify user updated if the user is updated in the following way:
 *     const dispatch = useDispatch()
 *     dispatch(notifyUserUpdated)
 *
 * Feel free to add other types of signals to this class.
 * @author James Chan
 */
export const repeaterSlice = createSlice({
    name: 'repeater',
    initialState: {
        userUpdatedSignal: true,
    },
    reducers: {
        notifyUserUpdated(state: RepeaterState) {
            state.userUpdatedSignal = !state.userUpdatedSignal
        },
    },
})

/**
 * Adds signals and corresponding descriptions here.
 */
export type RepeaterState = {
    // The signal is emitted when the local user is updated
    userUpdatedSignal: boolean
}

export const { notifyUserUpdated } = repeaterSlice.actions

export const selectUserUpdatedSignal = (state: RootState) => state.repeaterSlice.userUpdatedSignal

export default repeaterSlice.reducer