var fuzzyButton = document.querySelector(".getFuzzy");
var clearButton = document.querySelector(".clearButton");
var results = document.querySelector(".results");
var resultArr = [];
var fuzzyWuzzyTest = function () {
    for (var i = 1; i < 301; i++) {
        if (i % 15 === 0) {
            resultArr.push("Fuzzy-Wuzzy!");
        }
        else if (i % 10 === 0) {
            resultArr.push("Wuzzy!");
        }
        else if (i % 5 === 0) {
            resultArr.push("Fuzzy!");
        }
        else {
            resultArr.push(i);
        }
    }
    resultArr.push("...wasn't he?");
    if (!results.textContent) {
        results.textContent = resultArr.join(", ");
    }
    else {
        return;
    }
};
var clearResultsText = function () {
    results.textContent = "";
    resultArr = [];
};
fuzzyButton.addEventListener("click", fuzzyWuzzyTest);
clearButton.addEventListener("click", clearResultsText);
