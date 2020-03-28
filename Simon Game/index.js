var colors = ["green", "red", "yellow", "blue"];

var userClickedPattern = [];

var gamePattern = [];

var level = 0;

//Start the game by pressing any key on keyboard by calling nextSequence function created above
var started = false;
$(document).keypress(function(e) {
    //so that once game starts it won't be started again
    if (started == false) {
        nextSequence();
        $("#level-title").text("Level " + level);
        started = true;
    }
});

// function for any of button press
$(".btn").click(function() {
    var userChosencolor = $(this).attr("id");

    userClickedPattern.push(userChosencolor);

    playSound(userChosencolor);
    animatePress(userChosencolor);

    //call checkAnswer function
    checkAnswer(userClickedPattern.length - 1);
});

//function to check the answer
function checkAnswer(currentLevel) {
    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");

        //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
        if (userClickedPattern.length === gamePattern.length) {

            //5. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function() {
                nextSequence();
            }, 1000);

        }

    } else {
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        //calling start over function as user prints the wrong sequence
        startOver();
    }
}

function nextSequence() {
    userClickedPattern = [];
    //increment level everytime nextSequence is called
    level++;
    $("#level-title").text("Level " + level);
    //generating random number between 0-3 (index of array colors)
    var randomNumber = Math.floor(Math.random() * 4);
    //chosing a random color out of array colors
    var randomChosenColor = colors[randomNumber];
    gamePattern.push(randomChosenColor);
    //blink animation
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    //playing sound for the chosen color
    playSound(randomChosenColor);

}

//start over function if user press the wrong sequence
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}


//play sound function for different colors
function playSound(color) {
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}

//animation for the buttons
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}