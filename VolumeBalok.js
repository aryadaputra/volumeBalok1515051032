import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class VolumeBalok extends Component {
  constructor(props) {
    super(props)
    this.state = {
      panjang: 0,
      lebar: 0,
      tinggi: 0,
      volume: 0
    };
  }


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#EEEEEE' }}>

        <View style={{ backgroundColor: '#9E9E9E' }}>
           <Text style={{ padding: 10, fontSize: 20, color: 'white', textAlign: 'center' }}>
            Volume Balok
          </Text>
         </View>

        <View style={{ margin: 20, padding: 10, backgroundColor: '#FAFAFA' }}>
            <TextInput
              style={{ height: 40 }}
              placeholder="Masukkan Panjang Balok"
              onChangeText={(panjang) => this.setState({ panjang })}
              keyboardType='numeric'
            />

                <TextInput
                  style={{ height: 40 }}
                  placeholder="Masukkan Lebar Balok"
                  onChangeText={(lebar) => this.setState({ lebar })}
                  keyboardType='numeric'
                />

                <TextInput
                  style={{ height: 40 }}
                  placeholder="Masukkan Tinggi Balok"
                  onChangeText={(tinggi) => this.setState({ tinggi })}
                  keyboardType='numeric'
                />

            <Button
              onPress={() => this.setState({
                volume: (this.state.panjang * this.state.lebar * this.state.tinggi)
              })}
              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
              color='#616161'
            />
       </View>

        <View style={{ margin: 20, backgroundColor: '#BDBDBD' }}>
          <Text style={{ padding: 10, fontSize: 20 }} >
              Volume Balok = { this.state.volume}
          </Text>
         </View>
      </View>
    );
  }
}
AppRegistry.registerComponent('AppForm2', () => App);
