import React from 'react';
import { View } from 'react-native';
import GetFile from './src/components/GetFile';
import Address from './src/components/Address';
import ElfHeader from './src/components/ElfHeader';
import styles from './src/components/elf-styles';
import { NativeRouter, Route } from 'react-router-native';

export default class App extends React.Component {
    render() {
        return (
            <NativeRouter>
                <View style={styles.addressContainer}>
                    <ElfHeader />
                    <Route path="/get-file" component={GetFile} />
                    <Route exact path="/" component={Address} />
                </View>
            </NativeRouter>
        );
    }
}
