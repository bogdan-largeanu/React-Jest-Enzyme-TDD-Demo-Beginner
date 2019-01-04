import React from 'react';
//import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Button from '../Button';


describe('Button', () => {
    let mountedButton;


    beforeEach(() => {
        mountedButton = shallow(<Button />);
    });
    it('renders without crashing', () => {

        let mountedButton = shallow(<Button />);
    });
    it('renders a button', ()=> {

        const button = mountedButton.find('button');
        expect(button.length).toBe(1);

    })
});

describe('When a location is passed to it', ()=>{

    let mountedButton;
    let props;

    beforeEach( ()=>{
        props = {
            location: undefined
        }

        mountedButton = shallow(<Button {...props} />);
    }); 

    it('displays the location', ()=> {
        const locName = mountedButton.find('.location-button');
        expect(locName.text()).toEqual('All Locations');
    })

    it('display Portland', ()=> {
        props.location = 'Portland';
        mountedButton = shallow(<Button {...props} />);
        const locName = mountedButton.find('.location-button');
        expect(locName.text()).toEqual('Portland');
    })
});