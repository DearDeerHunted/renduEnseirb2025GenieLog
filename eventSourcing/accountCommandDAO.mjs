import { ACCOUNT_LIST } from "./database.mjs";
import { Account } from "./account.mjs";
import { eventList } from "./eventStore.mjs";

export const accountCommandDAO = {
    insertAccount(account) {
        ACCOUNT_LIST.push(account);
    },
    restoreAccount(id){
        const creationEvent = eventList.find(e => e.name === 'accountAdded' && e.accountId === id);
        if (!creationEvent) return null;

        const account = creationEvent.payload;
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
};
