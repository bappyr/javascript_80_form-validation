function validate(){
    var username = document.form.username.value;
    var password = document.form.password.value;
    var conPassword = document.form.conpass.value;
    var fName = document.form.fname.value;
    var lName = document.form.lname.value;
    var mail = document.form.mail.value;
    var g1 = document.getElementById("group1");
    var g2 = document.getElementById("group2");
    var g3 = document.getElementById("group3");
    var g4 = document.getElementById("group4");
    var g5 = document.getElementById("group5");
    var g6 = document.getElementById("group6");
    var flag = 0;
    
    if(username==null || username==""){
        g1.className += " has-error";
        document.getElementById("err-uname").innerHTML = "The username field is required";
        document.form.username.focus();
    }else{
        g1.className -= " has-error";
        g1.className += " has-success";
        document.getElementById("err-uname").innerHTML = "<br>";
        flag++;
    }
    
    if(password==null || password==""){
        g2.className += " has-error";
        document.getElementById("err-pass").innerHTML = "The password field is required";
        document.form.password.focus();
    }else{
        g2.className -= " has-error";
        g2.className += " has-success";
        document.getElementById("err-pass").innerHTML = "<br>";
        flag++;
    }
    
    if(conPassword==null || conPassword==""){
        g3.className += " has-error";
        document.getElementById("err-cpass").innerHTML = "The confirm password field is required";
        document.form.conpass.focus();
    }else{
        g3.className -= " has-error";
        g3.className += " has-success";
        document.getElementById("err-cpass").innerHTML = "<br>";
        flag++;
    }
    
    if(fName==null || fName==""){
        g4.className += " has-error";
        document.getElementById("err-fname").innerHTML = "The first name field is required";
        document.form.fname.focus();
    }else{
        g4.className -= " has-error";
        g4.className += " has-success";
        document.getElementById("err-fname").innerHTML = "<br>";
        flag++;
    }
    
    if(lName==null || lName==""){
        g5.className += " has-error";
        document.getElementById("err-lname").innerHTML = "The last name field is required";
        document.form.lname.focus();
    }else{
        g5.className -= " has-error";
        g5.className += " has-success";
        document.getElementById("err-lname").innerHTML = "<br>";
        flag++;
    }
    
    if(mail==null || mail==""){
        g6.className += " has-error";
        document.getElementById("err-mail").innerHTML = "The email field is required";
        document.form.mail.focus();
    }else{
        g6.className -= " has-error";
        g6.className += " has-success";
        document.getElementById("err-mail").innerHTML = "<br>";
        flag++;
    }
    
    
    if(flag==6){
        alert("Congrats! Your registration was successful!")
    }else{
        return false;
    }
}