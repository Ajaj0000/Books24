import React from "react";
import { CategorySection } from "../CategoryChild/CategorySection";
import { MergeComponents } from "../../../CommonComponents/MergeComponents";

function CategoryParent() {
    return (
        <>
            <MergeComponents getComponent={<CategorySection/>}/>
        </>
    )
}
export { CategoryParent }