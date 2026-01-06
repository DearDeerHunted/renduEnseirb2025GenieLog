import { ACCOUNT_LIST } from "./database.mjs";

export const accountDAO = {
  insertAccount(account) {
    ACCOUNT_LIST.push(account);
  },
  retrieveAccountList() {
    return ACCOUNT_LIST.map(({ creationDate, ...accountWithoutDate }) => accountWithoutDate);
  },
  updateAccount(account) {},
  retrieveAccount(id) {},
};
