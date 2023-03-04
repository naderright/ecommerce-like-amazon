import './App.css';
import {createBrowserRouter,RouterProvider }from 'react-router-dom'
import Layout from './component/Layout/Layout';
 
const router = createBrowserRouter([
  {path:'/',element:<Layout/>,children:[
    {path:'home',element:<h1>nader</h1>}
  ]}
])
function App() {
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
