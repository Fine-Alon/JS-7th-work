let stringInput = document.createElement('input');
document.body.append(stringInput);

let h2 = document.createElement('h2');
document.body.append(h2);

let timeoutId;

function transferToTitle() {
  h2.textContent = stringInput.value;
}

function printDelay() {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(transferToTitle, 300);
}


stringInput.addEventListener('input', printDelay);
