export default showGlobal;
var globalVar = "I am global";
function showGlobal() {
console.log("this is -----",globalVar); 
}
showGlobal();
console.log(globalVar);