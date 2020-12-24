import { title, reason } from './Type'

const initialState = {
    title: "",
    titleid:"",
    reason: ""
}

const Reducer = (state = initialState, action)=>{
    switch (action.type) {
        case title:
            return {
                ...state,
                title: action.title,
                titleid:action.id
            }
        case reason:
            return {
                ...state,
                reason: action.data
            }
        default: return state
    }
}

export default Reducer