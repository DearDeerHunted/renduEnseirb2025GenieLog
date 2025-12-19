function checkPWD(pwd, options) {
    const minLen = options.minLen;
    const minLet = options.minLet;
    const minNum = options.minNum;
    const newRules = options.newRules || [];

    const letCount = (pwd.match(/[a-zA-Z]/g) || []).length
    const numCount = (pwd.match(/\d/g) || []).length

    const lenCheck = (pwd.length >= minLen);
    const letCheck = (letCount >= minLet);
    const numCheck = (numCount >= minNum);

    const newCheck = newRules.every(rule => rule(pwd));

    return lenCheck && letCheck && numCheck && newCheck
}

module.exports = checkPWD;