import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./index.scss"
import { Link } from 'react-router-dom';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';
import { Suspense } from 'react';

const App = () => {
    return (
        <div className='app'>
            <BrowserRouter>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageLazy/>}/>
                    <Route path={'/'} element={<MainPageLazy/>}/>
                </Routes>
            </Suspense>    
            </BrowserRouter>
        </div>
    );
};

export default App;