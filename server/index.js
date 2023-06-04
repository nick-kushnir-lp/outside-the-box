const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 3001;
const buildPath = path.join(__dirname, 'build')

const {Configuration, OpenAIApi} = require('openai');

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openAi = new OpenAIApi(config);

// setup Server part
const app = express();
app.use(express.static(buildPath));
app.use(cors());
app.use(express.json());

// chat GPT endpoint
app.post('/chat', async (req, res) => {
    const { prompt } = req.body;

    const complete = await openAi.createCompletion({
        model: 'text-davinci-003',
        prompt,
        temperature: 1,
        max_tokens: 100,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    })

    res.send(complete.data.choices[0].text);
})
app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'))
})

app.listen(port, () => {
    console.log(`Server is listening ${port}`);
});