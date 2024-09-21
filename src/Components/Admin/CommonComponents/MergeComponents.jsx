import React from "react";
import { SlideBar } from "./SliderBar";

function MergeComponents(props) {
    return (
        <>
            <div className="merge">
                <div className="mainLite">
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