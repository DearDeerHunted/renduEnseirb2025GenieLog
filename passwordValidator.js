function checkPWD(pwd) {
    if (pwd.length < 8) return false;
    if (!/\d/.test(pwd)) return false;
    if (!/[a-zA-Z]/.test(pwd)) return false;
    return true;
}

module.exports = checkPWD;