import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Detail, Header, Gap, Button, TextInput } from '../components'
import TransactionCard from '../components/molecules/TransactionCard'

const CashOnHand = ({navigation}) => {
  return (
    <View style={styles.page}>
        <View style={styles.transactionWrapper}>
            <Header title="Cash On  Hand" onBack={() => navigation.goBack()}/>
            <Gap height={24} />
            <TextInput title="Description" placeholder="Add desription"/>
            <Gap height={17} />
            <TextInput title="Type" placeholder="Debit / Credit"/>
            <Gap height={22} />
            <Button title="Save" />
            <Gap height={24} />
        </View>
        <View style={styles.last3Wrapper}>
            <Gap height={16} /> 
            <Text style={styles.lastTitle}>Last 3 Transactions</Text>
            <TransactionCard />
        </View>
    </View>
  )
}

export default CashOnHand

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#E5E5E5',
    },
    transactionWrapper: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingBottom: 52,
    },
    last3Wrapper: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
    },
    lastTitle: {
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
    },
})
