import React from "react";
import { Link } from "react-router-dom";
import { FaFilter } from "react-icons/fa";

function Order() {

    const orders = [
        { id: '#14462024', date: 'Friday at 03:36 pm', customer: 'Dipak sharma', channel: 'Online Store', total: '₹430.00', paymentStatus: 'Paid', fulfillmentStatus: 'Fulfilled', items: '1 item', deliveryStatus: 'Tracking added', deliveryMethod: 'Standard' },
        { id: '#14452024', date: 'Thursday at 06:11 pm', customer: 'Manju Pareek', channel: 'Online Store', total: '₹430.00', paymentStatus: 'Paid', fulfillmentStatus: 'Fulfilled', items: '1 item', deliveryStatus: 'Tracking added', deliveryMethod: 'Standard' },
        { id: '#14422024', date: 'Sep 16 at 8:16 pm', customer: 'Daksh Sharma', channel: 'Online Store', total: '₹310.00', paymentStatus: 'Paid', fulfillmentStatus: 'Fulfilled', items: '1 item', deliveryStatus: 'Tracking added', deliveryMethod: 'Standard' },
        { id: '#14462024', date: 'Friday at 03:36 pm', customer: 'Dipak sharma', channel: 'Online Store', total: '₹430.00', paymentStatus: 'Paid', fulfillmentStatus: 'Fulfilled', items: '1 item', deliveryStatus: 'Tracking added', deliveryMethod: 'Standard' },
        { id: '#14452024', date: 'Thursday at 06:11 pm', customer: 'Manju Pareek', channel: 'Online Store', total: '₹430.00', paymentStatus: 'Paid', fulfillmentStatus: 'Fulfilled', items: '1 item', deliveryStatus: 'Tracking added', deliveryMethod: 'Standard' },
        { id: '#14422024', date: 'Sep 16 at 8:16 pm', customer: 'Daksh Sharma', channel: 'Online Store', total: '₹310.00', paymentStatus: 'Paid', fulfillmentStatus: 'Fulfilled', items: '1 item', deliveryStatus: 'Tracking added', deliveryMethod: 'Standard' },
        { id: '#14462024', date: 'Friday at 03:36 pm', customer: 'Dipak sharma', channel: 'Online Store', total: '₹430.00', paymentStatus: 'Paid', fulfillmentStatus: 'Fulfilled', items: '1 item', deliveryStatus: 'Tracking added', deliveryMethod: 'Standard' },
        { id: '#14452024', date: 'Thursday at 06:11 pm', customer: 'Manju Pareek', channel: 'Online Store', total: '₹430.00', paymentStatus: 'Paid', fulfillmentStatus: 'Fulfilled', items: '1 item', deliveryStatus: 'Tracking added', deliveryMethod: 'Standard' },
        { id: '#14422024', date: 'Sep 16 at 8:16 pm', customer: 'Daksh Sharma', channel: 'Online Store', total: '₹310.00', paymentStatus: 'Paid', fulfillmentStatus: 'Fulfilled', items: '1 item', deliveryStatus: 'Tracking added', deliveryMethod: 'Standard' },
        { id: '#14462024', date: 'Friday at 03:36 pm', customer: 'Dipak sharma', channel: 'Online Store', total: '₹430.00', paymentStatus: 'Paid', fulfillmentStatus: 'Fulfilled', items: '1 item', deliveryStatus: 'Tracking added', deliveryMethod: 'Standard' },
        { id: '#14452024', date: 'Thursday at 06:11 pm', customer: 'Manju Pareek', channel: 'Online Store', total: '₹430.00', paymentStatus: 'Paid', fulfillmentStatus: 'Fulfilled', items: '1 item', deliveryStatus: 'Tracking added', deliveryMethod: 'Standard' },
        { id: '#14422024', date: 'Sep 16 at 8:16 pm', customer: 'Daksh Sharma', channel: 'Online Store', total: '₹310.00', paymentStatus: 'Paid', fulfillmentStatus: 'Fulfilled', items: '1 item', deliveryStatus: 'Tracking added', deliveryMethod: 'Standard' },
        // Add more orders as needed
    ];
    return (
        <>
            <div className="order">
                <div className="row">
                    <div className="category-nav">
                        <div className="category-text">
                            <h4>Order List</h4>
                        </div>
                        <div className="category-btn">
                            <Link>
                                <button>Create Order</button>
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
                                <button>Unpaid</button>
                            </div>
                            <div className="btn-1">
                                <button>Unfulfilled</button>
                            </div>
                            <div className="btn-1">
                                <button><FaFilter /></button>
                            </div>
                            <div className="btn-1">
                                <button>+</button>
                            </div>
                        </div>
                        <div className="search">
                            <h4>Search:</h4>
                            <input type="text" placeholder="Search all Category" className="input" />
                        </div>
                    </div>
                    <div className="order-list-container">
                        <div className="order-list-header">
                            <div>Order</div>
                            <div>Date</div>
                            <div>Customer</div>
                            <div>Channel</div>
                            <div>Total</div>
                            <div>Payment Status</div>
                            <div>Fulfillment Status</div>
                            <div>Items</div>
                            <div>Delivery Status</div>
                            <div>Delivery Method</div>
                        </div>
                        {orders.map((order, index) => (
                            <div key={index} className="order-list-row">
                                <div>{order.id}</div>
                                <div>{order.date}</div>
                                <div>{order.customer}</div>
                                <div>{order.channel}</div>
                                <div>{order.total}</div>
                                <div>
                                    <span className={`status ${order.paymentStatus === 'Paid' ? 'paid' : 'unpaid'}`}>
                                        {order.paymentStatus}
                                    </span>
                                </div>
                                <div>
                                    <span className={`status ${order.fulfillmentStatus === 'Fulfilled' ? 'fulfilled' : 'unfulfilled'}`}>
                                        {order.fulfillmentStatus}
                                    </span>
                                </div>
                                <div>{order.items}</div>
                                <div>{order.deliveryStatus}</div>
                                <div>{order.deliveryMethod}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export { Order }