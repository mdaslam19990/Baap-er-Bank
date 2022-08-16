document.getElementById("deposit-btn").addEventListener("click", function(){
    const depositInput = document.getElementById("deposit-input").value;
    const totalDeposit = document.getElementById("total-deposit");
    const totalBalance = document.getElementById("total-balance");
    document.getElementById("deposit-input").value = " ";

    if(isNaN(depositInput)){
        alert("please provide a number");
        return;
    }else if(depositInput === ""){
        alert("please enter a valid number");
        return;
    }

    const totalSumDeposit = parseFloat(totalDeposit.innerText) + parseFloat(depositInput);
    const totalCurrentBalance = parseFloat(totalBalance.innerText) + parseFloat(depositInput)


    totalBalance.innerText = totalCurrentBalance;
    totalDeposit.innerText = totalSumDeposit;


})