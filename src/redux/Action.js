import {title,reason} from './Type'

export const setTitle =(data) =>{
    return {
        type:title,
        data:data
    }
}

export const setReason =(data) =>{
    return {
        type:reason,
        data:data
    }
}