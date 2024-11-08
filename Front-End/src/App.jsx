  import {  createBrowserRouter,  RouterProvider,} from "react-router-dom";
  import Login from "./Pages/Login/Inicio";
  import HomeAdmin from "./Pages/Admin/Home";
  import Empleado from "./Pages/Empleado/User";
    

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/> ,
    },
    {
      path: "/home",
      element: <HomeAdmin />,
    },
    {
      path:'/homeUser',
      element:<Empleado />
      ,
    }
  ]);

  function App() {
  return(
  <>
    <RouterProvider router={router} />
  </>)
  }
  export default App;
