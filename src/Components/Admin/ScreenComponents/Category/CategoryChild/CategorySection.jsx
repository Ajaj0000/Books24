import React, { useState } from "react";
import { FaEdit, FaFilter, FaTrashAlt } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

function CategorySection() {
    const [data, setData] = useState([
        { id: 1, itemid: "3321", title: "Rjasthan G.K", parentCategory: "", printer: "Printer1(Default)", status: "Active" },
        { id: 2, itemid: "3322", title: "Springboard Classnotes", parentCategory: "", printer: "Printer1(Default)", status: "Inactive" },
        { id: 3, itemid: "3323", title: "RBSE & NCERT Books Use In Competition Exam", parentCategory: "", printer: "Printer1(Default)", status: "Active" },
        { id: 4, itemid: "3324", title: "Sarthi Publication", parentCategory: "", printer: "Printer1(Default)", status: "Inactive" },
        { id: 5, itemid: "3325", title: "MSC Solved Paper", parentCategory: "", printer: "Printer1(Default)", status: "Active" },
        { id: 6, itemid: "3326", title: "VMOU M.A Political", parentCategory: "", printer: "Printer1(Default)", status: "Active" },
    ]);

    const deleteItem = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    const editItem = (id) => {
        // Define your edit logic here.
        console.log(`Editing item with id ${id}`);
    };

    const toggleid = (id) => {
        setData(data.map(item =>
            item.id === id ? { ...item, status: item.status === 'Active' ? 'Inactive' : 'Active' } : item
        ));
    };

    return (
        <>
            <div className="category">
                <div className="row">
                    <div className="category-nav">
                        <div className="category-text">
                            <h4>Category List</h4>
                        </div>
                        <div className="category-btn">
                            <Link to="/addcategory">
                                <button>Add Category</button>
                            </Link>
                        </div>
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
                                <button><AiFillDelete /></button>
                            </div>
                            <div className="btn-1">
                                <button><FaFilter /></button>
                            </div>
                        </div>
                        <div className="search">
                            <h4>Search:</h4>
                            <input type="text" placeholder="Search all Category" className="input" />
                        </div>
                    </div>

                    <div className="order-list">
                        <div className="order-list-header">
                            <div>Item Id</div>
                            <div>Title</div>
                            <div>Parent Category</div>
                            <div>Printer</div>
                            <div>Status</div>
                            <div>Action</div>
                        </div>

                        {data.map((item, index) => (
                            <div key={item.id} className="order-list-row">
                                <div>{item.itemid}</div>
                                <div>{item.title}</div>
                                <div>{item.parentCategory}</div>
                                <div>{item.printer}</div>
                                <div>
                                    <span className={`status ${item.status === 'Active' ? 'activee' : 'inactive'}`}
                                        onClick={() => toggleid(item.id)}>
                                        {item.status === 'Active' ? 'Available' : 'Not Available'}
                                    </span>
                                </div>
                                <div>
                                    <button
                                        className="action-btn delete-btn"
                                        onClick={() => deleteItem(item.id)}>
                                        <FaTrashAlt />
                                    </button>
                                    <button
                                        className="action-btn edit-btn"
                                        onClick={() => editItem(item.id)}>
                                        <FaEdit />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pagination">
                        <span>Showing 1 to {data.length} of {data.length} entries</span>
                        <span className="pagination-buttons">
                            <button>Previous</button>
                            <button>1</button>
                            <button>Next</button>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export { CategorySection };
