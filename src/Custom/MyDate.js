export const MyDate = (data,formate) =>{

    const monthString = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"] 
    // const dayString = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
    const fulldate = new Date(data)
    

    const date = fulldate.getDate()
    // const day = fulldate.getDay()
    const month = fulldate.getMonth()
    const year = fulldate.getFullYear()
    const finalDate = `${date}-${monthString[month]}-${year}`

    return finalDate
    
}

export const MyTime = (data)=>{
    const fulldate = new Date(data)

    const hour = fulldate.getHours()
    const minutes = fulldate.getMinutes()

    if(hour < 12){
        const FinalTime = `${hour}:${minutes} am`  
        return FinalTime
    }
    else{
        const FinalTime = `${hour-12}:${minutes} pm`  
        return FinalTime
    }

} 