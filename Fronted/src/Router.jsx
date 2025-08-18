import { Route, Routes } from "react-router-dom";
import { Main } from "./main/main";
import { RiskTables } from "./riskTables/riskTables";
import { WorkshopOne } from "./workshops/workshopOne";
import { HIR } from "./HIR/HIR";
import { HIRworkshop } from "./workshopHIR/workshopHIR";

export function Router (){
    return(
        <Routes>
            <Route path="/danger_admin" element={<Main/>}/>

            <Route path="/riskTable" element={<RiskTables/>}/>

            <Route path="/workshopOne" element={<WorkshopOne/>}/>

            <Route path="/HIR" element={<HIR/>}/>

            <Route path="/HIRWorkshop" element={<HIRworkshop/>}/>
        </Routes>
    )
}