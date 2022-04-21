
const mid1 = function (req, res,next) {

    if (!req.headers.isfreeappuser) {
        return res.send ({status: false, msg: "request is missing a mandatory header"})
    } 
     next() 
}

module.exports.mid1 = mid1
       