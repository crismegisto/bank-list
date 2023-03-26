import React from 'react';
import { View, Text, Image } from 'react-native';
import { Bank } from 'interfaces/bank';
import notFound from 'assets/notFound.png';

import styles from './styles';

function BankCard({ bankName, description, age, url }: Bank) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image source={url ? { uri: url } : notFound} resizeMode="contain" style={styles.image} />

        <View style={styles.titleContainer}>
          <Text style={styles.title} testID="title">
            {bankName}
          </Text>
          <Text>{age} años</Text>
        </View>
      </View>

      <Text>{description}</Text>
    </View>
  );
}

export default BankCard;
