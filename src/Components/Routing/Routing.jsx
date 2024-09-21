import React from "react";
import { Route, Routes } from "react-router-dom";
import { DashboardParent } from "../Admin/ScreenComponents/Dashboard/DashboardParent/DashboardParent";
import { Home } from "../User/ScreenComponents/Home";
import { CategoryParent } from "../Admin/ScreenComponents/Category/CategoryParent/CategoryParent";
import { ProfileParent } from "../Admin/ScreenComponents/Profile/ProfileParent/ProfileParent";
import { ItemsParents } from "../Admin/ScreenComponents/Items/ItemsParent/ItemsParents";

function Routing() {
    return (
        <>
            <Routes>

                <Route path="/" element={<DashboardParent />} />

                <Route path="/dash" element={<DashboardParent />} />

                <Route path="/home" element={<Home />} />

                <Route path='/category' element={<CategoryParent />} />

                <Route path="/profile" element={<ProfileParent />} />

                <Route path="/item" element={<ItemsParents />} />

            </Routes>
        </>
    )
}
export { Routing }