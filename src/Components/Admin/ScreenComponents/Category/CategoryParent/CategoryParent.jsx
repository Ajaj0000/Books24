import React from "react";
import { CategorySection } from "../CategoryChild/CategorySection";
import { MergeComponents } from "../../../CommonComponents/MergeComponents";

function CategoryParent() {
    return (
        <>
<<<<<<< HEAD
      
                <CategorySection />
           
=======
            <MergeComponents getComponent={<CategorySection/>}/>
>>>>>>> 300f13e5a7a01c3ddb65414525378db74a597587
        </>
    )
}
export { CategoryParent }