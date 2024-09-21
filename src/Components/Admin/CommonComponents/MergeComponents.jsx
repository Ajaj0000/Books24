import React from "react";
import { SlideBar } from "./SliderBar";

function MergeComponents(props) {
    return (
        <>
            <div className="main d-flex w-100">
                <div className="mainLite mr-3">
                    <SlideBar/>
                </div>
                <div className="contant">
                    {props.getComponent}
                </div>
            </div>

            
        </>
    )
}
export { MergeComponents }