// Añadir evento listener al check button
document.getElementById("check-btn").addEventListener("click", function() {
    // Obtener input y convertirlo en minúscula
    const inputText = document.getElementById("text-input").value.toLowerCase();
    
    // Elimina carácteres no alfa numéricos del input
    let processedText = inputText.replace(/[^a-z0-9]/g, '');
    
    // Comprueba si el input está vacío
    if (processedText === "") {
      alert("Please input a value");
      return;
    }
    
    // Comprueba si el input es un palindrome - compara la priemera letra del input con la última
    let isPalindrome = true;
    for (let i = 0; i < processedText.length / 2; i++) {
      // Skip underscore characters and spaces
      if (processedText[i] === '_' || processedText[i] === ' ') {
        continue;
      }
      // Compare characters from start and end of the string
      if (processedText[i] !== processedText[processedText.length - 1 - i]) {
        isPalindrome = false;
        break;
      }
    }
    
    // Display the result
    const resultElement = document.getElementById("result");
    if (isPalindrome) {
      resultElement.textContent = inputText + " is a palindrome";
    } else {
      resultElement.textContent = inputText + " is not a palindrome";
    }
  });