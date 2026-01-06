import { Account } from "./account.mjs";
import { accountCommandDAO } from "./accountCommandDAO.mjs";

export const accountCommand = {
    addAccount(lastName, firstName) {
        const newAccount = new Account(undefined, lastName, firstName);
        accountCommandDAO.insertAccount(newAccount);
        return newAccount;
    },
    saveAccount(id, lastName, firstName) {
        const account = accountCommandDAO.restoreAccount(id);
        if (account) {
            account.lastName = lastName;
            account.firstName = firstName;
            accountCommandDAO.updateAccount(account);
            return account;
        }
        else {
            console.log("saveAccount: no account with this id")
            return null;
        }
    },
};
