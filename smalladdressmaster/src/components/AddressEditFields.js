import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

class AddressEditFields extends Component {
    render() {
        console.log('props name', typeof this.props.name);
        return (
            <div>
                <TextField
                    autoFocus
                    margin="dense"
                    id="firstName"
                    label="First Name"
                    type="string"
                    value={this.props.address.firstName}
                    onChange={e => this.props.addressChangedByUser('firstName', e)}
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="lastName"
                    label="Last Name"
                    type="string"
                    value={this.props.address.lastName}
                    onChange={e => this.props.addressChangedByUser('lastName', e)}
                    fullWidth
                />
            </div>
        );
    }
}

AddressEditFields.propTypes = {
    addressChangedByUser: PropTypes.func,
    address: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string
    }),
    name: PropTypes.object
};

export default AddressEditFields;
