
function getInputValue(inputid){
    const inputField=document.getElementById(inputid);
    const currentValue=inputField.value;
    inputField.value="";
    return currentValue;
};
//deposite && withdraw Total

function getTotalAmount(xid,currentAmount){

    const totalPreviousField=document.getElementById(xid);
    const previousTotal=totalPreviousField.innerText;
    const totalAmount= parseFloat(previousTotal) + parseFloat(currentAmount);
    totalPreviousField.innerText=totalAmount;
}
// Main blance Total (for deposite and wthdraw)

function getTotalBlance(xxid,currentAmount,isadd){
    const blancePreviousField=document.getElementById(xxid);
    const previousBlance=blancePreviousField.innerText;

    if(isadd==true){
        const blanceTotal= parseFloat(previousBlance) + parseFloat(currentAmount);
        blancePreviousField.innerText=blanceTotal;
    }
    else{
        const blanceTotal= parseFloat(previousBlance) - parseFloat(currentAmount);
        blancePreviousField.innerText=blanceTotal;
    }   
}

// deposite submit button ke select kore add event listener add kora
document.getElementById("deposite-btn").addEventListener("click",function(){
    
     const currentDeposite=getInputValue("deposite-input");
     //deposite total section ke select kore sob blance add kore show korbo
     getTotalAmount("deposite-total",currentDeposite);
     getTotalBlance("total-blance",currentDeposite,true);
})

//withdraw submit button ke select kore add event listener add korbo
document.getElementById("withdraw-btn").addEventListener("click",function(){
     
    const currentWithdraw=getInputValue("withdraw-input");
    //withdraw total section ke select kore sob blance add kore show korbo
    getTotalAmount("withdraw-total",currentWithdraw);
    getTotalBlance("total-blance",currentWithdraw,false);
})