import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
configure({ adapter: new Adapter() });

describe('Naive Address ElfHeader Shallow Jest Suite', function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders without crashing', () => {
        let wrapper = mount(<App />);
        wrapper
            .find('Route#address')
            .props()
            .render();
        wrapper
            .find('Route#initDb')
            .props()
            .render();
    });
});
