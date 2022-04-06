let str = " FunctionUp "

let Trim = function welcome (x) {
    return str.trim()
}
console.log(Trim ())

let toLowerCase = function myfxn (x) {
    return str.toLowerCase()
}
console.log(toLowerCase ())

let toUpperCase = function somi (x) {
    return str.toUpperCase()
}
console.log(toUpperCase ())



module.exports.abc = Trim
module.exports.def = toLowerCase
module.exports.ghi = toUpperCase
