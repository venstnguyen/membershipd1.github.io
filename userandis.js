function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="Thebakers"&& password=="ilovebaking")
    {
        alert("Login Successful");
        alert("Members IDS \n Steven N = 0612 \n Andrea W = 4014 \n Katie S = 7502 \n Araceli S = 9839 \n Adrian C= 2308");
        return false;

    }
    else{
        alert("Wrong Username or Password");
    }

}