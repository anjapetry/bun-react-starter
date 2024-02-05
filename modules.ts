const path  = require('path');

const filepath = path.join('content', 'subfolder', 'test.txt');
const filename = path.basename(filepath);
console.log(filepath); // content/subfolder/test.txt