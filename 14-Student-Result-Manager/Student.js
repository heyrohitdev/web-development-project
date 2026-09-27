// Select HTML elements
const math = document.getElementById("math");
const physics = document.getElementById("physics");
const chemistry = document.getElementById("chemistry");
const english = document.getElementById("english");
const hindi = document.getElementById("hindi");

const calculateBtn = document.getElementById("calculateBtn");

const total = document.getElementById("total");
const percentage = document.getElementById("percentage");
const grade = document.getElementById("grade");
const result = document.getElementById("result");


// Calculate result when button is clicked
calculateBtn.addEventListener("click", function () {

    // Get marks
    const mathsMarks = Number(math.value);
    const physicsMarks = Number(physics.value);
    const chemistryMarks = Number(chemistry.value);
    const englishMarks = Number(english.value);
    const hindiMarks = Number(hindi.value);


    // Calculate total
    const totalMarks =
        mathsMarks +
        physicsMarks +
        chemistryMarks +
        englishMarks +
        hindiMarks;


    // Calculate percentage
    const percentageMarks = totalMarks / 5;


    // Display total
    total.innerText = "Total: " + totalMarks;

    // Display percentage
    percentage.innerText = "Percentage: " + percentageMarks + "%";


    // Calculate grade
    let gradeValue;

    if (percentageMarks >= 80) {
        gradeValue = "A";
    }
    else if (percentageMarks >= 60) {
        gradeValue = "B";
    }
    else if (percentageMarks >= 40) {
        gradeValue = "C";
    }
    else {
        gradeValue = "D";
    }

    grade.innerText = "Grade: " + gradeValue;


    // Calculate result
    let resultValue;

    if (percentageMarks >= 40) {
        resultValue = "PASS";
    }
    else {
        resultValue = "FAIL";
    }

    result.innerText = "Result: " + resultValue;

});