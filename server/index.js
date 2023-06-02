const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const {Configuration, OpenAIApi} = require('openai');

const config = new Configuration({
    apiKey: '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',
})

const openAi = new OpenAIApi(config);

// setup Server part
const app = express();
app.use(bodyParser.json());
app.use(cors());

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

const port = 8080;
app.listen(port, () => {
    console.log(`Server is listening ${port}`);
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});