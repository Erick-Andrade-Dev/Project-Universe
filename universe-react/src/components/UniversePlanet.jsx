import React, { Component } from "react";
import Universe from "./Universe";
import Planets from "../data/planet";

class UniverseMap extends Component {
    render() {
        return (
            <div className="div-planet">                
                {
                    Planets.map((planet, index) => {
                        return (<Universe 
                        key={index}
                        result={planet}
                        />)
                    })
                }
            </div>
        )
    }
}

export default UniverseMap