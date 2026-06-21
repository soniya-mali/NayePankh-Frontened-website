function darkMode(){

document.body.classList.toggle("dark");

}

function registerVolunteer(){

let name =
document.getElementById("name").value;

let email =
document.getElementById("email").value;

let msg =
document.getElementById("success");

if(
name==="" ||
email===""
){

msg.innerHTML =
"⚠️ Please fill all details";

msg.style.color =
"red";

}

else{

msg.innerHTML =
"✅ Registration Successful! Welcome " +
name;

msg.style.color =
"green";

document.getElementById("name").value="";

document.getElementById("email").value="";

}

}