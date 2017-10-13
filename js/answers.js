(function () {
    "use strict";

    function isInt(value) {
        if (isNaN(value)) {
            window.console.log(value + " is NaN");
            return false;
        } else if (value % 1 !== 0) {
            window.console.log(value + " has a remainder after being modulused by zero");
            return false;
        } else {
            return true;
        }
    }

    var solve1 = function () {
        var num1 = document.getElementById("q1i1").value,
            num2 = document.getElementById("q1i2").value;
        window.console.log("THE SOLUTION FOR TASK 1:");
        if (!isInt(num1)) {
            document.getElementById("q1i1Error").innerHTML = "* MUST BE AN INTEGER";
        }
        if (!isInt(num2)) {
            document.getElementById("q1i2Error").innerHTML = "* MUST BE AN INTEGER";
        }

        if (isInt(num1) && isInt(num2)) {
            if (num1 > num2) {
                document.getElementById("clear1").style.display = "inline";
                document.getElementById("q1i1Error").innerHTML = "";
                document.getElementById("q1i2Error").innerHTML = "";
                window.console.log(num1 + " is the greater of the two numbers.");
                document.getElementById("answer1").innerHTML = num1 + " is the greater of the two numbers.";

            } else if (num1 < num2) {
                document.getElementById("clear1").style.display = "inline";
                document.getElementById("q1i1Error").innerHTML = "";
                document.getElementById("q1i2Error").innerHTML = "";
                window.console.log(num2 + " is the greater of the two numbers.");
                document.getElementById("answer1").innerHTML = num2 + " is the greater of the two numbers.";

            } else {
                document.getElementById("clear1").style.display = "inline";
                document.getElementById("q1i1Error").innerHTML = "";
                document.getElementById("q1i2Error").innerHTML = "";
                window.console.log("Those are equal numbers.");
                document.getElementById("answer1").innerHTML = "Those are equal numbers.";

            }

        }
    };

    var clear1 = function () {
        document.getElementById("answer1").innerHTML = "";
        document.getElementById("clear1").style.display = "none";
        document.getElementById("q1i1").value = "";
        document.getElementById("q1i2").value = "";
    };

    var solve2 = function () {
        var num1 = document.getElementById("q1i1").value,
            num2 = document.getElementById("q1i2").value;
    };

    document.getElementById("submit1").addEventListener("click", solve1);
    document.getElementById("clear1").addEventListener("click", clear1);
    /*
    document.getElementById("submit2").addEventListener("click", solve2);
    document.getElementById("submit3").addEventListener("click", solve3);
    document.getElementById("submit4").addEventListener("click", solve4);
    document.getElementById("submit5").addEventListener("click", solve5);
    document.getElementById("submit6").addEventListener("click", solve6);
    document.getElementById("submit7").addEventListener("click", solve7);
    document.getElementById("submit8").addEventListener("click", solve8);
    */


}());
