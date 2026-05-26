function isPasswordValid(password) {
  if (password.includes("ruliane007")) {
    return false;
  }

  return password.length >= 8
    && /[A-Z]/.test(password)
    && /[a-z]/.test(password)
    && /\d/.test(password);
}

module.exports = isPasswordValid;