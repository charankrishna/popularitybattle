import React from "react";

const Menu =({queryChange})=>(

    <div className="ui secondary  menu">
        <a className="active item">
            Home
        </a>
        <div className="right menu">
            <div className="item">
                <div className="ui icon input">
                    <input type="text" placeholder="Search..." onChange={()=> queryChange}/>
                    <i className="search link icon"></i>
                </div>
            </div>
        </div>
    </div>
);
export default Menu;