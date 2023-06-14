import express from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import {Configuration, OpenAIApi} from 'openai';
dotenv.config();

const port = process.env.PORT || 3001;
const currentModuleUrl = new URL(import.meta.url);
const currentModulePath = dirname(fileURLToPath(currentModuleUrl));
const buildPath = path.join(currentModulePath, '../build')


const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

console.log(config);

const openAi = new OpenAIApi(config);

// setup Server part
const app = express();
app.use(express.static(buildPath));
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    res.status(200).send({
        message: 'Hello from Outside the box!'
    })
})

// chat GPT endpoint
app.post('/chat', async (req, res) => {
    const { prompt } = req.body;

    const complete = await openAi.createCompletion({
        model: 'text-davinci-003',
        prompt,
        temperature: 1,
        max_tokens: 1024,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    })
    res.send(complete.data.choices[0].text);
})
// app.get('*', (req, res) => {
//     res.sendFile(path.join(buildPath, 'index.html'))
// })

app.listen(port, () => {
    console.log(`Server is listening ${port}`);
});