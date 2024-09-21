import React from "react";
import { Profile } from "../ProfileChild/Profile";
import { MergeComponents } from "../../../CommonComponents/MergeComponents";

function ProfileParent() {
    return (
        <>
           <MergeComponents getComponent={<Profile/>}/>
        </>
    )
}
export { ProfileParent }