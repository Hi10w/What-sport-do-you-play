

let counter = 0;
let submitButton = document.querySelector(".submit");
let messages2 = document.querySelector(".messages2");
let messages = document.querySelector(".messages");
let quizResult = document.querySelector(".results");
   

    
submitButton.onclick = function() {
    counter = counter + 1;
    console.log(counter);
    let heightInput =
        document.querySelector(".height").value;
    let cleatInput =
        document.querySelector(".cleat").value;
    console.log(heightInput);
    messages.innerHTML = "userComment";
    
    
        messages2.innerHTML = " you did the quiz this many times " + counter;
    
    if (cleatInput === "yes" && heightInput >= 67) {
        messages.innerHTML = "American football";
    } else if (cleatInput === "no" && heightInput >= 67) {
        messages.innerHTML = "Basketball";
    } else if (cleatInput === "no" && heightInput <= 67) {
        messages.innerHTML = "you dont play sports";
    } else if (cleatInput === "yes" && heightInput <= 67) {
        messages.innerHTML = "soccer";
    }
 


};