import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Build from './Pages/Build/Build';
import ChooseCasing from './Pages/Build/ChooseCasing';
import ChooseKeyboard from './Pages/Build/ChooseKeyboard';
import ChooseMonitor from './Pages/Build/ChooseMonitor';
import ChooseMotherboard from './Pages/Build/ChooseMotherboard';
import ChooseMouse from './Pages/Build/ChooseMouse';
import ChoosePowerSupply from './Pages/Build/ChoosePowerSupply';
import ChooseProcessor from './Pages/Build/ChooseProcessor';
import ChooseRam from './Pages/Build/ChooseRam';
import ChooseSsd from './Pages/Build/ChooseSsd';
import Home from './Pages/Home/Home';
import RequireAuth from './Pages/Login/RequireAuth';
import SignIn from './Pages/Login/SignIn';
import SignUp from './Pages/Login/SignUp';
import Payment from './Pages/Payment/Payment';
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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyPc from './Pages/Dashboard/MyPc';
import AddReview from './Pages/Dashboard/AddReview';

export const ProcessorContext = createContext('none')
export const MotherboardContext = createContext('none')
export const RamContext = createContext('none')
export const SsdContext = createContext('none')
export const PowerSupplyContext = createContext('none')
export const CasingContext = createContext('none')
export const MonitorContext = createContext('none')
export const KeyboardContext = createContext('none')
export const MouseContext = createContext('none')



function App() {
  const [processor, setProcessor] = useState(null)
  const [motherboard, setMotherboard] = useState(null)
  const [ram, setRam] = useState(null)
  const [ssd, setSsd] = useState(null)
  const [powerSupply, setPowerSupply] = useState(null)
  const [casing, setCasing] = useState(null)
  const [monitor, setMonitor] = useState(null)
  const [keyboard, setKeyboard] = useState(null)
  const [mouse, setMouse] = useState(null)


  return (
    <div>
      <ProcessorContext.Provider value={processor}>
        <MotherboardContext.Provider value={motherboard}>
          <RamContext.Provider value={ram}>
            <SsdContext.Provider value={ssd}>
              <PowerSupplyContext.Provider value={powerSupply}>
                <CasingContext.Provider value={casing}>
                  <MonitorContext.Provider value={monitor}>
                    <KeyboardContext.Provider value={keyboard}>
                      <MouseContext.Provider value={mouse}>
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

                            <Route path='/build' element={

                              <RequireAuth>
                                <Build> </Build>
                              </RequireAuth>
                            }>
                            </Route>


                            {/* nested route for dashboard */}
                            <Route path='/dashboard' element={ <RequireAuth> <Dashboard></Dashboard></RequireAuth>}>
                              <Route index element={<MyPc></MyPc>}></Route>
                              <Route path='addReview' element={<AddReview></AddReview>}></Route>
                            </Route>







                            <Route path='/reviews' element={<Reviews></Reviews>}></Route>
                            <Route path='/payment/:id' element={<Payment></Payment>}></Route>


                            <Route path='/chooseProcessor' element={<ChooseProcessor processor={processor} setProcessor={setProcessor}></ChooseProcessor>}></Route>
                            <Route path='/chooseMotherboard' element={<ChooseMotherboard motherboard={motherboard} setMotherboard={setMotherboard}></ChooseMotherboard>}></Route>
                            <Route path='/chooseRam' element={<ChooseRam ram={ram} setRam={setRam}></ChooseRam>}></Route>
                            <Route path='/chooseSsd' element={<ChooseSsd ssd={ssd} setSsd={setSsd}></ChooseSsd>}></Route>
                            <Route path='/powerSupply' element={<ChoosePowerSupply powerSupply={powerSupply} setPowerSupply={setPowerSupply}></ChoosePowerSupply>}></Route>
                            <Route path='/casing' element={<ChooseCasing casing={casing} setCasing={setCasing}></ChooseCasing>}></Route>
                            <Route path='/monitor' element={<ChooseMonitor monitor={monitor} setMonitor={setMonitor}></ChooseMonitor>}></Route>
                            <Route path='/keyboard' element={<ChooseKeyboard keyboard={keyboard} setKeyboard={setKeyboard}></ChooseKeyboard>}></Route>
                            <Route path='/mouse' element={<ChooseMouse mouse={mouse} setMouse={setMouse}></ChooseMouse>}></Route>
                  



                            <Route path='*' element={<NotFound></NotFound>}></Route>
                          </Routes>

                          <Footer></Footer>
                        </div>
                      </MouseContext.Provider>
                    </KeyboardContext.Provider>
                  </MonitorContext.Provider>
                </CasingContext.Provider>
              </PowerSupplyContext.Provider>
            </SsdContext.Provider>
          </RamContext.Provider>
        </MotherboardContext.Provider>
      </ProcessorContext.Provider>
      <ToastContainer />
    </div>
  );
}

export default App;
