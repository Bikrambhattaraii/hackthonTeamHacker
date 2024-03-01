import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Register from "./Pages/Register";

function Router() {
    return (
        <>
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                        <Route path='/login' element={<Login/>}></Route>
                        <Route path='/Register' element={<Register/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router