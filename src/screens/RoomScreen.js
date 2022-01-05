import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const RoomScreen = props => {
  const {navigation} = props;
  const [roomId, setRoomId] = React.useState('');
  const navigateToCallScreen = () => {
    navigation.navigate('Call', {roomId});
  };

  const navigateToJoinScreen = () => {
    navigation.navigate('Join', {roomId});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select a Room</Text>
      <TextInput
        style={styles.input}
        value={roomId}
        onChangeText={text => setRoomId(text)}
      />
      <View style={styles.buttonContainer}>
        <Button title="Join Screen" onPress={navigateToJoinScreen} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Call Screen" onPress={navigateToCallScreen} />
      </View>
    </View>
  );
};

export default RoomScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
  buttonContainer: {
    margin: 15,
  },
});
