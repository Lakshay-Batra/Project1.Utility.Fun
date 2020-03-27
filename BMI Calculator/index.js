$(".card").hide();
$("button").click(function () {
    var weight = $("#weight").val();
    var feet = $("#feet").val();
    var inch = $("#inch").val();
    $(".card").removeClass("visibility");
    if (weight && feet && inch) {
        var bmi = calculateBmi(weight, feet, inch);
        bmi=bmi.toFixed(2);
        printCard(bmi);
    } else {
        alert("Enter required and appropriate values");
    }
});

function calculateBmi(weight, feet, inch) {
    var denominator = (parseInt(feet) * 12 + parseInt(inch))/39.37;
    console.log({denominator});
    denominator = denominator * denominator;
    var numerator = weight;
    return numerator / denominator;
}

function printCard(bmi) {
    console.log({bmi});
    if (bmi > 25) {
        $(".card-header").text("You are Overweight.");
    }
    if (bmi < 18.5) {
        $(".card-header").text("You are Underweight");
    }
    $(".card-title").html("Your BMI is "+bmi+" kg/m<sup>2</sup>")
    $(".card").fadeIn();
}