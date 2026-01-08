import { Account } from "./account.mjs";
import { eventList } from "./eventStore.mjs";

export const accountCommandDAO = {
    restoreAccount(id){
        const creationEvent = eventList.find(e => e.name === 'accountAdded' && e.accountId === id);
        if (!creationEvent) return null;

        const account = creationEvent.payload;
        return new Account(account.id, account.lastName, account.firstName, account.creationDate);
    },
};
