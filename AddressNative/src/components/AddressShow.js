import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './elf-styles';
import { Text, View, Button } from 'react-native';

class AddressShow extends Component {
  static propTypes = {
      address: PropTypes.object.isRequired,
      onAddressChange: PropTypes.func.isRequired
  };

  constructor(props) {
      super(props);
      this.debug = false;
      this.log('SHOW ADDRESS CONSTRUCTOR', this.props.address);
  }
  log(message, message2 = '', message3 = '') {
      if (!this.debug) {
          const label = this.constructor.name + ': ';
          console.log(label, message, message2, message3);
      }
  }
  render() {
      this.log('SHOW ADDRESS RENDER');
      return (
          <View style={styles.buttonView}>
              <Text>firstName: {this.props.address.firstName}</Text>
              <Text>lastName: {this.props.address.lastName}</Text>
              <Text>address: {this.props.address.address}</Text>
              <Text>city: {this.props.address.city}</Text>
              <Text>state: {this.props.address.state}</Text>
              <Text>zip: {this.props.address.zip}</Text>
              <Text>phone: {this.props.address.phone}</Text>
              <Text>fax: {this.props.address.fax}</Text>
              <Text>tollfree: {this.props.address.tollfree}</Text>

              <Button
                  title="Set Address"
                  onPress={this.props.onAddressChange}
                  accessibilityLabel="Learn more about this purple button"
              />
          </View>
      );
  }
}

export default AddressShow;
