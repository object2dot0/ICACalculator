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
  Component,
  Slider
} = React;


class Calculator extends Component {

  constructor(props) {
  super(props);
  this.state = {
    carPrice: '',
    depositAmount: '',
    repaymentPeriod: 7,
    repaymentPeriodMinYear: 1,
    repaymentPeriodMaxYear: 9,
    interestRate: 3.0,
    interestRateMin : 1,
    interestRateMax : 5,
    monthlyInstallment:0,
        
  };
}

calculateMonthlyInstallment() {
  if (this.state.carPrice>0 && this.state.depositAmount>0) {
  var rapaymentPeriodInMonths = this.state.repaymentPeriod *12.0
  var loadAmount = this.state.carPrice - this.state.depositAmount
  var interestRate=this.state.interestRate/100.0;
  var interestAmount=interestRate*loadAmount
  var interestAmountMonthly=interestAmount/12.0
  var interestAmountTotal=interestAmountMonthly * rapaymentPeriodInMonths
  var loadAmountPlusInterest = loadAmount + interestAmountTotal
  var monthlyInstallment = loadAmountPlusInterest / rapaymentPeriodInMonths
  if (monthlyInstallment > 0) {
    this.state.monthlyInstallment = monthlyInstallment
  }else{
    this.state.monthlyInstallment = 0
  }
  }else{
    this.state.monthlyInstallment = 0
  }
  
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
                  onChangeText={(text) => this.setState({carPrice:text})}
                  value={this.state.carPrice}
                  placeholder='Please enter car price' 
                  keyboardType= 'numeric'/>
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
                  onChangeText={(text) => this.setState({depositAmount:text})}
                  value={this.state.depositAmount}
                  placeholder='Please enter deposit amount' 
                  keyboardType= 'numeric'/>
            </View>
        </View>



        <View style={styles.labelBackground}>
          <Text style={styles.label}>
            Repayment period <Text style={styles.label}> {this.state.repaymentPeriod  +' years(s)'} </Text>
          </Text>
        </View>
        <View style={styles.containerSlider}>
            <Slider style={styles.slider} 
            onValueChange = {(value) => this.setState({repaymentPeriod: value})}
            minimumValue={this.state.repaymentPeriodMinYear}
            maximumValue={this.state.repaymentPeriodMaxYear}
            step={1}
            value={this.state.repaymentPeriod} 
            onSlidingComplete={this.calculateMonthlyInstallment()}/>

            <View style= {styles.sliderLabelsContainer}>
                <Text style= {styles.sliderLabelLeft}>
                {this.state.repaymentPeriodMinYear +'years(s)'}
                </Text>
                <Text style= {styles.sliderLabelRight}>
                {this.state.repaymentPeriodMaxYear +'years(s)'}
                </Text>
            </View>
        </View>


        <View style={styles.labelBackground}>
          <Text style={styles.label}>
            Interest rate <Text style={styles.label}> {this.state.interestRate  +'%'} </Text>
          </Text>
        </View>
        <View style={styles.containerSlider}>
            <Slider style={styles.slider} 
            onValueChange = {(value) => this.setState({interestRate: value})}
            minimumValue={this.state.interestRateMin}
            maximumValue={this.state.interestRateMax}
            step={0.1}
            value={this.state.interestRate} />

            <View style= {styles.sliderLabelsContainer}>
                <Text style= {styles.sliderLabelLeft}>
                {this.state.interestRateMin +'%'}
                </Text>
                <Text style= {styles.sliderLabelRight}>
                {this.state.interestRateMax +'%'}
                </Text>
            </View>
        </View>


        <View style={styles.labelBackground}>
          <Text style={styles.label}>
            Monthly installment
          </Text>
        </View>
        <View style={styles.monthlyInstallmentContainer}>
            <Text style={styles.monthlyInstallment}>
            {'RM '+this.state.monthlyInstallment.toFixed(0) } 
          </Text >
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
    backgroundColor: '#efefef'
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
containerSlider: {
    backgroundColor: '#ffffff',
    height:80,
    justifyContent:'center',
    alignItems:'center'
  },
slider: {
  height: 40,
  width: windowSize.width - InputTextMarginRight - containerInputLabelMarginLeft - containerInputLabelWidth,
},
sliderLabelsContainer: {
  flexDirection:'row',
  width: windowSize.width - InputTextMarginRight - containerInputLabelMarginLeft - containerInputLabelWidth,
  justifyContent:'space-between'
},
monthlyInstallmentContainer:{
  justifyContent:'center',
  alignItems: 'flex-start',
  backgroundColor: '#ffffff',
  height:80,
},
monthlyInstallment:{
  fontSize: 25,
  color: '#000000',
  marginLeft: 15,
},
sliderLabelLeft: {
},
sliderLabelRight: {
},
statusBar:{
},
containerTextInput:{
}
});

module.exports = Calculator;
