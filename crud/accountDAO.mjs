import { ACCOUNT_LIST } from "./database.mjs";
import { Account } from "./account.mjs";

export const accountDAO = {
  insertAccount(account) {
    ACCOUNT_LIST.push(account);
  },
  retrieveAccountList() {
    return ACCOUNT_LIST.map(({ creationDate, ...accountWithoutDate }) => accountWithoutDate);
  },
  restoreAccount(id){
    const account =ACCOUNT_LIST.find(a => a.id === id);
    return new Account(account.id, account.lastName, account.firstName, account.creationDate);
  },
  updateAccount(account) {
    const index = ACCOUNT_LIST.findIndex((a) => a.id === account.id);
    if (index != -1) {
      account.creationDate = ACCOUNT_LIST[index].creationDate;
      ACCOUNT_LIST[index] = account;
    }
    else {
      console.log("updateAccount: no account with this id")
    }
    console.table(ACCOUNT_LIST)
  },
  retrieveAccount(id) {},
};
