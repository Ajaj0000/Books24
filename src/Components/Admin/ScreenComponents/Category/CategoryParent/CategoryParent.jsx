import React from "react";
import { CategorySection } from "../CategoryChild/CategorySection";
import { SlideBar } from "../../../CommonComponents/SliderBar";

function CategoryParent() {
    return (
        <>
        <SlideBar/>
            <CategorySection />
        </>
    )
}
export { CategoryParent }