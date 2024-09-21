import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./Components/Admin/ScreenComponents/Dashboard/Dashboard";

function Routing() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </>
    )
}
export { Routing }