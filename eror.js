function performDivision() {
    const num1Value = document.getElementById("num1").value;
    const num2Value = document.getElementById("num2").value;
    const resultElement = document.getElementById("result");
    
    if (num1Value === "" || num2Value === "") {
        resultElement.textContent = "Error: Kedua angka harus diisi.";
        return; 
    }

    const num1 = parseFloat(num1Value);
    const num2 = parseFloat(num2Value);
  
    if (isNaN(num1)) {
      resultElement.textContent = "Error: Angka pertama harus berupa angka.";
    } else if (isNaN(num2)) {
      resultElement.textContent = "Error: Angka kedua harus berupa angka.";
    } else if (num2 === 0) {
      resultElement.textContent = "Error: Pembagian dengan nol tidak diperbolehkan.";
    } else {
      resultElement.textContent = "Hasil: " + (num1 / num2);
    }
}
