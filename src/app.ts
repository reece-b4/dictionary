import express from 'express';
import getDefinitions from './back-end/controller';

const app = express();

app.get('/', (req, res) => {
    res.status(200).send({msg:"all ok"})})

app.get('/api/definitions', getDefinitions)

export default app;