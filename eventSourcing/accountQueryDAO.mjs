import { accountSummaryList } from "./queryDatabase.mjs";
import { accountCache } from "./cache.mjs";
import { eventList } from "./eventStore.mjs";

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
    retrieveEventList() {
        return eventList;
    }
};
