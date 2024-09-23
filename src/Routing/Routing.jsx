import React from "react";
import { Route, Routes } from "react-router-dom";
import { DashboardParent } from "../Components/Admin/ScreenComponents/Dashboard/DashboardParent/DashboardParent";
import { Home } from "../Components/User/ScreenComponents/Home";
import { CategoryParent } from "../Components/Admin/ScreenComponents/Category/CategoryParent/CategoryParent";
import { ProfileParent } from "../Components/Admin/ScreenComponents/Profile/ProfileParent/ProfileParent";
import { ItemsParents } from "../Components/Admin/ScreenComponents/Items/ItemsParent/ItemsParents";
import { AddItems } from "../Components/Admin/ScreenComponents/Items/ItemsChild/AddItems";
import { AddcategoryParent } from "../Components/Admin/ScreenComponents/Category/CategoryParent/AddcategoryParent";
import { AdditemParent } from "../Components/Admin/ScreenComponents/Items/ItemsParent/AdditemParent";

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

                <Route path="/addItem" element={<AddItems/>}/>

                <Route path="/addcategory" element={<AddcategoryParent/>}/>

                <Route path="/additemparent" element={<AdditemParent/>}/>

            </Routes>
        </>
    )
}
export { Routing }