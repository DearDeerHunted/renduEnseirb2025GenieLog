import { ACCOUNT_LIST } from "./database.mjs";

export const accountDAO = {
  insertAccount(account) {
    ACCOUNT_LIST.push(account);
  },
  retrieveAccountList() {},
  updateAccount(account) {},
  retrieveAccount(id) {},
};
