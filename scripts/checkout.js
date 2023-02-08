function BuyNow(){
    let first = document.getElementById("Fname").value;
    let last = document.getElementById("Lname").value;
    let address = document.getElementById("Address").value;
    let suite = document.getElementById("suite").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let code = document.getElementById("ZipCode").value;
    let phone = document.getElementById("phone").value;

    if(first!==null && last!==null && address!==null && suite!==null && city!==null && state!==null && code!==null && phone!==null){
        alert(`${first}, Your shipment is ready`)
        window.location.href = "index.html"
    }
     first = ""
     last = ""
     address = ""
     suite = ""
     city = ""
     state = ""
     code = ""
     phone = ""
}