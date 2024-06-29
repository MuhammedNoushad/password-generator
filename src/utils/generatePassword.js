// Function for generate password using the given values
const generatePassword = ({
  includeUppercase,
  includeNumbers,
  includeSymbols,
  length,
}) => {
  let generatedPassword = "abcdefghijklmnopqrstuvwxyz";

  if (includeUppercase) {
    generatedPassword += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (includeNumbers) {
    generatedPassword += "0123456789";
  }

  if (includeSymbols) {
    generatedPassword += "!@#$%^&*(){}[]=<>/,.";
  }

  generatedPassword = generatedPassword
    .split("")
    .sort(() => Math.random() - 0.5)
    .slice(0, length)
    .join("");

  return generatedPassword;
};

export default generatePassword;
