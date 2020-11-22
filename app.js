const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! I just created my first pipeline and also was able to auto deploy it! This is sooooo cool and fun.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
