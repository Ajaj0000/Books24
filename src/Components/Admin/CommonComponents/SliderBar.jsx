import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

function SlideBar() {

    const [active, setActive] = useState(true)

    return (
        <>
            <div className={active ? "active main" : "main"}>
                <nav className={active ? "active" : ""}>
                    <ul>
                        <li>
                            <Link className="toggle" onClick={() => setActive(!active)}>
                                <span className="icon"><IoMdMenu /></span>
                                <span className="title">Menu</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/dash'>
                                <span className="icon"><MdDashboard /></span>
                                <span className="title">Deshboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/profile'>
                                <span className="icon"><IoPerson /></span>
                                <span className="title">Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/order'>
                                <span className="icon"><CiShoppingCart /></span>
                                <span className="title">Orders</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/category'>
                                <span className="icon"><MdOutlineCategory /></span>
                                <span className="title">Category</span>
                            </Link>
                        </li>
                        
                        <li>
                            <Link to='/item'>
                                <span className="icon"><MdOutlineProductionQuantityLimits /></span>
                                <span className="title">Items</span>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <span className="icon"><CiLogout /></span>
                                <span className="title">Sign Out</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>


        </>
    )
}
export { SlideBar }