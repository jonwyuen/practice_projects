Development: Webpack -> Webpack Dev Server -> localhost

Production: Push to heroku; Install NPM modules -> Run 'Postinstall' -> Run 'Start'

Postinstall (npm run postinstall): Ran immediately after installing NPM modules once
builds project by taking code in separate files and running webpack to produce a single bundle.js

Start (npm run start): Responsible for starting and maintaining server


package.json

```json
"scripts":  {
  "postinstall": "webpack -p",
  "start": "node server.js"
}
```

server.js

```js
const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(_dirname));

// if dont know what route trying to get, send them back to index.html
app.get('*', (req, res) => {
  res.sendFile(path.resolve(_dirname, 'index.html'))
})

app.listen(port);
console.log('Server started');
```

heroku git: remote -a <name_of_app>
