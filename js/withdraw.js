document.getElementById("withdraw-btn").addEventListener("click", function(){
    const withdrawInput = document.getElementById("withdraw-input").value;
    const withdrawbalance = document.getElementById("withdraw-balance");
    const totalBalance = document.getElementById("total-balance");
    document.getElementById("withdraw-input").value = " ";



    if(isNaN(withdrawInput)) {
        alert("please provide a number");
        return;
    } else if (withdrawInput === "") {
        alert("please enter a valid number")
        return;
    }

    if (withdrawInput > totalBalance.innerText) {
        alert("Your balance is law")
        return;
    }


    const totalWithdraw = parseFloat(withdrawInput) + parseFloat(withdrawbalance.innerText);
    const currentTotalBalance  = parseFloat(totalBalance.innerText) - parseFloat(withdrawInput)


    totalBalance.innerText = currentTotalBalance;
    withdrawbalance.innerText = totalWithdraw;

})
