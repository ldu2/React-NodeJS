import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Address from './Address';
import ElfHeader from './ElfHeader';
import { BrowserRouter, Route } from 'react-router-dom';
import dataManager from '../tools/PouchDbManager';
import Home from './Home';
import InitializeDatabase from './InitializeDatabase';

const styles = () => ({
    container: {
        flexGrow: 1
    }
});

class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.db = dataManager.init();
    }
    render() {
        const { classes } = this.props;
        return (
            <BrowserRouter>
                <div className={classes.container}>
                    <ElfHeader />
                    <Route id="home" exact path="/" component={Home} />
                    <Route
                        id="address"
                        path="/address"
                        render={props => <Address {...props} dataManager={dataManager} />}
                    />
                    <Route
                        id="initDb"
                        path="/init-db"
                        render={props => (
                            <InitializeDatabase {...props} dataManager={dataManager} />
                        )}
                    />
                </div>
            </BrowserRouter>
        );
    }
}
App.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
