import { accountService } from "./accountService.mjs";

console.log("addAccount")
const newAccount = accountService.addAccount('G','A')
console.log(newAccount)

console.log("getAccountList")
for (const account of accountService.getAccountList())
    console.log(account)