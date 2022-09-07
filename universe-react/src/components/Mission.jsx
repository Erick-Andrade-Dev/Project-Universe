import React from "react";

class SpaceMissions extends React.Component {
    render() {
         const { info: { name, year, country, destination }} = this.props
        return (
            <div className="div-flex">
                <p className="name-mission">{ name }</p>
                <div className="div-mission">
                    <p className="p-mission">{ year }</p>
                    <p className="p-mission">{ country }</p>
                    <p className="p-mission">{ destination }</p>
                </div>
            </div>
        )
    }
}

export default SpaceMissions