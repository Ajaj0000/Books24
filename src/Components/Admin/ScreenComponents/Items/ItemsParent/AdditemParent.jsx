import React from "react";
import { MergeComponents } from "../../../CommonComponents/MergeComponents";
import { AddItems } from "../ItemsChild/AddItems";

function AdditemParent(){
    return(
        <>
        <MergeComponents getComponent={<AddItems />} />
        </>
    )
}
export{AdditemParent}