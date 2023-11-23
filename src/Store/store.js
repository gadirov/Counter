import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './CounterSlice.jsx'

const store = configureStore({
    reducer: {
        counter: CounterReducer
    }
})

export default store;