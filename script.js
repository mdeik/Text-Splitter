"use strict";
function main() {
  document.querySelectorAll('input[name="splitBy"]').forEach((radio) => {
    radio.addEventListener("change", (event) => {
      const splitOption = document.querySelector("#splitOption");
      if (event.target.value == "Percentage") {
        splitOption.innerHTML =
          '<input type="range" value="50" min="0" max="100" id="userPrcnt"><span id="sliderValue">50</span><br>';
        document
          .querySelector("#userPrcnt")
          .addEventListener("input", function () {
            document.querySelector("#sliderValue").textContent = this.value;
          });
      } else if (event.target.value == "Number") {
        splitOption.innerHTML =
          '<input type="number" value="1" min="0" max="100" id="userNum"> (Number of characters per split)<br>';
      } else {
        splitOption.innerHTML = "";
      }
    });
  });
}

function splitOutput(splitFormat) {
  const textIn = document.querySelector("#user-input").value;
  const textOut = document.querySelector("#user-output");
  let splitText = "";
  textOut.value = "";
  if (splitFormat == "Words") {
    splitText = customSplit(textIn, [" ", ".", "!", "?", "\n"]);
  } else if (splitFormat == "Sentences") {
    splitText = customSplit(textIn, [".", "!", "?", "\n"]);
  } else if (splitFormat == "New Lines") {
    splitText = customSplit(textIn, ["\n"]);
  } else if (splitFormat == "Characters") {
    const splitBy = document.querySelector('input[name="splitBy"]:checked');
    let splitOption = null;
    let maxChars = 0;
    if (splitBy) {
      splitOption = document.querySelector('input[name="splitBy"]:checked');
    }
    if (splitOption == "Number") {
      const userNum = document.querySelector("#userNum").value;
      maxChars = parseInt(userNum);
    } else if (splitOption == "Percentage") {
      const userPrcnt =
        parseInt(document.querySelector("#userPrcnt").value) / 100;
      maxChars = Math.round(textIn.length * userPrcnt);
    } else {
      maxChars = 1;
    }
    splitText = numCharSplit(textIn, maxChars);
  } else {
    return;
  }
  const textLimit = splitText.length;

  let i = 0;
  let ii = 0;
  const buttons = document.querySelector("#buttons");
  while (buttons.firstChild) {
    buttons.removeChild(buttons.firstChild);
  }
  while (i < textLimit) {
    if (!splitText[i] || splitText[i] == "\n") {
      i++;
      continue;
    }
    const dummy = document.createElement("button");
    dummy.title = dummy.value = splitText[i];
    dummy.textContent = ++ii;
    dummy.onclick = function () {
      navigator.clipboard.writeText(this.value);
      showToast();
      textOut.value = this.value;
    };
    buttons.appendChild(dummy);
    i++;
  }
}
/* 
Notify that text has been copied
*/

function customSplit(str, delimiters) {
  let result = [str];
  delimiters.forEach((delimiter) => {
    for (let i = 0; i < result.length; i++) {
      const parts = result[i].split(delimiter);
      result = result
        .slice(0, i)
        .concat(
          parts.map((part, index) =>
            index < parts.length - 1 ? part + delimiter : part
          )
        )
        .concat(result.slice(i + 1));
      i += parts.length - 1;
    }
  });
  return result.map((element) => element.trim());
}
function numCharSplit(str, numChar) {
  let result = [];
  let cur = "";
  for (let i = 0; i < str.length; i++) {
    if (i != 0 && i % numChar == 0) {
      result.push(cur);
      cur = "";
    }
    cur += str[i];
    if (i == str.length - 1) {
      result.push(cur);
    }
    
  }
  return result.map((element) => element.trim());
}

function showToast() {
    const toast = document.getElementById("toast");
    toast.classList.remove("hidden");
    setTimeout(function () {
      toast.classList.add("hidden");
    }, 3500);
  }
