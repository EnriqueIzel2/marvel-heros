import {StyleSheet, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  heroName: {
    padding: 10,
    fontSize: 20,
  },
  heroDescription: {
    padding: 10,
  },
  heroImage: {width: SCREEN_WIDTH, height: SCREEN_WIDTH},
});

export default styles;
