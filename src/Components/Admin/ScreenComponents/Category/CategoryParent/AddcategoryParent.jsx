import React from "react";
import { MergeComponents } from "../../../CommonComponents/MergeComponents";
import { Addcategory } from "../CategoryChild/Addcategory";

function AddcategoryParent(){
    return(
        <>
        <MergeComponents getComponent ={<Addcategory/>}/>
        </>
    )
}
export {AddcategoryParent};