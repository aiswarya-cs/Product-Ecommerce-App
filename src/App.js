import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './Components/Header/Headers';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Banner from './Components/Banner/Banner';
import Productcart from './Components/ProductCart/Productcart';
import Footer from './Components/Footer/Footer';
import Allproducts from './Components/All-products/Allproducts';
import { createContext, useState } from 'react';
import Detailed from './Components/Detailed/Detailed';


const All_product_context=createContext();

function App() {
  const [detailedproducts, setdetailedproducts] = useState([]);
  const [detailedId, setdetailedId] = useState("")
  const [hideandShow, sethideandShow] = useState(true);
  
  
  return (
    <div>
       <div>
        <All_product_context.Provider value={{detailedproducts, setdetailedproducts,detailedId, setdetailedId}}>
           <BrowserRouter>
              <Headers  />
              
              {hideandShow ?(
                <>
                <Banner />
                <Productcart/>
                </>
              ):null}
              
              <Routes>
                 <Route path='cart' element={<Allproducts sethideandShow={sethideandShow}/>}/>
                 <Route path='detailed' element={<Detailed sethideandShow={sethideandShow}/>}/>
              </Routes>
            <Footer/>
           </BrowserRouter>
        </All_product_context.Provider>
      </div>
</div>
  );
}
export default App;
export {All_product_context}
