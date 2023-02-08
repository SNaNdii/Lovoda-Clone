
let data = JSON.parse(localStorage.getItem("users")) || [];

let username = document.getElementById("username");
username.innerText = data[0].fname
let useremail = document.getElementById("useremail");
useremail.innerText = data[0].email

console.log(data[0].fname);




