import React from "react";
import { MdDelete } from "react-icons/md";
import { FaFilter } from "react-icons/fa";


function CategorySection() {
    return (
        <>
            <div className="category">
                <div className="row">
                    <div className="category-nav">
                        <div className="text">
                            <h4>Category List</h4>
                        </div>

                        <button>Add Category</button>
                    </div>
                    <hr />
                    <div className="category-filter">
                        <div className="filter">
                            <div className="btn-1">
                                <button>All</button>
                            </div>
                            <div className="btn-1">
                                <button>Active</button>
                            </div>
                            <div className="btn-1">
                                <button>Inactive</button>
                            </div>
                            <div className="btn-1">
                                <button><MdDelete /></button>
                            </div>
                            <div className="btn-1">
                                <button><FaFilter /></button>
                            </div>
                        </div>
                        <div className="search">
                            <h5>Search:</h5>
                            <input className="input" type="text" placeholder="Search all Category" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export { CategorySection }