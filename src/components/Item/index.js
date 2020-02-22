import React from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';

import styles from './styles';

const Item = ({item, navigation}) => {
  const _onItemPress = hero => {
    navigation.navigate('Description', {hero: hero});
  };

  return (
    <TouchableOpacity
      style={styles.Card}
      onPress={() => navigation.navigate('Description')}>
      <Image
        style={styles.Avatar}
        source={{uri: `${item.thumbnail.path}.${item.thumbnail.extension}`}}
      />
      <Text style={styles.Name}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default Item;
