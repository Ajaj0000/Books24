import React from "react";
import { Route, Routes } from "react-router-dom";
import { DashboardParent } from "./Components/Admin/ScreenComponents/Dashboard/DashboardParent/DashboardParent";
import { Home } from "./Components/User/ScreenComponents/Home";
import { CategoryParent } from "./Components/Admin/ScreenComponents/Category/CategoryParent/CategoryParent";

function Routing() {
    return (
        <>
            <Routes>
                <Route path="/dash" element={<DashboardParent />} />
                <Route path="/home" element={<Home />} />
                <Route path='/' element={<CategoryParent />} />
            </Routes>
        </>
    )
}
export { Routing }