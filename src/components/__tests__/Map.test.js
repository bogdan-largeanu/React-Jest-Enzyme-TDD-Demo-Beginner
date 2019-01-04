import React from 'react';
//import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Map from '../Map';
import defaultImg from '../../../public/images/default.png'

describe('Map', () => {
    let mountedMap;
    let props;
    beforeEach(() => {
        props = {
            location:undefined,
            imageName: 'testmap.png'
        }
        
        mountedMap = shallow(<Map {...props}/>);
    })

    it('renders without crashing', () => {

        let mountedMap = shallow(<Map />);
    });

    it('contains a image', ()=>{
        const img = mountedMap.find('img');
        expect(img.length).toBe(1)
    });

    it('displays the none map when no params are given', ()=>{
      let defaultMap = shallow (<Map />);
      expect(defaultMap.find('img').prop('src')).toEqual('../images/default.png');
    } )

    it('displays the map imagename passed to it', ()=>{

        expect(mountedMap.find('img').prop('src')).toEqual('../images/testmap.png');
    })
});
