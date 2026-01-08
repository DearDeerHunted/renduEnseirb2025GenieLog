import { Account } from "./account.mjs";
import { accountCommandDAO } from "./accountCommandDAO.mjs";
import { accountSummaryList } from "./queryDatabase.mjs";

export const accountCommand = {
    addAccount(lastName, firstName) {
        const newAccount = new Account(undefined, lastName, firstName);
        accountCommandDAO.insertAccount(newAccount);
        accountSummaryList.push({
            id: newAccount.id,
            lastName: newAccount.lastName,
            firstName: newAccount.firstName
        });
        return newAccount;
    },
    saveAccount(id, lastName, firstName) {
        const account = accountCommandDAO.restoreAccount(id);
        if (account) {
            account.lastName = lastName;
            account.firstName = firstName;
            accountCommandDAO.updateAccount(account);
            const index = accountSummaryList.findIndex(a => a.id === id);
            if (index !== -1) {
                accountSummaryList[index] = { id, lastName, firstName };
            }
            return account;
        }
        else {
            console.log("saveAccount: no account with this id")
            return null;
        }
    },
};
