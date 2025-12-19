const bankDAO = require("./bankDAO");
const { transfer } = require("./bankTransfer");

const bank = {
  getBalance(accountId) {
    return bankDAO.retrieveBalance(accountId);
  },

  transferMoney(accountId, amount) {
    transfer(accountId, amount);
  }
};

module.exports = bank;
