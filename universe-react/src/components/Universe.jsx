import React from "react";

class Universe extends React.Component {
    render() {
        const { result: { name, image }} = this.props
        return(            
            <div className='planets'>                 
                <h2 className="name-planet">{ name }</h2>
                <img className="image-planet" src={ image } alt="" />
            </div>                      
        )
    }
}

export default Universe
