import React from 'react'

function Sidebar({country, setSearch, callApi}) {
    return (
        <div>
            <input type="checkbox" id="check" />
            <label htmlFor="check">
                <i className="fas fa-bars" id="btn" />
                <i className="fas fa-times" id="cancel" />
            </label>
            <div className="sidebar">
                <header>Covid19</header>
                <ul>
                    {
                        country.map((e)=>(
                            <li onClick={(event)=>{
                                callApi(e)
                             }}><a href="#">
                                    <i className="fas fa-flag" id="sidebarcountry"/>
                                    <span id="sidebarfont">{e}</span>
                                </a></li>
                        ))
                    }
                   
                   
                </ul>
            </div>
        </div>

    )
}

export default Sidebar
