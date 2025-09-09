let display = document.getElementById('display');

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

// Keyboard support
document.addEventListener('keydown', (e) => {
  const key = e.key;
  if (/[0-9+\-*/.]/.test(key)) {
    append(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  } else if (key.toLowerCase() === 'c') {
    clearDisplay();
  }
});