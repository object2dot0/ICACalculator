'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component
} = React;


class Calculator extends Component {

  constructor(props) {
  super(props);
  this.state = {
    carPrice: '',
    depositAmount: ''
  };
}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar}>
          <Text ></Text>
        </View>
        <View style={styles.labelBackground}>
                <Text style={styles.label}>
                  Car Price
                </Text>
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.containerInputLabel}>
            RM </Text>
            <View style={styles.containerTextInput}>
              <TextInput style={styles.textInput}
                  onChangeText={(text) => this.setState({carPrice})}
                  value={this.state.carPrice}
                  placeholder='Please enter car price' />
              </View>
        </View>


        <View style={styles.labelBackground}>
          <Text style={styles.label}>
            Deposit amount
          </Text>
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.containerInputLabel}>
            RM </Text>
            <View style={styles.containerTextInput}>
              <TextInput style={styles.textInput}
                  onChangeText={(text) => this.setState({depositAmount})}
                  value={this.state.depositAmount}
                  placeholder='Please enter deposit amount' />
            </View>
        </View>


</View>
  );
  }
}

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
var containerInputLabelWidth = 25;
var containerInputLabelMarginLeft = 15;
var InputTextMarginRight = 15;

var styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#5AC8FA'
  },
  label: {
    fontSize: 12,
    textAlign: 'left',
    color: '#8c8c8c',
    marginLeft: 15,
  },
  labelBackground: {
    backgroundColor:'#efefef',
    marginRight: 0,
    marginLeft: 0,
    height:30,
    justifyContent:'center',
  },
  containerInput: {
    flexDirection:'row',
    backgroundColor: '#ffffff',
    height:50,
    justifyContent:'flex-start',
    alignItems:'center'
  },
  containerInputLabel: {
    fontSize: 14,
    textAlign: 'left',
    color: '#000000',
    marginLeft: containerInputLabelMarginLeft,
    width:containerInputLabelWidth
  },
  textInput: {
  height: 33,
  fontSize: 14,
  color: '#48BBEC',
  width: windowSize.width - InputTextMarginRight - containerInputLabelMarginLeft - containerInputLabelWidth,

},
statusBar:{
},
containerTextInput:{
}
});

module.exports = Calculator;
