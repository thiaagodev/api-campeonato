const express = require('express');

const app = express();

const Routes = require('./routes');

app.use(express.json());

app.use(Routes);

app.listen(process.env.PORT || 3333, () => console.log('Server is running!'));