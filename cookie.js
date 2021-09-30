function setcookies() {
    let key = document.getElementById('key').value
    let val = document.getElementById('val').value;
    //console.log(setcookies);
    document.cookie = key + " = " + val;
    alert("added");
    listcookies();
}

// //let getkey = document.getElementsById("getkey")
// let getbutton = document.getElementById("getbutton")

function getcookies() {
    let gkey = document.getElementById("getkey").value;
    let getkey = gkey + "=";
    let cookiesArray = document.cookie.split(';');
    for (let i = 0; i < cookiesArray.length; i++) {
        let valueArray = cookiesArray[i];
        while(valueArray.charAt(0) == ' '){
            valueArray = valueArray.substring(1,valueArray.length);
        }
        //console.log(valueArray);
        if(valueArray.indexOf(getkey) == 0){
            //document.write(valueArray.substring(getkey.length,valueArray.length)) ;
            document.getElementById("getkey").innerHTML = valueArray.substring(getkey.length,valueArray.length);
            
        }
        document.getElementById("getkey").innerHTML = " ";
        //console.log(valueArray);
        alert("the cookie is " + valueArray);
       
    }
    
    
    //
    listcookies();
    
}

function deletecookies() {
    let key = document.getElementById("delcookie").value + "=";
    document.cookie = key + '=;max-age=0';
    alert("deletd");
    listcookies();
}
function listcookies() {
    let cookies = document.cookie.split(';');
    let cookie = document.getElementById("list");
    //let listcookie = '';
    cookie.innerHTML = ' ';
    for (let i = 0; i <= cookies.length; i++) {
        cookie.innerHTML += i + ' ' + cookies[i - 1];
    }
    return cookie.innerHTML;
}