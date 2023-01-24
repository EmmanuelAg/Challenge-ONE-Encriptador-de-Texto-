/* Lógica del Encriptador Alura
 * La letra "a" se convierte en la palabra "ai"
 * La letra "e" se convierte en la palabra "enter"
 * La letra "i" se convierte en la palabra "imes"
 * La letra "o" se convierte en la palabra "ober"
 * La letra "u" se convierte en la palabra "ufat"
 */

const textArea = document.querySelector(".text-area");
const message = document.querySelector(".message");
const messageAlert = document.querySelector(".message-alert");
const alert = document.querySelector(".alert");
const elementButtonCopy = document.querySelector(".button-copy");

let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

function validateSentence(input) {
    return ((/^[a-zA-Z ]+$/ ).test(input));
}

function buttonEncrypt() {
    let check = validateSentence(textArea.value);
    if (textArea.value != "") {
        if (check == true) {
            const encryptedText = encrypt(textArea.value)
            message.value = encryptedText;
            textArea.value = "";
            message.style.backgroundImage = "none"
            messageAlert.style.visibility = "hidden"
            alert.style.visibility = "hidden"
            elementButtonCopy.style.visibility = "visible"
        } else if (check == false) {
            window.alert("El Encriptador solo Acepta Letras sin Acentos");
        }
    } else {
        message.style.backgroundImage = "url('img/muestra.png')"
        message.value = ""
        messageAlert.style.visibility = "visible"
        alert.style.visibility = "visible"
        elementButtonCopy.style.visibility = "hidden"
    }
}

function buttonDecrypt() {
    let check = validateSentence(textArea.value);
    if (textArea.value != "") {
        if (check == true) {
            const decryptText = decrypt(textArea.value)
            message.value = decryptText;
            textArea.value = "";
            message.style.backgroundImage = "none"
            messageAlert.style.visibility = "hidden"
            alert.style.visibility = "hidden"
            elementButtonCopy.style.visibility = "visible"
        } else if (check == false) {
            window.alert("El Encriptador solo Acepta Letras sin Acentos");
        }
    } else {
        message.style.backgroundImage = "url('img/muestra.png')"
        message.value = ""
        messageAlert.style.visibility = "visible"
        alert.style.visibility = "visible"
        elementButtonCopy.style.visibility = "hidden"
    }
}

function buttonCopy() {
    var encryptedText = message.value;
    clipboard.writeText(encryptedText);
}

function encrypt(input) {
    let stringEncrypt = input.toLowerCase();
    for (let i = 0; i < matrixCode.length; i++) {
        if (stringEncrypt.includes(matrixCode[i][0])) {
            stringEncrypt = stringEncrypt.replaceAll(matrixCode[i][0], matrixCode[i][1]);
        }
    }

    return stringEncrypt;
}

function decrypt(input) {
    let stringDecrypt = input.toLowerCase();
    for (let i = 0; i < matrixCode.length; i++) {
        if (stringDecrypt.includes(matrixCode[i][1])) {
            stringDecrypt = stringDecrypt.replaceAll(matrixCode[i][1], matrixCode[i][0]);
        }
    }

    return stringDecrypt;
}