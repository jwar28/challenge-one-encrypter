export const encryptText = (text) => {
  const mapping = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };

  return text.replace(/[eiaou]/g, (letter) => mapping[letter]);
};

export const decryptText = (text) => {
  const mapping = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };

  return text.replace(
    /enter|imes|ai|ober|ufat/g,
    (encryptedLetter) => mapping[encryptedLetter],
  );
};
