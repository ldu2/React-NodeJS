import React from 'react';
import ReactDOM from 'react-dom';
import AddressEdit from './components/AddressEdit';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
configure({ adapter: new Adapter() });

describe('Naive Address AddressEdit Shallow Jest Suite', function() {
    const fakeEvent = {
        target: {
            value: ''
        }
    };

    const addChange = (a, b) => {
        console.log(typeof a);
        console.log(typeof b);
    };
    const address = {
        firstName: 'a',
        lastName: 'b'
    };

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <AddressEdit addressEdit={addChange} address={address} open={true} />,
            div
        );

        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders without crashing', () => {
        let wrapper = shallow(
            <AddressEdit addressEdit={addChange} address={address} open={true} />
        );
        wrapper.instance().userClosedDialogNormal();
        wrapper.instance().userCanceledDialog();
        wrapper.instance().addressChangedByUser('firstName', fakeEvent);
    });
});
