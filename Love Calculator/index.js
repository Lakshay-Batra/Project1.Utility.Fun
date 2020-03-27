$("button").click(function () {
    var answer = [];
    var boyName = $("#boy-name").val();
    var girlName = $("#girl-name").val();
    // console.log({boyName},{girlName});
    var name = boyName + "love" + girlName;
    //var count=(name.match(/a/gi)).length;
    var nameCharacters = name.split("");
    var i = 0;
    var tempCharacter;
    var count = 0;
    while (nameCharacters.length != 0) {
        count = 0;
        if (nameCharacters[i] != '0') {
            tempCharacter = nameCharacters[i];
            for (var j = 0; j < nameCharacters.length; j++) {
                if (nameCharacters[j] === tempCharacter) {
                    nameCharacters[j] = '0';
                    count++;
                }
            }
            answer.push(count);
        }
        nameCharacters.shift();
    }

    var finalAnswer = [];
    while (finalAnswer.length != 2) {
        for (i = 0, j = answer.length - 1; i <= j; i++, j--) {
            finalAnswer.push(answer[i] + answer[j])
        }
        if (finalAnswer.length != 2) {
            answer = finalAnswer;
            finalAnswer = [];
        }
    }
    //final step
    var a = finalAnswer[0];
    var b = finalAnswer[1];
    if (a > 9 || b > 9) {
        finalAnswer = reduce(finalAnswer);
        a=finalAnswer[0];
        b=finalAnswer[1];
    }
    var print=0
    print = a * 10 + b;
    print=Math.floor(print);
    if(boyName && girlName) {
        $("h1").text("Your Love Score is : " + print + " %");
    } else {
        $("h1").text("Enter valid input.");
    }
    print=0;
    finalAnswer=[];
});

// function to reduce finalArray into single digit element
function reduce(finalAnswer) {
    var a = finalAnswer[0];
    var b = finalAnswer[1];
    var temp = a;
    if (a > 9 && b > 9) {
        a = a / 10 + b % 10;
        b = temp % 10 + b / 10;
    }
    else if (a > 9) {
        a = a/10 + b;
        b=temp%10;
    } else {
        a=a + b%10;
        b=b/10;
    }
    finalAnswer=[];
    finalAnswer.push(a);
    finalAnswer.push(b);
    if(a>9 || b>9) {
        return reduce(finalAnswer);
    }
    return finalAnswer;
}