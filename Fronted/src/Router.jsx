import { Route, Routes } from "react-router-dom";
import { Main } from "./main/main";

export function Router (){
    return(
        <Routes>
            <Route path="/" element={<Main/>}/>
        </Routes>
    )
}