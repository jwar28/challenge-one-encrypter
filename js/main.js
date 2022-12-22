import { encryptText, decryptText, normalizeText } from "../js/utils.js";

const textareaInitialInput = document.getElementById("text-initial-input");
const textareaFinalOutput = document.getElementById("text-final-output");

const defaultOutput = document.getElementById("default-output");
const finalOutput = document.getElementById("final-output");

const encryptButton = document.getElementById("encrypt-button");
const decryptButton = document.getElementById("decrypt-button");
const copyButton = document.getElementById("copy-button");

const updateOutputTextarea = (func) => {
  const text = textareaInitialInput.value;
  const transformedText = func(normalizeText(text));
  textareaFinalOutput.value = transformedText;

  defaultOutput.classList.add("invisible");
  finalOutput.classList.remove("invisible");
};

encryptButton.addEventListener("click", () =>
  updateOutputTextarea((text) => encryptText(text)),
);
decryptButton.addEventListener("click", () =>
  updateOutputTextarea((text) => decryptText(text)),
);
copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(textareaFinalOutput.value);
});
