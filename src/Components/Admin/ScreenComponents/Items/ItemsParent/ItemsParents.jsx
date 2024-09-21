import React from "react";
import { MergeComponents } from "../../../CommonComponents/MergeComponents";
import { Items } from "../ItemsChild/Items";

function ItemsParents() {
    return (
        <>
            <MergeComponents getComponent={<Items />} />
        </>
    )
}
export { ItemsParents }