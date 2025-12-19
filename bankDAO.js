const bankDAO = {
  retrieveBalance(accountId) {
    console.log(`Retrieve balance for account ${accountId}`);
    return 1000;
  },

  debitAccount(accountId, amount) {
    console.log(`Debiting ${amount} from account ${accountId}`);
  }
};

module.exports = bankDAO;
