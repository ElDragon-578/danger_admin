import { Route, Routes } from "react-router-dom";
import { Main } from "./main/main";
import { RiskTables } from "./riskTables/riskTables";
import { WorkshopOne } from "./workshops/workshopOne";

export function Router (){
    return(
        <Routes>
            <Route path="/danger_admin" element={<Main/>}/>

            <Route path="/riskTable" element={<RiskTables/>}/>

            <Route path="/workshopOne" element={<WorkshopOne/>}/>
        </Routes>
    )
}