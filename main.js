

function vaildate(){
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var confirm = document.getElementById("confirm").value;
    var result = document.getElementById("result");

    result.setAttribute("class","tasnim")

    if(user=="" && email=="" && pass=="" && confirm==""){
        result.innerHTML = "Enter Data In Form";
        return false;
    }else if (user.length <5 || user.length>15){
        result.innerHTML = "Enter 5-15 caracter in Username";
        return false;
    }else if (email.indexOf("@",3) ==-1 || email.indexOf(".com") ==-1 ){
         result.innerHTML = "Enter Valid Email";
         return false;
    }else if (pass.length<8){
        result.innerhtml = "Enter 8 Caracter in Password ";
        return false;
    }else if (pass != confirm){
        result.innerHTML = "matched pass";
        return false;
    }
       
}

