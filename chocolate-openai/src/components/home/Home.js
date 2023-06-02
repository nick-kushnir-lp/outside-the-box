import Select from "react-select";
import axios from "axios";
import {useState} from "react";


function Home() {
    const options = [
        {value: 'manager', label: 'manager'},
        {value: 'developer', label: 'developer'},
        {value: 'professor', label: 'professor'},
        {value: 'designer', label: 'designer'},
        {value: 'aged human', label: 'aged human'},
    ];
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);

    const onPromptClick = () => {
        const randomPrompt =
            `Give me the absolute coolest, most mind-blowing, extraordinary ChatGPT prompt that will really show off the power of ChatGPT. Make sure that it will surprise and amuse even people who often use ChatGPT in their everyday lives, and it will also be useful to them in some way. This prompt should be concise and straight to the point. Focus on the field of ${selectedOption.value}`;
        setPrompt(randomPrompt);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post("http://localhost:8080/chat", {prompt})
            .then((res) => {
                setResponse(res.data);
            })
            .catch((err) => {
                console.log(`response error ${err}`);
            })
    }
    return (
        <>
            <form className='w-full text-center' onSubmit={handleSubmit}>
                <Select
                    defaultValue={null}
                    defaultMenuIsOpen={false}
                    placeholder="Choose your profession"
                    options={options}
                    onChange={setSelectedOption}
                />
                <div className='md-6'>
                    <label
                        htmlFor='add-some-text'
                        className='block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4'>
                        You can say/add something
                    </label>
                </div>
                <div className='py-4'>
                    <input
                        className='bg-gray-200 appearance-none border-2 border-gray-200
                                rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white'
                        type='text'
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                    />
                </div>
                <div className='flex justify-between'>
                    <button
                        disabled={!selectedOption}
                        type="submit"
                        className="focus:outline-none disabled:bg-gray-500 shadow bg-purple-500 hover:bg-purple-400 py-2 px-4 rounded text-white font-bold"
                        onClick={onPromptClick}
                    >
                        Random Prompt
                    </button>
                    <button
                        disabled={!prompt}
                        type="submit"
                        className="disabled:bg-gray-500 shadow bg-purple-500 hover:bg-purple-400 py-2 px-4 rounded text-white font-bold focus:outline-none"
                    >
                        Send
                    </button>
                </div>
            </form>
            <div className="w-full items-center mt-4">
                <p>{response}</p>
            </div>
        </>
    )
}

export default Home;