import './App.css';
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import AboutUs from "./components/about-us/AboutUs";
import Home from "./components/home/Home";
import Logo from "./OTB.svg";

function App() {
    return (
        <>
            <div className='Outside__main w-[850px] mx-auto py-24'>
                <div className='w-full justify-center items-center px-8'>
                    <div className='w-full justify-center items-center py-8'>
                        <BrowserRouter>
                            <div className={'flex Outside__main--router justify-center align-center justify-center text-center'}>
                                <div className={'Outside__main--logo'}>
                                    <img src={Logo} alt="Logo"/>
                                </div>
                                <div className='mt-9'>
                                    <NavLink
                                        className={({isActive}) => isActive ? 'uppercase text-white font-bold text-2xl' : 'uppercase text-white font-thin text-2xl'}
                                        to="/">
                                        Home
                                    </NavLink>
                                    <NavLink
                                        className={({isActive}) => isActive ? 'uppercase text-white ml-2 font-bold text-2xl' : 'uppercase text-white ml-2 font-thin text-2xl'}
                                        to="/about">
                                        About Us
                                    </NavLink>
                                </div>
                            </div>
                            <Routes>
                                <Route exact path="/" element={<Home/>}/>
                                <Route exact path="/about" element={<AboutUs/>}/>
                            </Routes>
                        </BrowserRouter>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;
