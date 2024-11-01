function passwordStrengthChecker(password) {
  let passwordStrength = 0;

  if (password.length > 10) {
    passwordStrength++;
  }

  if (password.toLowerCase() !== password) {
    passwordStrength++;
  }

  if (password.toUpperCase() !== password) {
    passwordStrength++;
  }

  if (password.split("").some((char) => !isNaN(char))) {
    passwordStrength++;
  }

  if (password.split("").some((char) => "!@#$%^&*()".includes(char))) {
    passwordStrength++;
  }

  switch (passwordStrength) {
    default:
      console.log("weak");
      break;
    case 3:
      console.log("medium");
      break;
    case 4:
      console.log("strong");
      break;
    case 5:
      console.log("very strong");
      break;
  }
}

passwordStrengthChecker("");
