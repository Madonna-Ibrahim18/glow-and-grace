import StoreNavbar from './navbar';
import StoreHeader from './header';
import Makeup from './Makeup'
import Skincare from './Skincare'
import Offers from './Offers'
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (

    <Router>
    <div style={{ backgroundColor: '#181214', minHeight: '100vh', width: '100%'}}>
      <StoreNavbar />
      <StoreHeader />
     
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/makeup' element={<Makeup/>} />
<Route path='/skincare' element={<Skincare/>} />
<Route path='/offers' element={<Offers/>} />


</Routes>
    </div>
     </Router>
  );
}

export default App;
