var user = document.getElementById("user");
var result = document.getElementById("result");

function check() {
    if(user.value % 2 == 0){
        result.innerHTML = "Results Is: This is a Even Num"
    }
    else{
         result.innerHTML = "Results Is: This is a Odd Num"
    }
}

var checkVal = document.getElementById("checkNum");
var Answer = document.getElementById("answer");

function NagOrPos(){
    if (checkVal.value > 0) {
        Answer.textContent = "Results Is: This Is Positive Value"
    } else if (checkVal.value < 0) {
        Answer.textContent = "Results Is: This Is Negative Value"
    
    } else{
        Answer.textContent = "Results Is: This Is Zero"
    }
}
