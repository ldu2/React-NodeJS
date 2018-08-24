import React from 'react';
import ReactDOM from 'react-dom';
import AddressEditFields from './components/AddressEditFields';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
configure({ adapter: new Adapter() });

describe('Naive Address AddressEditFields Shallow Jest Suite', function() {
    const addChange = (a, b) => {
        console.log(typeof a);
        console.log(typeof b);
    };
    const address = {
        firstName: 'a',
        lastName: 'b'
    };
    const name = {
        firstName: 'a',
        lastName: 'b'
    };
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <AddressEditFields
                addressChangedByUser={addChange}
                address={address}
                name={name}
            />,
            div
        );

        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders without crashing', () => {
        let wrapper = mount(
            <AddressEditFields
                addressChangedByUser={addChange}
                address={address}
                name={name}
            />
        );

        wrapper
            .find('TextField#firstName')
            .props()
            .onChange();
        wrapper
            .find('TextField#lastName')
            .props()
            .onChange();
    });
});
