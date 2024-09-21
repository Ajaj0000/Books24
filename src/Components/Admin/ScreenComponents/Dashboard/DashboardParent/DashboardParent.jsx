import React from "react";
import { SlideBar } from "../../../CommonComponents/SliderBar";
import { Dashboard } from "../DashboardChild/Dashboard";

function DashboardParent() {
    return (
        <>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <SlideBar />
                <Dashboard />
            </div>
        </>
    )
}
export { DashboardParent }