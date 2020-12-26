import {title,reason,login,logout} from './Type'

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

export const LoginData =(data) =>{
    return {
        type:login,
        data:data
    }
}

export const Logout =() =>{
    return {
        type:logout       
    }
}