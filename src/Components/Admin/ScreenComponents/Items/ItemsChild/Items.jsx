import React, { useState } from 'react';
import { FaFilter } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Items() {

    const category = [
        {
            id: 1,
            name: "All Category",
        },
        {
            id: 2,
            name: "Agriculture",
        },
        {
            id: 3,
            name: "B.SC",
        },
        {
            id: 4,
            name: "B.TECH."
        }
    ]

    const initialData = [
        { id: 3216, name: "The Left Hand of Darkness by Ursula K. Le Guin", category: "Science Fiction", subCategory: "", mrp: 1500, stock: 40000, status: false },
        { id: 3208, name: "The Girl with the Dragon Tattoo by Stieg Larsson", category: "Thriller", subCategory: "", mrp: 900, stock: 5000, status: false },
        { id: 3209, name: "The Devil in the White City by Erik Larson", category: "Historical Fiction", subCategory: "", mrp: 700, stock: 10000, status: true },
        { id: 3210, name: "Goodnight Moon by Margaret Brown", category: "Children's Literature", subCategory: "", mrp: 2000, stock: 20000, status: false },
        { id: 3211, name: "The House in the Pines", category: "Thriller", subCategory: "", mrp: 500, stock: 5000, status: false },
        { id: 3212, name: "Memoirs of a Geisha", category: "Historical Fiction", subCategory: "", mrp: 100, stock: 5000, status: false },
        { id: 3213, name: "The House in the Pines", category: "Thriller", subCategory: "", mrp: 3333, stock: 10000, status: true },
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState(initialData);

    const handleSearch = (e) => setSearchTerm(e.target.value);

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const toggleStatus = (id) => {
        setData(data.map(item =>
            item.id === id ? { ...item, status: !item.status } : item
        ));
    };

    return (
        <>
            {/* <div className="containerr">
                <div className="roww">
                    <div className="coll-lg-2">
                        <h2>Item</h2>
                    </div>
                    <div className="col-left">
                        <div className="coll">
                            <select>
                                {
                                    category.map((item, index) => {
                                        return (
                                            <>
                                                <option value={item.name} key={index}>{item.name}</option>
                                            </>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="coll-btn">
                            <button className='itemBtn'>Add Item</button>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="category">
                <div className="row">
                    <div className="category-nav">
                        <div className="category-text">
                            <h4>Items</h4>
                        </div>

                        <div className="category-btn">
                            <div className="select-cat">
                                <select className='selectList'>
                                    {
                                        category.map((item, index) => {
                                            return (
                                                <>
                                                    <option value={item.name} key={index}>{item.name}</option>
                                                </>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <Link to="/additemparent">
                            <button>Add Item</button>
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
                        <input type="text" placeholder="Search..." value={searchTerm}
                            onChange={handleSearch} className='inputItem' />
                    </div>
                    </div>
                </div>
            </div>

            <div className="menu-table-container">
                <div className="controls">
                    <div className="dropdown-container">
                        <label>Show </label>
                        <select className='drop-select'>
                            <option value="all">All</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                        <label> Entries</label>
                    </div>
                 
                    {/* <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="search-input"
                    /> */}
                </div>

                <div className="table-wrapper">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Item Id</th>
                                <th>Item Name</th>
                                <th>Category</th>
                                <th>Sub Cat</th>
                                <th>MRP</th>
                                <th>Stock</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.category}</td>
                                    <td>{item.subCategory}</td>
                                    
                                    <td>{item.mrp}</td>
                                    <td>{item.stock}</td>
                                    <td>
                                        <button
                                            className={`status ${item.status ? 'active-btn' : 'inactive'}`}
                                            onClick={() => toggleStatus(item.id)}
                                        >
                                            {item.status ? 'Available' : 'Not Available'}
                                        </button>
                                    </td>
                                    <td>
                                        <button className="action-btn delete-btn"><AiFillDelete /></button>
                                        <button className="action-btn edit-btn"><FaEdit /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}
export { Items }