const express = require('express');
const app = express();
// port that Heroku assigns us otherwise use 3000
const port = process.env.port || 3000;
import bookRouter from './Routes/bookRouter'

app.get('/api/Books', bookRouter);

app.listen(port, () => {
    console.log(`listening at port: ${port}`);
});