const express = require('express');
require('dotenv').config();
const cors = require('cors');
const dataRouter = require('./routes/data.routes')

const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());

app.use(express.json({extended: true}));

app.use('/api', dataRouter)

app.listen(PORT, () => console.log(`Сервер запущен на ${PORT} порту.`));