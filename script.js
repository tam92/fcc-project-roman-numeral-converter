const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const conversionData = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
}

convertBtn.addEventListener("click", convertToNumeral);

function convertToNumeral() {
    
    output.style.display = "flex";
	let numeral = parseInt(input.value);
	let roman = "";
	if (!numeral) {
		output.innerText = "Please enter a valid number";
		return;
	} else if (numeral === -1) {
		output.innerText = "Please enter a number greater than or equal to 1";
		return;
	} else if (numeral >= 4000) {
		output.innerText = "Please enter a number less than or equal to 3999";
		return;
	}

    for (const letter in conversionData) {
        if (Object.hasOwnProperty.call(conversionData, letter)) {
            const value = conversionData[letter];
            while (numeral >= value) {
                numeral -= parseInt(value);
                roman += letter;
            }
        }
    }
	output.innerText = roman;
}