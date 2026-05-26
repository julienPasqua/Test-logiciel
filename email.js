function isEmailValid(email) {
  return email.includes("@") && email.includes(".") && email.length >= 5;
  return false;
}

module.exports = isEmailValid;