import './App.css';
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import AboutUs from "./components/about-us/AboutUs";
import Home from "./components/home/Home";

function App() {
    return (
        <>
            <div className='w-[720px] mx-auto py-24'>
                <div className='w-full justify-center items-center px-8'>
                    <div className='w-full justify-center items-center py-8'>
                        <BrowserRouter>
                            <div className={'text-center'}>
                                <NavLink to="/">
                                    Home
                                </NavLink>
                                <NavLink className={'ml-2'} to="/about">
                                    About Us
                                </NavLink>
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
