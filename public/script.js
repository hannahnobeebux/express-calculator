const addButton = document.getElementById("add")
const subtractButton = document.getElementById("subtract")
const multiplyButton = document.getElementById("multiply")
const divideButton = document.getElementById("divide")
const divResult = document.getElementById("result")

const num1 = document.getElementById("n1")
const num2 = document.getElementById("n2")

let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

//when the add button is clicked, it will go to the endpoint of "/adding"
addButton.addEventListener("click", () => {
  
    //using the POST method, accessing the body and converting the inputs with the names of "num1" and "num2" into objects 
    //Line 15-21 is FETCHING the data that is being sent in from the request in the response (res.send)
    fetch(`/adding` , {
        method: "POST", 
        headers: myHeaders,
        body: JSON.stringify({
            num1: num1.value, 
            num2: num2.value
        })
    })
    //using .then is what happens with the data received from the fetch AFTER it has been brought back 
    //converting to object notation
    .then(res => res.json())
    //converting the result into an object (destructuring) and then assigning its value to a HTML element 
    .then(({result}) => {
        divResult.innerHTML = result 
    })
})

subtractButton.addEventListener("click", () => {
    fetch(`/subtracting`, {
        method: "POST", 
        headers: myHeaders,
        body: JSON.stringify({
            num1: num1.value, 
            num2: num2.value
        })
    })

    .then(res => res.json())
    .then(({result}) => {
        divResult.innerHTML = result
    })
})

multiplyButton.addEventListener("click", () => {
    fetch(`/multiplying`, {
        method: "POST", 
        headers: myHeaders,
        body: JSON.stringify({
            num1: num1.value, 
            num2: num2.value
        })
    })

    .then(res => res.json())
    .then(({result}) => {
        divResult.innerHTML = result
    })
})

divideButton.addEventListener("click", () => {
    fetch(`/dividing`, {
        method: "POST", 
        headers: myHeaders,
        body: JSON.stringify({
            num1: num1.value, 
            num2: num2.value
        })
    })

    .then(res => res.json())
    .then(({result}) => {
        divResult.innerHTML = result
    })
})



