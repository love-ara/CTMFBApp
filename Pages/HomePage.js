import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Switch ,Alert } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
// import Clipboard from '@react-native-clipboard/clipboard';

export default function HomePage(){
    const [showBalance, setShowBalance] = useState(false);
    const  accountNumber = "1234"
    const  accountBalance = "NGN102,238.71"


    const toggleBalance = () => setShowBalance(!showBalance);


    // const copyAccountNumber = () => {
    //     Clipboard.setString(accountNumber);
    //     Alert.alert('Account number copied to clipboard');
    // };
        return(
        <View style={styles.container}>
            <Text>Savings Account Balance </Text>
            {showBalance && <Text>{accountBalance}</Text>}

            <Text>Account Number: {accountNumber}</Text>
            {/*<Button title="Copy Account Number" onPress={copyAccountNumber} />*/}
            <Text style={styles.hide}>Hide Balance</Text>
            <Switch
                style={styles.switch}
                // title={showBalance ? 'Hide Balance' : 'Show Balance'}
                trackColor={{false: "#617361", true: "#ffffff"}}
                thumbColor={showBalance ? '#333333' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleBalance}
                value={showBalance}
            />


        </View>
        )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 16,
        // backgroundColor: "#208220"
    },
    hide:{
        marginLeft: 210,
    },
    switch:{
       alignItems: "center",
        marginLeft: 300,
        marginTop: -25,
        // width: "25%"
    }
})