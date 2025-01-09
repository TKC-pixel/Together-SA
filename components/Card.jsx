import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { useState, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Card = (props) => {
  const { title } = props;


  return (
    <View style={styles.container}>
      {title ? (
        <Ionicons style={styles.title} name="person" size={140} />
      ) : (
        <Ionicons style={styles.title} name="person" size={140} />
      )}
      <Text style={styles.name}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    width: 300,
    height: 260,
    backgroundColor: '#B2B2B2',
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.3,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 30,
  },
  name: {
    fontSize: 20,
    color: 'grey',
    textAlign: 'center',
    top: 30,
  },
});

export default Card;
