import Header from './page/Header'
import './App.css';
import CreateType from './page/CreateType';
import Home from './page/Home';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

function App() {
   const routes = createBrowserRouter([
    {
      path: '/',
      element: <CreateType/>
    },
    {
      path: '/home',
      element: <Home/>
    }
   ])
  return (
     
    <div className='conatiner'> 
       <Header/> 
       <RouterProvider router={routes}/>  
    </div>
    
  );
}

export default App;
