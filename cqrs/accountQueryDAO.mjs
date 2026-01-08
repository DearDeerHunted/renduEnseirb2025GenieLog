import { ACCOUNT_LIST } from "./database.mjs";
import { accountSummaryList } from "./queryDatabase.mjs";
import { accountCache } from "./cache.mjs";

export const accountQueryDAO = {
    retrieveAccountList() {
      return accountSummaryList;
    },
    retrieveAccount(id) {
        const account = accountCache[id];
        if (account) {
          return account;
        }
        else {
          console.log("retrieveAccount: no account with this id")
          return null;
        }
    },
};
