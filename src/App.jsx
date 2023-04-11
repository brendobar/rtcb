import { Route, Routes } from 'react-router-dom';

import { Template } from './components/Template.jsx';

import Home from './pages/Home';
import Photos from './pages/Photos';
import Contacts from './pages/Contacts';
import NotFound from './pages/404';

function App() {
  return (

    <>
      <Routes>
        <Route path='/' element={<Template/>}>
          <Route index element={<Home />} />
          <Route path='photos' element={<Photos />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );

} 

export default App;
