import { encryptText, decryptText } from "./encrypter";

const textareaInitialInput = document.getElementById("text-initial-input");
const textareaFinalOutput = document.getElementById("text-final-output");

const defaultOutput = document.getElementById("default-output");
const finalOutput = document.getElementById("final-output");

const encryptButton = document.getElementById("encrypt-button");
const decryptButton = document.getElementById("decrypt-button");
const copyButton = document.getElementById("copy-button");

const removeDefaultOutput = () => {
  defaultOutput.classList.add("invisible");
  finalOutput.classList.remove("invisible");
};

const encryptInputText = () => {
  const text = textareaInitialInput.value;
  if (text !== "") {
    textareaFinalOutput.value = encryptText(text);
    removeDefaultOutput();
  }
};

encryptButton.addEventListener("click", encryptInputText);
