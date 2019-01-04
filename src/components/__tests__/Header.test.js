import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header.js';
//import ReactDOM from 'react-dom';
import logoImagine from '../../../public/images/logo.png';
describe('Header', () => {

  let mountedHeader;
  beforeEach(() => {
    mountedHeader = shallow(<Header />);
  });

  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('renders a logo', () => {
    //const logoImg = mountedHeader.find("img [src='images/logo.png']");
    //expect(logoImg.length).toBe(1);
    expect(mountedHeader.find('img').prop("src")).toEqual(logoImagine);
  });
});
