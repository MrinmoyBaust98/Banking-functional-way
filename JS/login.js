

//login button ke select kore addeventlistener add korechi...

document.getElementById("login-btn").addEventListener("click",function(){

    //email ke select kore email er data Access..
    const emailField=document.getElementById("email-info");
    const userEmail=emailField.value;

    //password ke select kore password er data access..
    const passwordField=document.getElementById("password-info");
    const userPassword=passwordField.value;

    if(userEmail=="mrinmoybank@roy.com" && userPassword=="roybank"){
        // Go to banking page
        window.location.href="banking.html";
    }

})