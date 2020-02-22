import React, {useState, useEffect} from 'react';
import {View, FlatList, Button} from 'react-native';
import api from '../../services/api';
import Item from '../../components/Item';
import styles from './styles';

export default function Home({navigation}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getHeros() {
      await api
        .get()
        .then(response => {
          const responseJson = response.data.data;
          setData(responseJson.results);
        })
        .catch(error => {
          console.log('Perdeu playboy');
        });
    }
    getHeros();
  }, []);

  return (
    <>
      <FlatList
        data={data}
        renderItem={Item}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.Container} />}
      />
      <Button
        title="To Description"
        onPress={() => navigation.navigate('Description')}
      />
    </>
  );
}
