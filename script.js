function angka(number) {
  var inputField = document.querySelector('.input');
  inputField.value += number;
  adjustbutton();
}

function simbol(symbol) {
  var inputField = document.querySelector('.input');
  inputField.value += symbol;
  adjustbutton();
}

function clearInput() {
  var inputField = document.querySelector('.input');
  inputField.value = '';
  adjustbutton();
}

function hitung() {
  var input = document.querySelector('.input').value;
  var numbers = input.split(',');

  if (numbers.length !== 2) {
    alert('Masukkan 2 angka yang terpisah koma');
    return;
  }

  var n = parseInt(numbers[0]);
  var r = parseInt(numbers[1]);

  if (isNaN(n) || isNaN(r)) {
    alert('input tidak valid');
    return;
  }

  if (r > n) {
    alert('Nilai r tidak bisa lebih besar dari n');
    return;
  }

  var result = faktorial(n) / faktorial(n - r);
  var hasil = document.getElementById('hasil');
  hasil.textContent = result;
  document.querySelector('.input').value = result;
  adjustbutton();
}

function faktorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  var factorial = 1;
  for (var i = num; i >= 2; i--) {
    factorial *= i;
  }

  return factorial;
}

function adjustbutton() {
  var inputField = document.querySelector('.input');
  var inputLength = inputField.value.length;
  var buttons = document.querySelectorAll('.num');
  buttons.forEach(function (button) {
    button.style.width = inputLength > 0 ? inputLength + 'ch' : '50px';
  });
}
