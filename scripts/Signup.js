
let create = ()=>{
    
    let data = JSON.parse(localStorage.getItem("users")) || [];

    let user = {
        fname : document.getElementById("first_name").value,
        lname : document.getElementById('last_name').value,
        email : document.getElementById("email-1").value,
        password : document.getElementById("password").value,
    }
     
    for(let i=0; i<data.length; i++){
        if(data[i].email === user.email){
            alert("User already exists!");
            return;
        }
    }

    data.push(user);
    localStorage.setItem("users",JSON.stringify(data));
    alert("Sign Up successful!");
    window.location.href = "login.html";
};