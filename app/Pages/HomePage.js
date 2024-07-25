import React, { useState } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, ScrollView, Switch, Alert,
} from 'react-native';
import {Clipboard} from 'react-native';
import headerImage from "../assets/temitope.png";
import triangle from "../assets/triangle.png";
import copy from "../assets/copy.png";
import features from "./data";
import transactions from "./transactions";
import footerArea from "./footerArea";

const HomePage = () => {
    const [activeSection, setActiveSection] = useState('Dashboard');
    const [isBalanceHidden, setIsBalanceHidden] = useState(false);

    const handleBalanceToggle = () => setIsBalanceHidden(previousState => !previousState);

    const copyToClipboard = (text) => {
        Clipboard.setString(text);
        Alert.alert('Copied', 'Account number copied to clipboard!');
    };

    const renderSection = () => {
        switch (activeSection) {
            case 'Transfer':
                return <TransferSection />;
            case 'Remita':
                return <RemitaSection />;
            case 'Pay Bills':
                return <BillsSection />;
            case 'Airtime':
                return <AirtimeSection />;
            default:
                return <HomeSection />;
        }
    };

    const renderBackButton = () => (
        <TouchableOpacity onPress={() => setActiveSection('Dashboard')} style={styles.backButton}>
            <Text style={styles.backButtonText}>Back to Home</Text>
        </TouchableOpacity>
    );

    const HomeSection = () => (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                {headerImage && <Image source={headerImage} style={styles.headerImage} />}
                <View style={styles.headerText}>
                    <Text style={styles.headerTitle}>Hi, Temitope</Text>
                    <Text style={styles.greeting}>How are you today?</Text>
                </View>
            </View>

            <View style={styles.cardDashboard}>
                <Text style={styles.accountType}>Savings Account Balance</Text>
                <Text style={styles.accountBalance}>
                    {isBalanceHidden ? '****' : 'NGN102,238.71'}
                </Text>
                <Text style={styles.accountOwner}>Adewole Temitope</Text>
                <Image style={styles.triangle} source={triangle} />
                <View style={styles.accountInfo}>
                    <Text style={styles.accountNumber}>2040011238</Text>
                    <TouchableOpacity onPress={() => copyToClipboard('2040011238')}>
                        <Image source={copy} style={styles.copyIcon} resizeMode="contain" />
                    </TouchableOpacity>
                    <View style={styles.switchContainer}>
                        <Text style={styles.hide}>Hide Balance</Text>
                        <Switch
                            value={isBalanceHidden}
                            onValueChange={handleBalanceToggle}
                            trackColor={{ false: "#ff2f00", true: "orange" }}
                            thumbColor={isBalanceHidden ? "#b7b7b7" : "#b7b7b7"}
                            style={styles.switch}
                        />
                    </View>
                </View>
            </View>




            <View style={styles.services}>

                <Text style={styles.servicesTitle}>Services</Text>
                <TouchableOpacity style={styles.viewAllServiceButton}>
                    <Text style={styles.viewAllServiceText}>View all</Text>
                </TouchableOpacity>

                <View style={styles.featuresContainer}>
                    {features.map((feature, index) => (
                        <PressableFeatureBox
                            key={index}
                            name={feature.name}
                            image={feature.image}
                            onPress={() => setActiveSection(feature.section)}
                            backgroundColor={feature.backgroundColor}
                        />
                    ))}
                </View>
            </View>


            <View style={styles.transactionContainer}>
                <Text style={styles.transactionContainerHeader}>Recent Transactions</Text>

                <TouchableOpacity style={styles.viewAllTransaction}>
                    <Text style={styles.viewAllTransactionText}>View all</Text>
                </TouchableOpacity>

                {transactions.map((transaction, index) => (
                    <View key={index} style={styles.transactionItem}>
                        <View style={{display: "flex", flexDirection: "column",}}>
                            <View >
                                <Image source={transaction.image} style={styles.transactionImage} />
                            </View>
                            <View>
                                <Text
                                    style={{
                                        height: 22,
                                        fontFamily: 'Mulish',
                                        fontStyle: "normal",
                                        fontWeight: 400,
                                        fontSize: 14,
                                        color: "#333333",
                                        top: -25,
                                        right: -40
                                    }}
                                >{transaction.name}</Text>
                                <Text style={{
                                    height: 12,
                                    fontFamily: 'Mulish',
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: 10,
                                    color: "#666666",
                                    top: -25,
                                    right: -40
                                }}>{transaction.date}</Text>
                            </View>
                        </View>

                        <View style={{display: "flex", flexDirection: "column"}}>
                            <Text
                                style={{
                                    height: 20,
                                    fontFamily: 'SF Pro Text',
                                    fontStyle: "normal",
                                    fontWeight: 700,
                                    fontSize: 14,
                                    // top: -5,
                                    // right: -16,
                                    color: transaction.color

                                }}
                            >{transaction.amount}</Text>
                            <Text
                                style={{
                                    height: 12,
                                    fontFamily: 'Mulish',
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: 10,
                                    textAlign: "right",
                                    color:" #666666",
                                }}
                            >{transaction.balance}</Text>

                        </View>
                    </View>

                ))}
            </View>


            <View style={styles.footerSection}>
                {footerArea.map((footer, index)=>(
                    <TouchableOpacity  onPress={() => {
                        if (footer.navigate === "Transfer") {
                            setActiveSection("Transfer");
                        } else {
                            setActiveSection("HomeSection");
                        }
                    }} key={index}
                                       style={[styles.footerButton,
                                           {backgroundColor: footer.backgroundColor}]}
                    >
                        <Image source={footer.image} style={styles.footerImage}

                               resizeMode="contain"
                        />
                        <Text style={[styles.footerTitle, {color: footer.titleColor}]}>{footer.title}</Text>

                    </TouchableOpacity>

                ))}
            </View>


        </View>
    );

    const PressableFeatureBox = ({ name, image, onPress, backgroundColor }) => (
        <TouchableOpacity onPress={onPress} style={[styles.featureBox, { backgroundColor }]}>
            <Image source={image} style={styles.featureImage} resizeMode="contain" />
            <Text style={styles.featureName}>{name}</Text>
        </TouchableOpacity>
    );

    const TransferSection = () => (
        <View style={styles.container}>
            {renderBackButton()}
            <Text style={styles.sectionTitle}>Transfer</Text>
            <Text style={styles.sectionContent}>Transfer Content Goes Here</Text>
        </View>
    );

    const RemitaSection = () => (
        <View style={styles.container}>
            {renderBackButton()}
            <Text style={styles.sectionTitle}>Remita Section</Text>
            <Text style={styles.sectionContent}>Remita Content Goes Here</Text>
        </View>
    );

    const BillsSection = () => (
        <View style={styles.container}>
            {renderBackButton()}
            <Text style={styles.sectionTitle}>Bill Section</Text>
            <Text style={styles.sectionContent}>Bills Content Goes Here</Text>
        </View>
    );

    const AirtimeSection = () => (
        <View style={styles.container}>
            {renderBackButton()}
            <Text style={styles.sectionTitle}>Airtime Section</Text>
            <Text style={styles.sectionContent}>Airtime Content Goes Here</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.fullScreen}>
            <ScrollView contentContainerStyle={styles.fullScreen}>
                <View style={styles.container}>
                    {renderSection()}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    fullScreen: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        padding: 16,
    },
    headerContainer: {
        padding: 0,
        // marginTop: -30,
        top: -30,
    },
    headerImage: {
        borderRadius: 12,
        width: 90,
        height: 90,
        position: 'absolute',
        top: 1,
        left: 2,
        // marginBottom: 0,
    },
    headerText: {
        marginLeft: 86,
        marginTop: 25,
    },
    headerTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#404040',
    },
    greeting: {
        fontSize: 14,
        color: '#8d8d8e',
    },
    cardDashboard: {
        padding: 12,
        width: '100%',
        height: 200,
        borderRadius: 8,
        backgroundColor: "#208220",
        marginTop: 5,
    },
    accountType: {
        fontSize: 18,
        color: "#FFFFFF",
        opacity: 0.7,
        marginTop: 20,
    },
    accountBalance: {
        fontSize: 34,
        fontWeight: 'bold',
        color: "#FFFFFF",
        marginBottom: 10,
    },
    accountOwner: {
        fontSize: 12,
        color: "#FFFFFF",
    },
    triangle: {
        width: 203,
        height: 190,
        position: 'absolute',
        top: 2,
        right: 10,
        opacity: 0.38,
    },
    accountInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    accountNumber: {
        fontSize: 16,
        color: "#FFFFFF",
    },
    copyIcon: {
        width: 20,
        height: 20,
        // marginLeft: 5,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    hide: {
        fontSize: 12,
        color: "#FFFFFF",
        marginRight: 5,
    },
    switch: {
        marginRight: 8,
        transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
    },
    services: {
        marginTop: 30,
    },
    servicesTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#404040',
        marginBottom: 10,
    },
    viewAllServiceButton: {
        position: 'absolute',
        right: 0,
        top: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        left: 278,
        backgroundColor: "rgba(32, 130, 32, 0.1)",
        borderRadius: 7,
    },

    viewAllServiceText: {
        fontSize: 16,
        color: "#208220",
    },
    featuresContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        top: 20,
        marginTop: -40
    },
    featureBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '23%',
        aspectRatio: 1,
        borderRadius: 10,
        marginVertical: 8,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        marginTop: 15,
    },
    featureImage: {
        width: '100%',
        height: '50%',
    },
    featureName: {
        position: "absolute",
        width: "150%",
        left: -19,
        top: 65,
        textAlign: "center",
        fontFamily: 'Mulish',
        fontStyle: "normal",
        // fontWeight: 400,
        fontSize: 12,
        color: "#333333",
    },

    transactionContainer: {
        marginTop: 30,
    },
    transactionContainerHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#404040',
        marginBottom: 10,
    },
    viewAllTransaction: {
        position: 'absolute',
        right: 0,
        top: 0,
    },
    viewAllTransactionText: {
        fontSize: 16,
        color: "#208220",
    },
    transactionItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // paddingVertical: 12,
        // borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    transactionDetails: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    transactionImage: {
        width: 25,
        height: 25,
        marginRight: 10,
    },
    transactionName: {
        fontSize: 16,
        color: '#404040',
    },
    transactionDate: {
        fontSize: 12,
        color: '#8d8d8e',
    },
    transactionAmount: {
        alignItems: 'flex-end',
    },
    transactionAmountText: {
        fontSize: 16,
    },
    transactionBalance: {
        fontSize: 12,
        color: '#8d8d8e',
    },
    footerSection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        bottom: 1,
    },
    footerButton: {
        width: 50,
        height: 50,
        borderRadius: 150,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
            // marginVertical: 0,
            // elevation: 5,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 10,
    },
    footerImage: {
        width: 25,
        height: 25,
        top: 8,
    },
    footerTitle: {
        top: 9,
        fontSize: 12,
        width: 300,
        textAlign: 'center',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
        color: '#404040',
    },
    sectionContent: {
        fontSize: 16,
        color: '#404040',
    },
    backButton: {
        marginTop: 10,
    },
    backButtonText: {
        fontSize: 16,
        color: '#ff2f00',
    },
});

export default HomePage;








