document.getElementById("submit-btn").addEventListener("click", function(){
    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    
    if(email === "mdaslamali@gmail.com" && password === "secret"){
        window.location.href = "bank.html"
    }else{
        alert("please input valid password")
    }
    
    document.getElementById("email-input").value = "";
    document.getElementById("password-input").value = "";
})