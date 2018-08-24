import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import styles from './elf-styles';

class GetFile extends Component {
    constructor() {
        super();
        this.state = {
            file: 'unknown'
        };
    }
    render() {
        return (
            <View style={styles.buttonView}>
                <Text>File: {this.state.file}</Text>
                <Button
                    style={styles.buttonView}
                    title="Get Data"
                    color="#841584"
                    onPress={this.getFileName}
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }

  getFileName = () => {
      console.log('getFile called.');
      this.setState({ file: 'url-file.js' });
  };
}

export default GetFile;
