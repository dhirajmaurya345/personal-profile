import './index.css'
import './assets/fonts.css'
import { BrowserRouter, Routes } from 'react-router-dom';


// import Pricing from './components/Pricing'
import StoreNavigation from './components/StoreNavigation'


function App() {
 return (
          <BrowserRouter basename='/personal-profile'>
          <StoreNavigation>
            <Routes >
          
            {/* <Route  path='/Pricing' key={1} element={<Pricing/>}/> */}
           
            </Routes>
            
            </StoreNavigation>
            
          </BrowserRouter>    
  );
}

export default App
