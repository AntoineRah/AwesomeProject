import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 30,
    backgroundColor: 'white',
    padding: 5,
    gap: 50,
    borderWidth: 2,
    borderColor: '#e0f0ff',
  },
  imagestyle: {
    width: 100,
    height: 100,
    borderRadius: 30,
  },
  fontstyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  pricestyle: {
    fontSize: 14,
    color: 'gray',
  },
  textcontainer:{
    justifyContent:'center',
    alignSelf:'center',
  }
});
export {styles};
