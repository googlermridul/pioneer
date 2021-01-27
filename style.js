const loginBtn = document.getElementById("login");
loginBtn.addEventListener('click', function() {
   const removeLogin = document.getElementById("login-area")
   removeLogin.style.display = "none";
   const addTransaction = document.getElementById("transaction-area")
   addTransaction.style.display = "block";
});


// ============
const depositBtn =  document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(params) {
   const depositAmount = document.getElementById("deposit-input").value;
   const depositNumber = parseFloat(depositAmount);

   const currentDeposit = document.getElementById("currentDeposit").innerText;
   const currentDepositNumber = parseFloat(currentDeposit);
   const totalDeposit = depositNumber + currentDepositNumber;
   
   document.getElementById("currentDeposit").innerText = totalDeposit;
   document.getElementById("deposit-input").value = "";


})
