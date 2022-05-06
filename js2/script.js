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

window.onload = () => {
    document.getElementById("c").innerHTML = "hello on load"
    document.getElementById("add").onclick = add;
}

let r = ((a, b) => {
    return a + b;
})(1, 4)
// alert(r)

// ------------------------ second class  ------------------------

// window.onload = () => {
//     document.getElementById("box").addEventListener('click', changeColor)
// }

changeColor = () => {
    const currColor = document.getElementById("box").style.backgroundColor
    // document.getElementById("box").style.backgroundColor = 'green' === currColor ? 'red' : 'green'
    switch (currColor) {
        case 'green':
            document.getElementById("box").style.backgroundColor = 'red'
            break
        case 'red':
            document.getElementById("box").style.backgroundColor = 'blue'
            break
        case 'blue':
            document.getElementById("box").style.backgroundColor = 'green'
        default:
            document.getElementById("box").style.backgroundColor = 'green'
            break
    } // end switch
} // end changeColor

// traffic light stuff
// 0 = red 1 = yellow 2 = green
let trafCol = 0

window.onload = () => {
    // document.getElementById("r").onclick = changeTrafLightColor
    // document.getElementById("r").addEventListener('click', changeTrafLightColor(this.id))
    // document.getElementById("y").addEventListener('click', changeTrafLightColor(this.id))
    // document.getElementById("g").addEventListener('click', changeTrafLightColor(this.id))

    document.getElementById("r").style.backgroundColor = 'black'
    document.getElementById("y").style.backgroundColor = 'black'
    document.getElementById("g").style.backgroundColor = 'black'
}



changeTrafLightColor = (id) => {
    console.log(id)

    const r = document.getElementById("r").style.backgroundColor
    const y = document.getElementById("y").style.backgroundColor
    const g = document.getElementById("g").style.backgroundColor

    if (id == 'r') {
    document.getElementById("r").style.backgroundColor = r === 'red' ? 'black' : 'red'
    document.getElementById("y").style.backgroundColor = 'black'
    document.getElementById("g").style.backgroundColor = 'black'
    } else if (id == 'y') {
    document.getElementById("r").style.backgroundColor = 'black'
    document.getElementById("y").style.backgroundColor = y === 'yellow' ? 'black' : 'yellow'
    document.getElementById("g").style.backgroundColor = 'black'
    } else if (id == 'g') {
    document.getElementById("r").style.backgroundColor = 'black'
    document.getElementById("y").style.backgroundColor = 'black'
    document.getElementById("g").style.backgroundColor = g === 'green' ? 'black' : 'green'
    }
}


