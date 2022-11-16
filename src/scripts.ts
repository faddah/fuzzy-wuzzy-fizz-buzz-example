const fuzzyButton: HTMLButtonElement = document.querySelector(".getFuzzy")!;
const clearButton: HTMLButtonElement = document.querySelector(".clearButton")!;
const results: HTMLDivElement = document.querySelector(".results")!;
type ResultArray = [number?, string?];
let resultArr: ResultArray = [];

const fuzzyWuzzyTest = (): void => {
	for (let i: number = 1; i < 301; i++) {
		if (i % 15 === 0) {
			resultArr.push("Fuzzy-Wuzzy!");
		} else if (i % 10 === 0) {
			resultArr.push("Wuzzy!");
		} else if (i % 5 === 0) {
			resultArr.push("Fuzzy!");
		} else {
			resultArr.push(i);
		}
	}
	resultArr.push("...wasn't he?");
	if (!results.textContent) {
		results.textContent = resultArr.join(", ");
	} else {
		return;
	}
};

const clearResultsText = (): void => {
	results.textContent = "";
	resultArr = [];
};

fuzzyButton.addEventListener("click", fuzzyWuzzyTest);
clearButton.addEventListener("click", clearResultsText);
