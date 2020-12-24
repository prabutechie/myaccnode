import {title,reason} from './Type'

export const setTitle =(t,id) =>{
    return {
        type:title,
        title:t,
        id:id
    }
}

export const setReason =(data) =>{
    return {
        type:reason,
        data:data
    }
}