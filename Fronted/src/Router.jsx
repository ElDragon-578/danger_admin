import { Route, Routes } from "react-router-dom";
import { Main } from "./main/main";

export function Router (){
    return(
        <Routes>
            <Route path="/danger_admin" element={<Main/>}/>
        </Routes>
    )
}