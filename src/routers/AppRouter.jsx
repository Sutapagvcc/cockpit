import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Home from '../pages/Home/home'; 
import Footer from '../components/Footer/footer';


const AppRouter = () => {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
