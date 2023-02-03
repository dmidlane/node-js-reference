const url = require('url');

const myUrl = new URL('https://www.domsite.com/hello?id=123654');

// Serialised URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host - root domain
console.log(myUrl.host);
// host name doesn't inclue the port but host does
console.log(myUrl.hostname)

// Path
console.log(myUrl.pathname);

// Serialised Query
console.log(myUrl.search);

// Params Object
console.log(myUrl.searchParams);

// Add to the object
myUrl.searchParams.append('abc','123');

console.log(myUrl.searchParams);

// loop through
myUrl.searchParams.forEach((value, name) => console.log(`${name} : ${value}`));


