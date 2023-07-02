import Header from './page/Header'
import './App.css';
import CreateType from './page/CreateType';
import Home from './page/Home';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react';


function App() {
   const routes = createBrowserRouter([
    {
      path: '/',
      element: <CreateType/>
    },
    {
      path: '/home',
      element:<ChakraProvider><Home/></ChakraProvider> 
    }
   ])
  return (
    <div > 
       
       <RouterProvider router={routes}/> 
     
       <div>
      
       </div>
    </div>
   
  );
}

export default App;
