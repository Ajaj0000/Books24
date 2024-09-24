import React from "react";

function BarChart() {

    const bar = [
        {
            id: 1,
            value: 150,
        },
        {
            id: 2,
            value: 240,
        },
        {
            id: 3,
            value: 1800,
        },
        {
            id: 4,
            value: 2500,
        },
        {
            id: 5,
            value: 1800,
        },
        {
            id: 6,
            value: 1240,
        },
        {
            id: 7,
            value: 2430,
        },
        {
            id: 8,
            value: 1740,
        },
        {
            id: 9,
            value: 1480,
        },
        {
            id: 10,
            value: 1640,
        },
        {
            id: 11,
            value: 2000,
        },
        {
            id: 12,
            value: 2304,
        }
    ]

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    const maxValue = Math.max(...bar.map((val) => val.value))
    console.log(maxValue, "maxvalue");


    return (
        <>
            <div className="deshbord">
                <div className="row">
                    <div className="deshbord-text">
                        <div className="text-a">
                            <h1>Sales Overview</h1>
                        </div>
                        <div className="text-b">
                            <p>Welcome to Books24 Dashboard Template</p>
                        </div>
                        <hr />
                    </div>
                    <div className="barChart-Container">
                        <div className="Inner-container">
                            <div className="BarChart">
                                {
                                    bar.map((value) => {
                                        return (
                                            <>
                                                <div className="Chart" style={{ height: `${(value.value / maxValue) * 100}%`, width: "50px" }}>
                                                    <span>{value.value}</span>
                                                </div>

                                            </>
                                        )
                                    })
                                }
                            </div>
                            <div className="month-container">
                                {
                                    months.map((month) => {
                                        return (
                                            <div className="month">
                                                <span>{month}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export { BarChart }