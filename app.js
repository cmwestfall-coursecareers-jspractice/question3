function passwordStrengthChecker(password) {
  pointTotal = 0;

  if (password.length > 10) {
    pointTotal++;
  }

  if (password.toLowerCase() !== password) {
    pointTotal++;
  }

  if (password.toUpperCase() !== password) {
    pointTotal++;
  }

  if (password.split("").some((char) => !isNaN(char))) {
    pointTotal++;
  }

  if (password.split("").some((char) => "!@#$%^&*()".includes(char))) {
    pointTotal++;
  }

  switch (pointTotal) {
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

passwordStrengthChecker("helloworld123!");
