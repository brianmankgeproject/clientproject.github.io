import React from "react";
 import "./Featured.scss"

const Featured = () => {
    return (
        <div className="featured">
            <div className="container">
                <div className="left">
                    <h1>Find the perfect <i>delivery </i>services for your buisness or your homestead</h1>
                    <div className="search">
                        <div className="searchInput">
                            <img src="./img/search.png" alt="" />
                            <input type="text" placeholder='try "food delivery"' />
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="popular">
                        <span>Popular:</span>
                        <button>Special item delivery</button>
                        <button>Beverage Delivery</button>
                        <button>Bakery Services</button>
                        <button>Courier Services</button>
                    </div>
                </div>
                <div className="right">
                    <img src="./img/man.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Featured 