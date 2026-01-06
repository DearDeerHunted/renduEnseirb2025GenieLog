import { ACCOUNT_LIST } from "./database.mjs";

export const accountDAO = {
  insertAccount(account) {
    ACCOUNT_LIST.push(account);
  },
  retrieveAccountList() {
    return ACCOUNT_LIST.map(({ creationDate, ...accountWithoutDate }) => accountWithoutDate);
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
