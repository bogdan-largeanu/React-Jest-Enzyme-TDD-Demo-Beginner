import React, {Component} from 'react';
import defaultImg from '../images/default.png';
import './Map.css';

class Map extends Component {

    render() {
        let imagePath;
        if(this.props.imageName){
            imagePath = '../images/' + this.props.imageName;
        } else {
            imagePath = '../images/default.png';
        } 
    
        return (
        <div className="MapBox">
        <img src={imagePath} alt='No Store Selected' />);
        </div>
        );
    }
}

export default Map; 