///<reference path="utilityFunctions.ts"/>

import util = Utility.Fees;

let fee= util.CalcuLateFee(10);
console.log(`Fee: ${fee}`);