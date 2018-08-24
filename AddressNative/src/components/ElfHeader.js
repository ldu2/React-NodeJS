import React, { Component } from 'react';
import { Link } from 'react-router-native';
import styles from './elf-styles';
import { Text, View } from 'react-native';

class ElfHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
    render() {
        return (
            <View style={styles.nav}>
                <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
                    <Text>Address</Text>
                </Link>
                <Link to="/get-file" underlayColor="#f0f4f7" style={styles.navItem}>
                    <Text>Get File</Text>
                </Link>
            </View>
        );
    }
}

export default ElfHeader;
