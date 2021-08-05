//the codes are demonstration of each concept 
//Unioun 
var userid;
userid = 2501200;
userid = "parshwavora2000"; // both will be valid as we have set type as string or number both the values are passed .
console.log(userid);
//union as functon 
console.log("Union function");
function officeid(userid) {
    if (userid == "parshwa123" || userid == 123)
        console.log('userid is valid');
    else
        console.log('uderid is invalid');
}
officeid(123);
officeid("parshwa123");
//any
var address;
address = "sukrit kutir, kilimanjaro";
address = 12333;
address = true;
//Any will be used to have any type of data type as input 
var money = ["parshwa", 1000, true];
money.push("parshwa still owns");
console.log(money);
//void 
function add() {
    console.log("only use when no return value");
}
//never
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
function keepProcessing() {
    while (true) {
        console.log('I always does something and never ends.');
    }
}
