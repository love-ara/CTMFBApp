import React from 'react';
import {View, Text, Image, StyleSheet, Button, Switch, Alert, SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PressableFeatureBox = (
    { name, icon,
        onPress
    }
) => (
    <TouchableOpacity onPress={onPress}
                      style={styles.featureBox}>
        <Icon name={icon} size={50}
              color="#3498db" />
        <Text style={styles.featureName}>
            {name}
        </Text>
    </TouchableOpacity>
);
export default function Home({ navigation }){
    return(<SafeAreaView style={styles.container}>
        <View>
            <View style={styles.header}>
                <Text style={styles.title}>Welcome</Text>
            </View>
            <View style={styles.content}>
                <PressableFeatureBox name="Login" icon="enter" onPress={()=> navigation.navigate("Login")}></PressableFeatureBox>

            </View>
        </View>

    </SafeAreaView>)
}



const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: 'center',
    }
})