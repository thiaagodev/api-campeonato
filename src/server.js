const express = require('express');

const app = express();

app.use(express.json());

app.listen(process.env.PORT || 3333, () => console.log('Server is running!'));