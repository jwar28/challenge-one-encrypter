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

export const normalizeText = (text) => {
  text = text.toLowerCase();

  text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  text = text.replace(/á/g, "a");
  text = text.replace(/é/g, "e");
  text = text.replace(/í/g, "i");
  text = text.replace(/ó/g, "o");
  text = text.replace(/ú/g, "u");
  text = text.replace(/ñ/g, "n");

  return text;
};
