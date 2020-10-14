import React from 'react'

function SearchInput({ search, setSearch, callApi, country,searchResult, setSearchResult}) {
    return (
        <div className="searchinputcard">

            <div className="ui input">
                <input
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value)
                    }}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            if (search) {
                                callApi()
                            }
                        }
                    }}
                    type="text" id="inputtext" placeholder="Search by country name..." />
            </div>

            {   
                searchResult.length > 0 ? 
                searchResult.map((e)=>{ 
                        return <div className="ui card suggestcard" style={{margin:"0 auto"}}>
                        <div className="content">
                            <div className="description">
                                <p className="suggest" onClick={(ele)=>{
                                    setSearch(e)
                                    callApi(e)
                                    setSearchResult([])
                                }}>{e}</p>
                            </div>
                        </div>
                    </div>
                    
                    
                }) : ""
            }

          

        </div>

    )
}

export default SearchInput
