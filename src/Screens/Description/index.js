import React from 'react';
import {ScrollView, Text, Image} from 'react-native';

import styles from './styles';

const Description = ({route}) => {
  const {hero} = route.params;

  function hasDescription() {
    return hero.description ? true : false;
  }

  function renderDescription() {
    return <Text style={styles.heroDescription}>{hero.description}</Text>;
  }

  function renderMessageError() {
    return (
      <Text style={styles.heroDescription}>
        Sorry ! this character has no description
      </Text>
    );
  }

  return (
    <ScrollView>
      <Image
        source={{uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}`}}
        style={styles.heroImage}
      />
      <Text style={styles.heroName}>{hero.name}</Text>
      {hasDescription() ? renderDescription() : renderMessageError()}
    </ScrollView>
  );
};

export default Description;
