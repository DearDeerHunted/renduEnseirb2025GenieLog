function checkPWD(pwd) {
    return pwd.length >= 8 && /\d/.test(pwd);
}

module.exports = checkPWD;