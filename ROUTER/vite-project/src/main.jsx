import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, 
    createRoutesFromElements, 
    Route, 
    RouterProvider } from 'react-router-dom'

import Layout from "./layout.jsx"
import Home from "./components/home/home.jsx"
import About from "./components/about/about.jsx"
import User from "./components/user/user.jsx"
import Github, { gitFetch } from './components/github/gitF.jsx'

// const router= createBrowserRouter([
// {
//     path:"/",
//     element:<Layout/>,
//     children:[
//         {
//             path:"",
//             element:<Home/>
//         },
//         {
//             path:"about",
//             element:<About/>
//         }
//     ]
// }
// ])


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>}>
            <Route path="" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="user/:userId" element= {<User/>}/>
            <Route path="github" element={<Github/>} loader={gitFetch}/>
        </Route>
    )
)
createRoot(document.getElementById('root')).render(



 < RouterProvider router={router}/>

)
