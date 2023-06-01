const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

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
        max_tokens: 512,
        temperature: 0,
        prompt
    })

    res.send(complete.data.choices[0].text);
})

const port = 8080;
app.listen(port, () => {
    console.log(`Server is listening ${port}`);
});