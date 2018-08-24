import React from 'react';
import ReactDOM from 'react-dom';
import Address from './components/Address';
import Adapter from 'enzyme-adapter-react-16';
import './index.css';
import { configure, shallow, mount } from 'enzyme';
import dataManager from '../assets/FakeDataManager';
import addresses from './address-list';

configure({ adapter: new Adapter() });

describe('Naive Address Edit Shallow Jest Suite', function() {
    let wrapper = null;

    const name = {
        _id: ''
    };

    beforeEach(() => {
        wrapper = shallow(
            <Address
                dataManager={dataManager}
                addressList={addresses}
                debugFlag={true}
            />
        );
    });

    const addressProp = wrapper =>
        wrapper
            .dive()
            .find('WithStyles(AddressShow)')
            .prop('name');

    const addressPropClick = wrapper => {
        wrapper = mount(
            <Address
                dataManager={dataManager}
                addressList={addresses}
                debugFlag={true}
            />
        );

        wrapper.find('button#nextButton').simulate('click');
        return wrapper;
    };

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Address dataManager={dataManager} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders and displays the default first name', () => {
        expect(addressProp(wrapper).firstName).toEqual('Patty');
    });
    it('renders and displays the default last name', () => {
        expect(addressProp(wrapper).lastName).toEqual('Murray');
    });
    it('renders and displays the default street address', () => {
        expect(addressProp(wrapper).street).toEqual(
            '154 Russell Senate Office Building'
        );
    });
    it('renders and displays the default city', () => {
        expect(addressProp(wrapper).city).toEqual('Washington DC');
    });
    it('renders and displays the default state name', () => {
        expect(addressProp(wrapper).state).toEqual('WA');
    });
    it('renders and displays the default zip', () => {
        expect(addressProp(wrapper).zip).toEqual(' 20510');
    });
    it('renders and displays the default phone', () => {
        expect(addressProp(wrapper).phone).toEqual('202-224-2621');
    });
    it('renders and displays the default website', () => {
        expect(addressProp(wrapper).website).toEqual(
            'https://www.murray.senate.gov/public'
        );
    });
    it('renders and displays the default email', () => {
        expect(addressProp(wrapper).email).toEqual('');
    });
    it('renders and displays the default contact', () => {
        expect(addressProp(wrapper).contact).toEqual(
            'http://www.murray.senate.gov/public/index.cfm/contactme'
        );
    });

    it('renders state of firstName after button click', () => {
        wrapper = addressPropClick(wrapper);
        expect(wrapper.find('AddressShow').prop('name').firstName).toEqual(
            'Robert'
        );
    });

    it('renders state of lastName after button click', () => {
        wrapper = addressPropClick(wrapper);
        expect(wrapper.find('AddressShow').prop('name').lastName).toEqual(
            'Aderholt'
        );
    });

    it('renders state of street address after button click', () => {
        wrapper = addressPropClick(wrapper);
        expect(wrapper.find('AddressShow').prop('name').street).toEqual(
            '235 Cannon House Office Building'
        );
    });

    it('renders state of city after button click', () => {
        wrapper = addressPropClick(wrapper);
        expect(wrapper.find('AddressShow').prop('name').city).toEqual(
            'Washington DC'
        );
    });

    it('renders state of stateName after button click', () => {
        wrapper = addressPropClick(wrapper);
        expect(wrapper.find('AddressShow').prop('name').state).toEqual('AL');
    });

    it('renders state of zip after button click', () => {
        wrapper = addressPropClick(wrapper);
        expect(wrapper.find('AddressShow').prop('name').zip).toEqual(' 20515-0104');
    });
    it('renders state of phone number after button click', () => {
        wrapper = addressPropClick(wrapper);
        expect(wrapper.find('AddressShow').prop('name').phone).toEqual(
            '202-225-4876'
        );
    });
    it('renders state of website after button click', () => {
        wrapper = addressPropClick(wrapper);
        expect(wrapper.find('AddressShow').prop('name').website).toEqual(
            'https://aderholt.house.gov'
        );
    });
    it('renders state of email after button click', () => {
        wrapper = addressPropClick(wrapper);
        expect(wrapper.find('AddressShow').prop('name').email).toEqual('');
    });
    it('renders state of contact after button click', () => {
        wrapper = addressPropClick(wrapper);
        expect(wrapper.find('AddressShow').prop('name').contact).toEqual('');
    });

    it('renders state of contact after button click', () => {
        wrapper = shallow(
            <Address
                dataManager={dataManager}
                addressList={addresses}
                debugFlag={true}
            />
        );
        wrapper
            .dive()
            .instance()
            .delete(name);
        wrapper
            .dive()
            .instance()
            .save(name);
        wrapper
            .dive()
            .instance()
            .setAddress(0);
        //wrapper.dive().instance().showAddress();
        wrapper
            .dive()
            .instance()
            .componentDidMount();
        wrapper
            .dive()
            .instance()
            .componentWillUnmount();
    //wrapper.dive().instance().watcher(name);
    });
});
