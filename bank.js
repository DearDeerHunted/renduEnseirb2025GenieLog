const bankDAO = require("./bankDAO");
const { transfer } = require("./bankTransfer");

const bank = {
  getBalance(accountId) {
    return bankDAO.retrieveBalance(accountId);
  },

  transferMoney(accountId, amount) {
    transfer(accountId, amount);
    bankDAO.debitAccount(accountId, amount);
  }

  transferMoney(accountId, amount) {
    transfer(accoundId, amount);
  }
};

module.exports = bank;
