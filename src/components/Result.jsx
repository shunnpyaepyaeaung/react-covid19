import React from 'react';
import CountUp from 'react-countup'

function Result({data}) {
    return (
        <div className="ui equal width center aligned padded grid result">
            {
                data.map((e,i)=>(
                    <>
                    <div className="row country">
                    <div className="ui statistic">
                    <div className="label">
                            Country
                        </div>
                        <div className="text value" style={{color:'#7579e7'}}>
                            {e.country}
                        </div>
                    </div>
                </div>
    
                <div className="row">
                    <div className="ui statistic column circle">
                        <div className="value" style={{color:'#ff847c'}} >
                            <p>
                                <CountUp
                                    end={e.population}
                                    duration={1}
                                    separator=","
                                />
                                </p>
                        </div>
                        <div className="label">
                            Population
                        </div>
                    </div>
                    <div className="ui statistic column circle">
                        <div className="value" style={{color:'violet'}}>
                            <p>
                                <CountUp
                                    end={e.cases.new}
                                    duration={1}
                                    separator=","
                                />
                                </p>
                        </div>
                        <div className="label">
                            New
                        </div>
                    </div>
                </div>
    
    
                <div className="row">
                    <div className="ui statistic column circle">
                        <div className="value" style={{color:'#2185D0'}}>
                           <p>
                               <CountUp
                                end={e.cases.active}
                                duration={1}
                                separator=","
                               />
                               </p>
                        </div>
                        <div className="label">
                            Active
                        </div>
                    </div>
                    <div className="ui statistic column circle">
                        <div className="value" style={{color:'#00B5AD'}}>
                            <p>
                                <CountUp
                                    end={e.cases.recovered}
                                    duration={1}
                                    separator=","
                                />
                                </p>
                        </div>
                        <div className="label">
                            Recovered
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="ui statistic column circle">
                        <div className="value" style={{color:"red"}}>
                           <p>
                               <CountUp
                                    end={e.deaths.new}
                                    duration={1}
                                    separator=","
                                /></p>
                        </div>
                        <div className="label">
                            New Deaths
                        </div>
                    </div>
                    <div className="ui statistic column circle">
                        <div className="value" style={{color:"#0f3057"}}>
                            <p>
                                <CountUp
                                    end={e.deaths.total}
                                    duration={1}
                                    separator=","
                                />
                            </p>
                        </div>
                        <div className="label">
                            Total Deaths
                        </div>
                    </div>
                </div>
    
                <div className="row">
                    <div className="ui statistic column circle">
                        <div className="value" style={{color:"#835858"}}>
                           <p>
                               <CountUp
                                    end={e.cases.critical}
                                    duration={1}
                                    separator=","
                                /></p>
                        </div>
                        <div className="label">
                            Critical
                        </div>
                    </div>
                    <div className="ui statistic column circle">
                        <div className="value" style={{color:'#FBBD08'}}>
                            <p>
                                <CountUp
                                    end={e.tests.total}
                                    duration={1}
                                    separator=","
                                />
                            </p>
                        </div>
                        <div className="label">
                            Tests
                        </div>
                    </div>
                </div>
                </>
                ))
            }
           


        </div>

    )
}

export default Result
