import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  inputHalf: {
    width: 125,
    height: 44,
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  buttonContainer: {
    padding: 5,
  },
  logoImage: {
    width: 300,
    height: 100,
    resizeMode: 'contain'
  },
  logoText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5
  },
  listTitle: {
    backgroundColor: 'transparent',
    position: 'absolute',
    marginTop: 5,
    marginLeft: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
  },
  resultList: {
    marginTop: 50
  },
  resultImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  },
  result: {
    marginTop: 5,
    marginBottom: 5,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: '#e0e0e0',
    borderStyle: 'solid',
  },
  resultIndex: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  textFieldIdentifier: {
    fontWeight: 'bold'
  },
  twoFieldOneRow: {
    flexDirection:'row',
    flexWrap: 'wrap'
  },
  topTabButtonText: {
    fontWeight: 'bold'
  },

});
