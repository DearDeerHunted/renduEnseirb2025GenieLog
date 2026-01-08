import { accountCommand } from "./accountCommand.mjs";
import { accountQuery } from "./accountQuery.mjs";

console.log("addAccount")
const newAccount = accountCommand.addAccount('G','A')
console.log(newAccount)

console.log("getAccountList")
for (const account of accountQuery.getAccountList())
    console.log(account)

console.log("saveAccount")
const altAccount = accountCommand.saveAccount(newAccount.id, 'A','G')
console.log(altAccount)

console.log("getAccount")
const account = accountQuery.getAccount(newAccount.id)
console.log(account)

console.log("getEvents")
for (const event of accountQuery.getEvents())
    console.log(event)
