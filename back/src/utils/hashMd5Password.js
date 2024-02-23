const md5 = require('md5');
 
const hashPassword = (key) => {
    const hash = md5(key);
    return hash;
};

module.exports = hashPassword;