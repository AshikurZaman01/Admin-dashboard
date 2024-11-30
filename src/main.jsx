import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Components/Roots/Roots';
import Ecommerce from './Components/Pages/Ecommerce/Ecommerce';
import Orders from './Components/Pages/Orders/Orders';
import Employees from './Components/Pages/Employees/Employees';
import Customers from './Components/Pages/Customers/Customers';
import Calender from './Components/Pages/Calender/Calender';
import Kanban from './Components/Pages/Kanban/Kanban';
import Editor from './Components/Pages/Editor/Editor';
import ColorPicker from './Components/Pages/ColorPicker/ColorPicker';
import Line from './Components/Pages/Line/Line';
import Area from './Components/Pages/Area/Area';
import Pie from './Components/Pages/Pie/pie';
import Financial from './Components/Pages/Financial/Financial';
import ColorMapping from './Components/Pages/ColorMapping/ColorMapping';
import Pyramid from './Components/Pages/Pyramid/Pyramid';
import { ContextProvider } from './Components/ContextApi/ContextProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      //Dashboard
      {
        path: "/",
        element: <Ecommerce></Ecommerce>
      },
      //Dashboard

      {
        path: "/orders",
        element: <Orders></Orders>
      },
      {
        path: "/employees",
        element: <Employees></Employees>
      },
      {
        path: "/customers",
        element: <Customers></Customers>
      },

      {
        path: "/calender",
        element: <Calender></Calender>
      },
      {
        path: "/kanban",
        element: <Kanban></Kanban>
      },
      {
        path: "/editor",
        element: <Editor></Editor>
      },
      {
        path: "/colorPicker",
        element: <ColorPicker></ColorPicker>
      },
      {
        path: "/line",
        element: <Line></Line>
      },
      {
        path: "/area",
        element: <Area></Area>
      },
      {
        path: "/pie",
        element: <Pie></Pie>
      },
      {
        path: "/financial",
        element: <Financial></Financial>
      },
      {
        path: "/colorMapping",
        element: <ColorMapping></ColorMapping>
      },
      {
        path: "/pyramid",
        element: <Pyramid></Pyramid>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </ContextProvider>
  </React.StrictMode >
)
