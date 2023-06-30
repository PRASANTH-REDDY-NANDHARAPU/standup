// -------------function for 313-----------
function login313(){
    let username = document.getElementById("floatingInputThree").value;
    let password = document.getElementById("floatingPasswordThree").value;
    if (username == "prasanth" && password == "prakarthik"){
      open("../html/recordings313.html");
    }else{
      open("../html/error.html")
    }
  }