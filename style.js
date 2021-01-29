const loginBtn = document.getElementById("login");
loginBtn.addEventListener('click', function() {
   const removeLogin = document.getElementById("login-area")
   removeLogin.style.display = "none";
   const addTransaction = document.getElementById("transaction-area")
   addTransaction.style.display = "block";
});


// DEPOSIT BUTTON HANDLER ============
const depositBtn =  document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(params) {
   const depositAmount = document.getElementById("deposit-input").value;
   const depositNumber = parseFloat(depositAmount);

   
   // const depositNumber = getinputNumber();

   updateSpanText("currentDeposit", depositNumber);
   updateSpanText("currentBalance", depositNumber);

   document.getElementById("deposit-input").value = "";


})



// WITHDRAW BUTTON EVENT HANDLER
const withdrawbtn = document.getElementById("addWithdraw");
withdrawbtn.addEventListener("click", function() {
   const withdrawNumber = getinputNumber("withdrawAmount");

   updateSpanText("currentWithdraw", withdrawNumber)
   updateSpanText("currentBalance", -1 * withdrawNumber)
   
   // console.log("withdrawNumber", withdrawNumber);
   document.getElementById("withdrawAmount").value = "";
})


function getinputNumber(id) {
   const amount = document.getElementById("withdrawAmount").value;
   const amountNumber = parseFloat(amount);
   return amountNumber;
}


function updateSpanText(id, depositNumber) {
   const current = document.getElementById(id).innerText;
   const currentNumber = parseFloat(current);
   const totalAmount = depositNumber + currentNumber;
   document.getElementById(id).innerText = totalAmount;
}

