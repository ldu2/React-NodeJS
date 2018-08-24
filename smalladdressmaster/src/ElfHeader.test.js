import React from 'react';
import ReactDOM from 'react-dom';
import ElfHeader from './components/ElfHeader';
import Adapter from 'enzyme-adapter-react-16';
import './index.css';
import { configure, shallow } from 'enzyme';

configure({ adapter: new Adapter() });

describe('Naive Address ElfHeader Shallow Jest Suite', function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ElfHeader />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders test the toggle func', () => {
        let wrapper = shallow(<ElfHeader />);
        wrapper
            .dive()
            .instance()
            .handleToggle();
        wrapper.dive().update();
        expect(wrapper.dive().instance().state.open).toEqual(false);
    });
});
