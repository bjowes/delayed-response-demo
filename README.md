# Minimal demonstration of delayed responses from Cypress when using a proxy

## Web server

Open the `site` folder. Run:

`npm install`

`node server.js`

This starts up a web server on http://localhost:5000 with a very simple page with one image resource. Keep this running for the tests.

## Test 1: No proxy

Open the `no-proxy` folder. Run:

`npm install`

`npm run cypress:open`

Start the test case `mini.spec.js`. It should execute very fast, in fractions of a second.

## Test 2: With proxy

Open the `proxy` folder. Run:

`npm install`

`npm run cypress-ntlm`

Start the test case `mini.spec.js`. The first pass is fast, but the second pass takes > 5 seconds. If re-run, both passes takes > 5 seconds each. Using the developer tools in Chrome it is clear that it is the loading of the image resource that is slow, and this only occurs when the response has status code 304. Ideally it should be even faster in that scenario but instead it is stuck waiting 5 seconds every time.
