import React, {Component} from 'react';
import defaultImg from '../images/default.png';
import './Map.css';

class Map extends Component {

    render() {
        return (
        <div className="MapBox">
        <img src={defaultImg} alt='No Store Selected' />);
        </div>
        );
    }
}

export default Map; 