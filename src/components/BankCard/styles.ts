import { StyleSheet } from 'react-native';

const DEFAULT_SPACE = 10;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: DEFAULT_SPACE,
    padding: DEFAULT_SPACE,
    borderRadius: 6
  },
  subContainer: {
    flexDirection: 'row',
    margin: 4
  },
  titleContainer: {
    marginLeft: 18,
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  },
  image: {
    width: 120,
    height: 80
  }
});

export default styles;
