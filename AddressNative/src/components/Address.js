import React, { Component } from 'react';
import addresses from '../address-list';
import { Text, View } from 'react-native';
import AddressShow from './AddressShow';
import styles from './elf-styles';

class Address extends Component {
    constructor(props) {
        super(props);
        console.log('ADDRESS PROPS', typeof this.props);
        this.addressIndex = 0;
        const address = addresses[this.addressIndex];
        this.state = {
            address: address
        };
        this.quiet = true;
    }
    render() {
        if (!this.quiet) {
            console.log('ADDRESS RENDER');
        }
        return (
            <View style={styles.addressContainer}>
                <Text style={styles.welcome}>Welcome to Expo Calvert!</Text>

                <AddressShow
                    address={this.state.address}
                    onAddressChange={this.onAddressChange}
                />
            </View>
        );
    }

  onAddressChange = () => {
      this.addressIndex = 1;
      const address = addresses[this.addressIndex];
      this.setState({
          address: address
      });
  };
}

export default Address;
