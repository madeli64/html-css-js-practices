let changes = 0;

const text = document.getElementById("text");

const run = document.getElementById("run");
run.addEventListener("click", proccess);

function count() {
    changes++;
}

function proccess() {
    let words = text.value.split(" ");
    let result = "";
    
    for (const word of words) {
        result = result + `${seprateWordAndNumber(word)} `;
    }

    words = result.split(" ");
    result = "";
    for (const word of words) {
        if (word.endsWith("_")) {
            result = result + breakLine(word);
        } else {
            result = result + `${word} ` ;
        }
    }

    words = result.split(" ");
    result = "";
    for (const word of words) {
        if (!isNaN(word)) {
            result = result + `${sortNumber(word)} `;
        } else {
            result = result + `${word} ` ;
        }
    }

    words = result.split(" ");
    result = "";
    for (const word of words) {
        const char = word.slice(0,1).toLowerCase();
        if ("rakdxhj".includes(char)) {
            result = result + `${reverseWord(word)} `;
        } else {
            result = result + `${word} ` ;
        }           
    }

    text.value = result;
}

function breakLine(params) {
    return (params.split("_")[0] + "\n"); 
}

function sortNumber(num) {
    let sortedNumber = Array.from(`${num}9`); // 1357 => 13579
    // by this way we can prevent out of index for arrays
    let n = num.length;

    do {
        for (let index = 0; index < sortedNumber.length; index++) {
            const element = sortedNumber[index];
            if (Number(element) > Number(sortedNumber[index + 1])) {
                sortedNumber[index] = sortedNumber[index + 1];
                sortedNumber[index + 1] = element;
            }        
        }      
        n--;
    } while (n > 0);
    
    // Last step to remove the last number we added at first
    sortedNumber = sortedNumber.slice(0, sortedNumber.length - 1);

    return sortedNumber.join('');
}

function reverseWord(word) {
    let result = "";
    for (const char of word) {
        result = char + result;
    }
    return result;
}

function seprateWordAndNumber(string) {
    let index = 0;
    let result = "";
  
    if (isNaN(string[0]) && "0123456789".includes(string[string.length - 1]) )  {
        // sdfsg21534531
        for (const element of string) {
            if (!isNaN(element)) {
                result = string.slice(0, index) + " " + string.slice(index);
                break;
            }
            index++;
        }
    } else if (isNaN(string[string.length - 1]) && "0123456789".includes(string[0])) {
        // 12154dfdfd
        for (const element of string) {
            if (isNaN(element)) {
                result = string.slice(0, index) + " " + string.slice(index);
                break;
            }
            index++;
        }        
    } else {
        result = string;
    }

    return result;
}