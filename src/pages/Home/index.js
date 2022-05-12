import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { Button } from '../components'
import { Frame, HomeIcon, Pic } from '../assets/icon'
import { Gap } from '../components'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <View>
        <Text style={styles.title}>Money Tracker</Text>
        <Text style={styles.alt}>Track Your Money</Text>
        </View>
        <View style={styles.pictWrapper}>
          <Pic/>
        </View>
      </View>
      <Gap height={20} />
      <View style={styles.balanceWrapper}>
        <Text style={styles.balance}>Your Balance</Text>
        <View style={styles.bal}>
        <Text style={styles.totalBalance}>Rp.10.000.000</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.cash}>
          <View><Text style={styles.handText}>Cash On Hand</Text><Text style={styles.bankText}>Cash On Bank</Text></View>
          <View><Text style={styles.hand}>Rp.4.000.000</Text><Text style={styles.bank}>Rp.6.000.000</Text></View>
        </View>
      </View>
      <Gap height={20} />
      <View style={styles.transactionWrapper}>
        <Text style={styles.transaction}>Add Transaction</Text>
        <View style={styles.btnHand}>
          <Button title="Cash On Hand" onPress={() => navigation.navigate('CashOnHand')}/>
        </View>
        <View>
          <Button title="Cash On Bank" onPress={() => navigation.navigate('CashOnBank')}/>
        </View>
      </View>
      <Gap height={25} />
      <View style={styles.navigationWrapper}>
        <TouchableOpacity activeOpacity={0.5}>
          <HomeIcon/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <Frame/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  headerWrapper: {
    backgroundColor: 'white',
    paddingTop: 30,
    paddingLeft: 24,
    paddingBottom: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  pictWrapper: {
    alignItems: 'flex-end',
    paddingRight: 24,
  },
  balanceWrapper: {
    backgroundColor: 'white',
    paddingTop: 13,
    paddingLeft: 24,
    paddingRight: 25,
  },
  transactionWrapper: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingBottom: 71,
  },
  navigationWrapper: {
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 13,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: 'black',
  },
  bal: {
    alignItems: 'center',
  },
  cash: {
    paddingTop: 20,
    paddingLeft: -4,
    paddingBottom: 40,
    paddingRight: 125,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  alt: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: '#8D92A3',
  },
  line: {
    height: 1,
    backgroundColor: 'black',
    alignSelf: 'stretch',
  },
  balance: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: 'black',
  },
  totalBalance: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    color: 'black',
  },
  transaction: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: 'black',
  },
  hand: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: 'black',
  },
  handText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: 'black',
  },
  bank: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: 'black',
  },
  bankText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: 'black',
  },
  btnHand: {
    paddingBottom: 18,
    paddingTop: 9,
  }
})