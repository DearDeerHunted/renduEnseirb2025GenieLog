import { Account } from "./account.mjs";
import { eventList } from "./eventStore.mjs";

export const accountCommandDAO = {
    restoreAccount(id){
        return eventList
          .filter(e => e.accountId === id)
          .reduce((account, event) => {
            if (event.name === 'accountAdded') {
              const data = event.payload;
              return new Account(data.id, data.lastName, data.firstName, data.creationDate);
            } 
            if (event.name === 'accountUpdated') {
              account.lastName = event.payload.lastName;
              account.firstName = event.payload.firstName;
              return account;
            }
            return account;
          }, null);
    },
};
