const crypto = require("crypto");
const id = crypto.randomBytes(20).toString('hex');

console.log(id)
