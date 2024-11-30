import Home from './pages/home';

import './App.css';
import { useCookies } from 'react-cookie';

import Youtube from './pages/youtube';
import NotFound from './pages/notfound';
import Header from './components/header';

import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";

import Ai from './pages/ai';
import Footer from './components/footer';
import Register from './pages/register';
import Blog from './pages/blog';



function App() {

  
  const [cookies, setCookie, removeCookie] = useCookies();
  
  
  const login = cookies["login"];



  const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "ai",
    element: login ? <Ai /> : <Home />,
  },
  {
    path: "youtube",
    element: login ? <Youtube/> : <Home/>,
  },
    {
    path: "*",
    element: login ? <NotFound/> : <Home/>,
  },
  {
    path: "register",
    element:  <Register/> ,
  },
  {
    path: "blog",
    element:  <Blog/> ,
  }
]);



  return (
    <div className="  flex flex-col h-svh  ">
      
      {
        cookies["login"] ? <Header/> : ""
      }




 <RouterProvider router={router} />

{
        cookies["login"] ? <Footer/> : ""
      }
    </div>
  
);

}

export default App;
