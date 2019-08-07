import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import {Constants} from 'expo'

import contacts, {compareNames} from './contacts'

const Row = props => (
            <View>
              <Text>{props.name} </Text>
              <Text>{props.phone}</Text>
              <Text>--------------</Text>
            </View>
)

export default class App extends React.Component {
  state = {
    showContacts: false,
    contacts
  }

  toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
  }

  sort = () => {
    this.setState(prevState => (
      {contacts: [...prevState.contacts].sort(compareNames)}))
  }

  renderItem = obj => <Row {...(obj.item)} />
  //want this function out of render below bc otherwise would re do function each time. Worse performance 
  // item is a key is the data. Documentation requires this for FlatList
  // item: {name: string, phone: string}

  render() {
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <Button title='sort' onPress={this.sort} />
        {this.state.showContacts && (
        <FlatList 
          renderItem={this.renderItem}
          data={this.state.contacts}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
