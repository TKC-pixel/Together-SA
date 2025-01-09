import React from 'react';
import { View, StyleSheet } from 'react-native';
import Pdf from 'react-native-pdf';

const BudgetScreen = () => {
    
  return (
    
    <View style={styles.container}>
      <Pdf
        source={{uri:'bundle-assets://budgets2024.pdf', cache: true}}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`current page: ${page}`);
        }}
        onError={(error) => {
          console.log(error);
        }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default BudgetScreen;
