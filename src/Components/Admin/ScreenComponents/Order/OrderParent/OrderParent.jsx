import React from "react";
import { MergeComponents } from "../../../CommonComponents/MergeComponents";
import { Order } from "../OrderChild/Order";

function OrderParent() {
    return (
        <>
<MergeComponents getComponent={<Order/>}/>
        </>
    )
}
export { OrderParent }