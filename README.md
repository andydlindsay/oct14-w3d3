# W03D03 HTTP Cookies & User Authentication

### To Do
- [ ] HTTP and cookies
- [ ] Login user with email and password
- [ ] Storing passwords ALWAYS HASH
- [ ] Encrypted cookies
- [ ] HTTP Secure (HTTPS)
- [ ] Server-side sessions

### HTTP Secure (HTTPS)
- Stateless protocol
- Every request or action is assessed in a vacuum
- The server is not required to preserve any record of previous transactions/requests
- Cookies help us to solve the stateless "problem"

- What is a cookie?
- It's the stamp!
- A cookie is a small text file that's stored in the client's browser
- They are key/value pairs

### Encryption
- Make it so that others cannot understand the message
- Obfuscate the message
- 2-way process
- public keys and private keys

### Hashing
- Obfuscates the message
- One-way process

```js
function hash(str) {
  // iterate over the string
  // turn each character into a number
  str = 'abc';
  hashedStr = 1 + 2 + 3 === 6;
  'aaaaaa', 'f', 'bbb', 'ea' 'ae'
  return 6;
}
```














### When to use...
* Plain Text Cookies:
  * Almost never use plain cookies
  * Maybe for:
    * Language selection
    * Shopping cart for non-logged in users
    * Analytics
* Encrypted Cookies:
  * Do this by default
  * Only store the user_id (can be used to look up values in a database or object)
* Server-side Sessions:
  * Not worth the hassle for small projects
  * If you need to store lots of session data
  * If you frequently change session data
  * If you want the ability to invalidate a specific users' session

### Useful Links
* [Plain Text Offenders](https://github.com/plaintextoffenders/plaintextoffenders/blob/master/offenders.csv)
* [How Does Encryption Work?](https://medium.com/searchencrypt/what-is-encryption-how-does-it-work-e8f20e340537)
* [What is HTTPS?](https://www.cloudflare.com/learning/ssl/what-is-https/)
* [Asymmetric Cryptography](https://searchsecurity.techtarget.com/definition/asymmetric-cryptography)
* [Client Session vs Server Session](http://www.rodsonluo.com/client-session-vs-server-session)
