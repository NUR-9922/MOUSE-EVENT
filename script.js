function removeBlur(){
    document.getElementById("events").style.filter = "blur(0px)";
    document.getElementById("events").style.transform = "scale(.9)";
    document.getElementById("btn-1").style.opacity = 0;
}
// mouse event function 

function myfun1(){
    document.getElementById("events").style.background = "rgba(135, 163, 6, 0.379)";
    alert("yes")
}
function myfun2(){
    document.getElementById("events").style.background = "rgba(94, 16, 203, 0.189)";
    alert("ondblclick")
}

function myfun3(){
    document.getElementById("events").style.background = "rgba(255, 0, 119, 0.183)";
    alert("oncontextmenu")
}


function myfun4(){
    document.getElementById("events").style.background = "rgba(148, 235, 135, 0.171)";
    alert("onmouseenter")
}

function myfun5(){
    document.getElementById("events").style.background = "rgba(433, 25, 13, 5.171)";
    alert("onmouseenter")
}

function myfun6(){
    document.getElementById("events").style.background = "rgba(123, 855, 3, 1.1)";
    alert("onmouseup")
}

function myfun7(){
    document.getElementById("events").style.background = "rgba(123, 85, 3, 0.18)";
    // window.open("https://www.google.com/")
    // window.open("https://www.google.com/", "_blank")
    // window.open("https://www.google.com/", "_parent")
    window.open("https://www.google.com/","", "width=500px, height=500px,top=400px,left=400px")
}

