var test = require('tape')
var getUrlsHost = require('.')

test('timing test', function (t) {
  t.plan(3)

  const text = 'Some text : https://chilts.org and https://twitter.com/andychilton'

  t.deepEqual(getUrlsHost(text, 'twitter.com'), [
    'https://twitter.com/andychilton'
  ], 'Check we got the twitter link')

  t.deepEqual(getUrlsHost(text, 'chilts.org'), [
    'https://chilts.org'
  ], 'Check we got the chilts.org link')

  t.deepEqual(getUrlsHost(text, 'example.net'), [
  ], 'Check we got nothing back')

  t.end()
})
