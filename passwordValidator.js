function checkPWD(pwd) {
    return (
        pwd.length >= 8 &&
        /\d/.test(pwd) &&
        /[a-zA-Z]/.test(pwd)
    );
}

module.exports = checkPWD;