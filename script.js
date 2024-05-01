let counter = 0;
let submitButton = document.querySelector(".submit");
let messages2 = document.querySelector(".messages2");
let messages1 = document.querySelector(".messages1");
let quizResult = document.querySelector(".results");
let heightInput =
    document.querySelector(".height").value;
let cleatInput =
    document.querySelector(".cleat").value;
console.log(heightInput);

console.log(counter);
submitButton.onclick = function() {
    counter = counter + 1;




    if (cleatInput === "yes" && heightInput >= 6, 0) {
        messages1.innerHTML = "American football";
    } else if (cleatInput === "no" && heightInput >= 6, 0) {
        messages1.innerHTML = "Basketball";
    } else if (cleatInput === "no" && heightInput <= 6, 0) {
        messages1.innerHTML = "you dont play sports";
    } else if (cleatInput === "yes" && heightInput <= 6, 0) {
        messages1.innerHTML = "soccer";
    }
    messages2.innerHTML = " you did the quiz this many times " + counter;


};