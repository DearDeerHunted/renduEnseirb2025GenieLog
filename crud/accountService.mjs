import { Account } from "./account.mjs";
import { accountDAO } from "./accountDAO.mjs";

export const accountService = {
  addAccount(lastName, firstName) {
    const newAccount = new Account(undefined, lastName, firstName);
    accountDAO.insertAccount(newAccount);
    return newAccount;
  },
  getAccountList() {
    return accountDAO.retrieveAccountList();
  },
  saveAccount(id, lastName, firstName) {
    const accountList = this.getAccountList();
    const account = accountList.find((a) => a.id === id);
    if (account) {
      account.lastName = lastName;
      account.firstName = firstName;
      accountDAO.updateAccount(account);
      return account;
    }
    else {
      console.log("saveAccount: no account with this id")
      return null;
    }
  },
  getAccount(id) {},
};
