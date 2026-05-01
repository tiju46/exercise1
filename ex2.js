function showResult() {
  let sum = 0;

  for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  alert("Sum is: " + sum);
}

function addNumbers() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);

  let sum = num1 + num2;

  alert("Total is: " + sum);
}
