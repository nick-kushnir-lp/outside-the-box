import Select from "react-select";
import axios from "axios";
import {useState} from "react";


function Home() {
    const options = [
        {value: 'programming', label: 'Programming'},
        {value: 'game development', label: 'Game Development'},
        {value: 'physics', label: 'Physics'},
        {value: 'statistics', label: 'Statistics'},
        {value: 'math', label: 'Math'},
        {value: 'management', label: 'Management'},
        {value: 'writing', label: 'Writing'},
        {value: 'motivation', label: 'Motivation'},
        {value: 'well-being', label: 'Well-being'},
        {value: 'nutrition', label: 'Nutrition'},
        {value: 'science', label: 'Science'},
        {value: 'debate', label: 'Debate'},
    ];
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);

    const sortedList = options.sort((a, b) =>
        a.value.localeCompare(b.value));


    const promptRequest = (prompt) => {
        axios
            .post("https://outside-service.onrender.com/chat", {prompt})
            .then((res) => {
                setResponse(res.data);
            })
            .catch((err) => {
                console.log(`response error ${err}`);
            })
    }

    const onPromptClick = () => {
        const randomPrompt =
            `Give me the absolute coolest, most mind-blowing, extraordinary ChatGPT prompt that will really show off the power of ChatGPT. Make sure that it will be both amusing and useful. This prompt should be no longer than one sentence. Focus on the field of ${selectedOption.value}`;
        setPrompt(randomPrompt);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        promptRequest(prompt);
    }
    return (
        <>
            <p className='w-full text-center text-white font-medium font-maven text-2xl mt-5'>
                Our chocolate is so smart, it writes ChatGPT prompts for you!
            </p>
            <p className='w-full my-2 text-left font-monserrat text-base text-colorDescription'>
                It's hard to deny that the sudden development of AI technology will change the world for the better.
                However, not all people fully realize what this new technology is really capable of. To solve this
                problem, we've created a website which can help you generate as many unusual ChatGPT prompts as you
                need. Let the chocolate and intellect unite!
            </p>
            <form className='home__form w-full text-center mt-9' onSubmit={handleSubmit}>
                <p className="ml-3 font-monserrat text-left text-white text-sm">Your field of interest:</p>
                <Select
                    classNamePrefix='outside-box'
                    className='outside'
                    defaultValue={null}
                    defaultMenuIsOpen={false}
                    placeholder="Choose your field of interest..."
                    options={sortedList}
                    onChange={setSelectedOption}
                />
                <div className='md-6'>
                    <label
                        htmlFor='add-some-text'
                        className='block ml-3 font-monserrat text-base text-colorDescription md:text-left mb-1 md:mb-0 pr-4'>
                        Don't see your field of interest? Don't worry, we'll add more soon!
                    </label>
                </div>
                <div className='py-4 mt-9 home__textarea'>
                    <p className="ml-3 font-monserrat text-left text-white text-sm">Your prompt:</p>
                    <textarea
                        className='h-24 rounded-lg bg-darkBackground appearance-none border border-buttonBackground
                                rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-white'
                        type='text'
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                    />
                </div>
                <div className='flex justify-between'>
                    <button
                        disabled={!selectedOption}
                        type="submit"
                        className="font-maven rounded-lg uppercase focus:outline-none border border-buttonBackground disabled:bg-gray-500 shadow bg-buttonBackground hover:bg-transparent py-2 px-4 rounded text-sm text-white font-medium"
                        onClick={onPromptClick}
                    >
                        Random Prompt
                    </button>
                    <button
                        disabled={!prompt}
                        type="submit"
                        className="font-maven rounded-lg uppercase disabled:bg-gray-500 border border-buttonBackground bg-buttonBackground hover:bg-transparent shadow hover:bg-purple-400 py-2 px-4 rounded text-white text-sm font-medium focus:outline-none"
                    >
                        Send
                    </button>
                </div>
            </form>
            <div className="w-full items-center mt-12">
                <p className="ml-3 font-monserrat text-left text-white text-sm">Response from ChatGPT:</p>
                <p className="rounded-lg mt-1 h-32 py-2 px-3 min-h-full text-white w-full border border-buttonBackground">{response}</p>
            </div>
        </>
    )
}

export default Home;