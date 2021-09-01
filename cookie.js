function setcookies(){
    let key = document.getElementById('key').value 
    let val = document.getElementById('val').value;
    //console.log(setcookies);
    document.cookie = key + " = " + val;
    alert("added");
    listcookies();
}


function getcookies(){
    let gkey = document.getElementById(getkey).value;
    let cookiesArray = document.cookie;
    for(let i = 0; i<cookiesarray.length; i++){
        let valueArray = cookiesArray[i];
        //console.log(valueArray);
        if(valueArray[0] == 'gkey'){
            document.getElementById(getkey) = valueArray[1];
        }
    }
    alert("the cookie is "+getcookies(valueArray))
}

function deletecookies(){
    let key=document.getElementById("delcookie").value + "=";
    document.cookie = key + '=;max-age=0';
    alert("deletd");
    listcookies();
}
function listcookies(){
    let cookies = document.cookie.split(';');
    let cookie = document.getElementById("list");
    //let listcookie = '';
    cookie.innerHTML='';
    for(let i =0; i<=cookies.length; i++){
    cookie.innerHTML += i + ' ' + cookies[i-1];
    }
    return cookie.innerHTML;
}