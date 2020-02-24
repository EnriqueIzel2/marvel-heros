import React from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

const Item = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.Card}
      onPress={() => navigation.navigate('Description', {hero: item})}>
      <Image
        style={styles.Avatar}
        source={{uri: `${item.thumbnail.path}.${item.thumbnail.extension}`}}
      />
      <Text style={styles.Name}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default Item;
