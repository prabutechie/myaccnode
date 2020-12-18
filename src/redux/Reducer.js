import { title, reason } from './Type'

const initialState = {
    title: "",
    reason: ""
}

const Reducer = (state = initialState, action)=>{
    switch (action.type) {
        case title:
            return {
                title: action.data
            }
        case reason:
            return {
                reason: action.data
            }
        default: return state
    }
}

export default Reducer