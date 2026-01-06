import { accountService } from "./accountService.mjs";

console.log("addAccount")
const newAccount = accountService.addAccount('G','A')
console.log(newAccount)