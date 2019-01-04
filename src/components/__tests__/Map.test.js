import React from 'react';
//import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Map from '../Map';
import defaultImg from '../../../public/images/default.png'

describe('Map', () => {
    let mountedMap;

    beforeEach(() => {
        mountedMap = shallow(<Map />);
    })

    it('renders without crashing', () => {

        let mountedMap = shallow(<Map />);
    });

    it('contains a image', ()=>{
        const img = mountedMap.find('img');
        expect(img.length).toBe(1)
    });

    it('displays the none map when no params are given', ()=>{
        const defaultMap = mountedMap.find('img [src="images/default.png"]');
      //  expect(defaultMap.length).toBe(1);
      expect(mountedMap.find('img').prop('src')).toEqual(defaultImg);
    } )
});
