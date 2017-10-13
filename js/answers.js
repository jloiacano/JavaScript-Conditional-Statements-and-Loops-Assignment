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

    function arrayCopy(x) {
        var a = x.length,
            b = [],
            i;
        for (i = 0; i < a; i += 1) {
            b[i] = x[i];
        }
        return b;
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
        var num1 = document.getElementById("q2i1").value,
            num2 = document.getElementById("q2i2").value,
            num3 = document.getElementById("q2i3").value;

        if (!isInt(num1)) {
            document.getElementById("q2i1Error").innerHTML = "* MUST BE AN INTEGER";
        }
        if (!isInt(num2)) {
            document.getElementById("q2i2Error").innerHTML = "* MUST BE AN INTEGER";
        }
        if (!isInt(num3)) {
            document.getElementById("q2i3Error").innerHTML = "* MUST BE AN INTEGER";
        }

        if (isInt(num1) && isInt(num2) && isInt(num3)) {
            var numArray = [num1, num2, num3],
                numArrayAscend = arrayCopy(numArray),
                numArrayDescend = arrayCopy(numArray);
            numArrayAscend.sort(function (a, b) {
                return a - b;
            });
            numArrayDescend.sort(function (a, b) {
                return b - a;
            });
            window.alert("Ascending: " + numArrayAscend + "\nDescending: " + numArrayDescend);
            document.getElementById("q2i1").value = "";
            document.getElementById("q2i2").value = "";
            document.getElementById("q2i3").value = "";
            document.getElementById("q2i1Error").innerHTML = "";
            document.getElementById("q2i2Error").innerHTML = "";
            document.getElementById("q2i3Error").innerHTML = "";
        }
    };

    var solve3 = function () {
        var num1 = document.getElementById("q3i1").value,
            num2 = document.getElementById("q3i2").value,
            num3 = document.getElementById("q3i3").value,
            num4 = document.getElementById("q3i4").value,
            num5 = document.getElementById("q3i5").value,
            numArray = [num1, num2, num3, num4, num5],
            a = numArray.length - 1,
            i,
            biggest = 0;
        if (!isInt(num1)) {
            document.getElementById("q3i1Error").innerHTML = "* MUST BE AN INTEGER";
        }
        if (!isInt(num2)) {
            document.getElementById("q3i2Error").innerHTML = "* MUST BE AN INTEGER";
        }
        if (!isInt(num3)) {
            document.getElementById("q3i3Error").innerHTML = "* MUST BE AN INTEGER";
        }
        if (!isInt(num4)) {
            document.getElementById("q3i4Error").innerHTML = "* MUST BE AN INTEGER";
        }
        if (!isInt(num5)) {
            document.getElementById("q3i5Error").innerHTML = "* MUST BE AN INTEGER";
        }
        if (isInt(num1) && isInt(num2) && isInt(num3) && isInt(num4) && isInt(num5)) {

            for (i = 0; i < a; i += 1) {
                biggest = Math.max(biggest, numArray[i]);
                window.console.log("a-" + biggest + "\t\tb-" + numArray[i + 1] + "\t\t" + biggest);
            }
            window.alert(biggest);

            document.getElementById("q3i1").value = "";
            document.getElementById("q3i2").value = "";
            document.getElementById("q3i3").value = "";
            document.getElementById("q3i4").value = "";
            document.getElementById("q3i5").value = "";
        }
    };

    var solve4 = function () {
        var num1 = document.getElementById("q1i1").value,
            num2 = document.getElementById("q1i2").value;
    };

    document.getElementById("submit1").addEventListener("click", solve1);
    document.getElementById("clear1").addEventListener("click", clear1);
    document.getElementById("submit2").addEventListener("click", solve2);
    document.getElementById("submit3").addEventListener("click", solve3);
    /*
    document.getElementById("submit3").addEventListener("click", solve3);
    document.getElementById("submit4").addEventListener("click", solve4);
    document.getElementById("submit5").addEventListener("click", solve5);
    document.getElementById("submit6").addEventListener("click", solve6);
    document.getElementById("submit7").addEventListener("click", solve7);
    document.getElementById("submit8").addEventListener("click", solve8);
    */


}());
