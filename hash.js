const bcrypt = require('bcryptjs');

const input = 'password';
var hash = bcrypt.hashSync(input, 10);
console.log(input);
console.log(hash);

const result = bcrypt.compareSync('abc123', hash);
console.log(result);
