import { Main } from "@/app/Main";
import { PageNotFound } from "@/common/components";
import { Route, Routes } from "react-router";
import { paths } from "../constants";

export const Routing = () => {
    return (
        <Routes>
            <Route path={paths.mainPage} element={<Main/>}/>        
            <Route path={paths.country} element={<div></div>}/>        
            <Route path={paths.wrongPath} element={<PageNotFound/>}/>        
        </Routes>
    );
};