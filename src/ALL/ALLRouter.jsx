import {BrowserRouter,Routes,Route} from "react-router-dom";
import Update from "../ALL/Update";
import Create from "../ALL/Create";
import Read from "../ALL/Read";
import Home from "../ALL/Home";
export default function router(){
    return (
        
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/update/:id" element={<Update/>}/>
        <Route path="/read/:id" element={<Read/>}/>

    </Routes>
    </BrowserRouter>
    )
}