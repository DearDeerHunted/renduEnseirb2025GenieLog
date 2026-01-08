import { ACCOUNT_LIST } from "./database.mjs";
import { accountSummaryList } from "./queryDatabase.mjs";

export const accountQueryDAO = {
    retrieveAccountList() {
      return accountSummaryList;
    },
    retrieveAccount(id) {
        const account = ACCOUNT_LIST.find(a => a.id === id);
        if (account) {
          return {
            id: account.id,
            name: `${account.lastName} ${account.firstName}`,
            creationDate: account.creationDate
          };
        }
        else {
          console.log("retrieveAccount: no account with this id")
          return null;
        }
    },
};
