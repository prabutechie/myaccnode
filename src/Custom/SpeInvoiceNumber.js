export const SpeInvoiceNumber = (data)=>{

    var billno
    if(data > 0 && data < 10 ){
        billno = `SPE/20-21/000${data}`
    }
    if(data > 9 && data < 100){
        billno = `SPE/20-21/00${data}`
    }
    if(data > 99 && data < 1000 ){
        billno = `SPE/20-21/0${data}`
    }
    if(data > 999 && data < 10000){
        billno = `SPE/20-21/${data}`
    }

    return billno
}