import React, { useState } from "react";
import { FaEdit, FaFilter, FaGripVertical, FaTrashAlt } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

function CategorySection() {
    const [data, setData] = useState([
        { id: 1, title: "Rjasthan G.K", parentCategory: "", printer: "Printer1(Default)", status: "Active" },
        { id: 2, title: "Springboard Classnotes", parentCategory: "", printer: "Printer1(Default)", status: "Inactive" },
        { id: 3, title: "RBSE & NCERT Books Use In Competition Exam", parentCategory: "", printer: "Printer1(Default)", status: "Active" },
        { id: 4, title: "Sarthi Publication", parentCategory: "", printer: "Printer1(Default)", status: "Inactive" },
        { id: 5, title: "MSC Solved Paper", parentCategory: "", printer: "Printer1(Default)", status: "Active" },
        { id: 6, title: "VMOU M.A Political", parentCategory: "", printer: "Printer1(Default)", status: "Active" },
    ]);

    const deleteItem = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    const editItem = (id) => {
        // Define your edit logic here.
        console.log(`Editing item with id ${id}`);
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
                            <button>Add Category</button>
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
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Icon (Reorder)</th>
                                <th>Title</th>
                                <th>Parent Category</th>
                                <th>Printer</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={item.id}>
                                    <td>
                                        <FaGripVertical />
                                    </td>
                                    <td>{item.title}</td>
                                    <td>{item.parentCategory}</td>
                                    <td>{item.printer}</td>
                                    <td>
                                        <span className={`status ${item.status === "Active" ? "active-btn" : "inactive"}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td>
                                        <button
                                            className="action-btn delete-btn"
                                            onClick={() => deleteItem(item.id)}
                                        >
                                            <FaTrashAlt />
                                        </button>
                                        <button
                                            className="action-btn edit-btn"
                                            onClick={() => editItem(item.id)}
                                        >
                                            <FaEdit />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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
export { CategorySection }