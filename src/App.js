import './App.css';
import Home from './pages/Home';
import Vendors from './pages/Vendors';
import About from './pages/About';
import Contact from './pages/Contact';
import Search from './pages/Search';
import PageNotFound from './pages/PageNotFound';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout';
import Vendor from './pages/Vendor';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='restaurants' element={<Vendors />} />
        <Route path='vendor' element={<Vendor />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='search' element={<Search />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
