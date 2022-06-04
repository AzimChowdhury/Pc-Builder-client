import { Route, Routes } from 'react-router-dom';
import Build from './Pages/Build/Build';
import Home from './Pages/Home/Home';
import SignIn from './Pages/Login/SignIn';
import SignUp from './Pages/Login/SignUp';
import AllCasing from './Pages/Products/AllCasing';
import AllKeyBoard from './Pages/Products/AllKeyBoard';
import AllMonitor from './Pages/Products/AllMonitor';
import AllMotherBoard from './Pages/Products/AllMotherboard';
import AllMouse from './Pages/Products/AllMouse';
import AllPowerSupplier from './Pages/Products/AllPowerSupplier';
import AllProcessors from './Pages/Products/AllProcessors';
import AllRam from './Pages/Products/AllRam';
import AllSSD from './Pages/Products/AllSSD';
import Products from './Pages/Products/Products';
import Reviews from './Pages/Reviews/Reviews';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import NotFound from './Pages/Shared/NotFound';


function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>

        {/* nested route for products page */}
        <Route path='/products' element={<Products></Products>}>
          <Route index element={<AllProcessors></AllProcessors>}></Route>
          <Route path="motherboard" element={<AllMotherBoard></AllMotherBoard>}></Route>
          <Route path='ram' element={<AllRam></AllRam>}></Route>
          <Route path='ssd' element={<AllSSD></AllSSD>}></Route>
          <Route path='powersupplier' element={<AllPowerSupplier></AllPowerSupplier>}></Route>
          <Route path='casing' element={<AllCasing></AllCasing>}></Route>
          <Route path='monitor' element={<AllMonitor></AllMonitor>}></Route>
          <Route path='keyboard' element={<AllKeyBoard></AllKeyBoard>}></Route>
          <Route path='mouse' element={<AllMouse></AllMouse>}></Route>
        </Route>


        <Route path='/signIn' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/build' element={<Build></Build>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
