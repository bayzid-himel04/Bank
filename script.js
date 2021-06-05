//for login button
   
const logBtn=document.getElementById("login");
logBtn.addEventListener("click", function(){

const loginArea=document.getElementById("login-area");
loginArea.style.display="none";
const transactionArea=document.getElementById("transaction-area");
transactionArea.style.display="block";
})

 //for deposit button
 const depositBtn=document.getElementById("addDeposit");
 depositBtn.addEventListener("click",function(){
    const depositNum=getInputNUmber("depositAmount");
    
    updateSpanText("currentDeposit",depositNum);
    updateSpanText("currentBalance",depositNum);
    

   })

   // for withdraw 
   const withdrawBtn=document.getElementById("addWithdraw");
   withdrawBtn.addEventListener("click",function(){
      const withdrawNum=getInputNUmber("withdrawAmount");
      updateSpanText("currentWithdraw",withdrawNum);
      updateSpanText("currentBalance",-1*withdrawNum);
   })

    function getInputNUmber(id){
        const amount=document.getElementById(id).value;
        const Num=parseFloat(amount);  
        return Num;
    }


   function updateSpanText(id,depositNum){
    const current =document.getElementById(id).innerText;
    const currentNumber= parseFloat(current);
    const total= depositNum + currentNumber;
    document.getElementById(id).innerText=total;

   }