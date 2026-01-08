import { Account } from "./account.mjs";
import { eventList } from "./eventStore.mjs";

export const accountCommandDAO = {
    restoreAccount(id){
        const accountEvents = eventList.filter(e => e.accountId === id);
        if (accountEvents.length === 0) return null;

        let account = null;

        for (const event of accountEvents) {
          if (event.name === 'accountAdded') {
            const data = event.payload;
            account = new Account(data.id, data.lastName, data.firstName, data.creationDate);
          } 
          else if (event.name === 'accountUpdated' && account) {
            account.lastName = event.payload.lastName;
            account.firstName = event.payload.firstName;
          }
        }
        return account;
    },
};
