import React from "react";
import Missions from "../data/mission";
import SpaceMissions from "./Mission";

class MapMission extends React.Component {
    render() {
        return (
            <div className="div-missions">                
                {
                    // eslint-disable-next-line array-callback-return
                    Missions.map((mission, index) => {
                        return (<SpaceMissions 
                        key={index}
                        info={mission}
                        />)
                    })
                }
            </div>
        )
    }
}

export default MapMission