# get-urls-host #

Gets all the URLs from some text that are of a particular host.

## Example ##

```
const getUrlsHost = require('get-urls-host')

let urls

urls = getUrlsHost('Hello https://chilts.org', 'chilts.org')
console.log(urls)
// -> [ 'https://chilts.org' ]

urls = getUrlsHost('Hello https://chilts.org', 'example.com')
console.log(urls)
// -> [ ]
```

This module doesn't do much - the hard part is done by https://www.npmjs.com/package/get-urls

## Author ##

Andrew Chilton.

## License ##

ISC.
