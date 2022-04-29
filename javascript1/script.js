add = () => {
    var num1, num2, total;
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    total = parseInt(num1) + parseInt(num2);
    document.getElementById("c").innerHTML = total;
} // end add

rollDice = () => {
    let random = Math.floor(Math.random() * 6) + 1
    let userNum = parseInt(document.getElementById("n1").value);
    document.getElementById("randomDisplay").innerHTML = `Your number: ${userNum} Random number: ${random}`
    if (userNum == random) {
        document.getElementById("result").innerHTML = "You got it right!"; 
        document.getElementById("randomDisplay").style.color = "blue";
    } else {
        document.getElementById("result").innerHTML = "Wrong!";
        document.getElementById("randomDisplay").style.color = "red";
    }
} // end rollDice

window.onload = function() {
    document.getElementById("c").innerHTML = "hello on load"
    document.getElementById("add").onclick = add;
}

let r = ((a, b) => {
    return a + b;
})(1, 4)
alert(r)