// Function for generate password using the given values
const generatePassword = ({
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols,
  length,
}) => {
  console.log(
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols,
    length
  );
  return "password";
};

export default generatePassword;
