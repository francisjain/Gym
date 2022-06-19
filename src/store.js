import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { gymListReducer } from './reducers/gymReducer'

const reducers = combineReducers({
    gymReducer: gymListReducer
})
const inintialState = {}
const middleware = [thunk]

const store = createStore(reducers, inintialState, applyMiddleware(...middleware))

export default store