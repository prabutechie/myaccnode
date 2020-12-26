import { title, reason, login, logout } from './Type'

const initialState = {
    title: "",
    titleid: "",
    reason: "",
    login: ""
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case title:
            return {
                ...state,
                title: action.title,
                titleid: action.id
            }
        case reason:
            return {
                ...state,
                reason: action.data
            }
        case login:
            return {
                ...state,
                login: action.data
            }
        case logout:
            return {
                ...state,
                login: null
            }
        default: return state
    }
}

export default Reducer