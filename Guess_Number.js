let number = Math.floor(Math.random()*100);
let guess=0;

function m() {
    let m = document.getElementById("num").value;
    if (m=="") {
        // alert("please enter guess");
        document.getElementById("number").innerHTML = "";
        document.getElementById("info").innerHTML = "Please Enter Guess";
        document.getElementById("winner").innerHTML = "";
    }
    else if(number>m){
        // alert("number is large to "+m);
        document.getElementById("info").innerHTML = "Guess Again";
        document.getElementById("winner").innerHTML = "number is large to "+m;
        guess++;
    }
    else if(number<m){
        // alert("number is small to "+m);
        document.getElementById("info").innerHTML = "Guess Again";
        document.getElementById("winner").innerHTML = "number is small to "+m;
        guess++;
    }
    else{
        guess++;
        // alert("You are "+guess+" guess to find number and number is "+number);
        document.getElementById("number").innerHTML = guess;
        document.getElementById("info").innerHTML = "Guess";
        document.getElementById("winner").innerHTML = "to find real number and number is "+number;
        setTimeout(function(){
            document.getElementById("number").innerHTML = "";
            document.getElementById("info").innerHTML = "";
            document.getElementById("winner").innerHTML = "";
        },30000)
        guess = 0;
    }
    document.getElementById("num").value = "";
}