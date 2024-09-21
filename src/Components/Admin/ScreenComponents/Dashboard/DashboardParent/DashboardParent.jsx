import React from "react";
import { Dashboard } from "../DashboardChild/Dashboard";
import { MergeComponents } from "../../../CommonComponents/MergeComponents";

function DashboardParent() {
    return (
        <>
           <MergeComponents getComponent={<Dashboard/>}/>
        </>
    )
}
export { DashboardParent }