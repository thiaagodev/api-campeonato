const express = require('express');
const cors = require('cors');

const app = express();

const Routes = require('./routes');

app.use(express.json());
app.use(cors({
    origin: 'https://rocketleague-campeonato.vercel.app',
    optionsSuccessStatus: 200
}));

app.use(Routes);

app.listen(process.env.PORT || 3333, () => console.log('Server is running!'));
