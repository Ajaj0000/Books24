import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { CiLogout } from "react-icons/ci";

function SlideBar() {

    const [toggleSlide, setToggleSlide] = useState(false)

    return (
        <>


            <div>
                <header onClick={() => setToggleSlide(!toggleSlide)}>
                    <div className="toggle">
                        <i className="fas fa-bars"></i>
                    </div>
                    <h3>Dashboard</h3>
                    <Link>
                        <i className="fas fa-sign-out-alt"></i>
                    </Link>
                </header>
                <nav className={toggleSlide ? 'active' : ''}>
                    <ul>
                        <li>
                            <Link className="toggle">
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
                            <Link>
                                <span className="icon"><IoPerson /></span>
                                <span className="title">Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <span className="icon"><MdOutlineCategory /></span>
                                <span className="title">Category</span>
                            </Link>
                        </li>
                        {/* <li>
                        <Link>
                            <span className="icon"><i className="fas fa-info"></i></span>
                            <span className="title"></span>
                        </Link>
                    </li> */}
                        <li>
                            <Link>
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