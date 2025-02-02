import React, {useEffect, useState} from 'react';
import { ScrollView, View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Formik } from "formik";
import * as Yup from 'yup';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as LocalAuthentication from 'expo-local-authentication';
import thumb from "../assets/thumb.png";


export default function LoginPage({ navigation }) {

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };


    const validationSchema = Yup.object().shape({
        phoneNumber: Yup.string().required('Phone number is required'),
        password: Yup.string().required('Password is required'),
    });



    const version = "v1.1.1";

    useEffect(() => {
        authenticateFingerprint();
    }, []);

    const authenticateFingerprint = async () => {
        const hasHardware = await LocalAuthentication.hasHardwareAsync();
        const isEnrolled = await LocalAuthentication.isEnrolledAsync();

        if (!hasHardware || !isEnrolled) {
            Alert.alert('Biometric Authentication', 'Biometric authentication is not available or set up on this device.');
            return;
        }
        const result = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Authenticate to login',
            fallbackLabel: 'Enter password',
        });

        if (result.success) {
            navigation.navigate('Dashboard');
        } else {
            Alert.alert('Fingerprint Authentication', 'Authentication failed. Please try again or enter your password.');
        }
    };

    return (
        <SafeAreaView style={styles.fullScreen}>
            <ScrollView contentContainerStyle={styles.fullScreen}>
                <Formik
                    initialValues={{ phoneNumber: "", password: "" }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(true);
                        navigation.navigate("Dashboard");
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <View style={styles.container}>
                            <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.navigate("Home")}>
                                <Text style={styles.buttonText}>Cancel</Text>
                            </TouchableOpacity>

                            <Text style={styles.title}>Login to your account</Text>
                            <Text style={styles.text}>We are glad to have you, Kindly enter{'\n'}your login details.</Text>

                            <Text style={styles.label}>Phone Number*</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Phone Number"
                                onChangeText={handleChange("phoneNumber")}
                                onBlur={handleBlur("phoneNumber")}
                                value={values.phoneNumber}
                            />
                            {touched.phoneNumber && errors.phoneNumber ? (
                                <Text style={styles.error}>{errors.phoneNumber}</Text>
                            ) : null}

                            <Text style={styles.label}>Your Password</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                secureTextEntry={!showPassword}
                                onChangeText={handleChange("password")}
                                onBlur={handleBlur("password")}
                                value={values.password}
                            />
                            <MaterialCommunityIcons
                                name={showPassword ? 'eye-off' : 'eye'}
                                size={24}
                                color="#aaa"
                                style={styles.icon}
                                onPress={toggleShowPassword}

                                />
                                {touched.password && errors.password ? (
                                <Text style={styles.error}>{errors.password}</Text>
                            ) : null}

                            <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
                                <Text style={styles.loginButtonText}>Login</Text>
                            </TouchableOpacity>

                            <View style={styles.signUpContainer}>
                                <Text style={styles.signUp}>Don’t have an account? Sign up</Text>
                                <Text style={styles.forgotPassword}>Forgot Password?</Text>
                            </View>


                            <TouchableOpacity onPress={authenticateFingerprint} style={styles.fingerprintContainer}>
                                <Image source={thumb} style={styles.fingerprintImage} />
                            </TouchableOpacity>

                            <View style={styles.versionContainer}>
                                <Text style={styles.version}>{version}</Text>
                            </View>
                        </View>
                    )}
                </Formik>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    fullScreen: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 16,
    },
    cancelButton: {
        width: 100,
        height: 40,
        margin: 4,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#208220",
        paddingVertical: 10,
        paddingHorizontal: 20,
        overflow: 'hidden',
    },
    buttonText: {
        color: "#208220",
        fontSize: 18,
        textAlign: "center",
    },
    title: {
        color: "#208220",
        fontSize: 18,
        marginTop: 20,
    },
    text: {
        fontSize: 13,
        marginTop: 18,
        marginBottom: 18,
    },
    input: {
        width: "100%",
        height: 70,
        borderColor: "#e3e3e3",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    label: {
        marginTop: 9,
        marginBottom: 5,
        fontSize: 16,
        backgroundColor: "#faf7f7",
        alignSelf: "flex-start",
        paddingHorizontal: 1,
        marginStart: 9,
        zIndex: 1,
        overflow: 'hidden',
        elevation: 1,
        shadowColor: "#9f9f9f",
        borderWidth: 0.0,
        borderRadius: 10,
        borderColor: "#9f9f9f",
         top: 17
    },
    forgotPassword: {
        marginTop: 25,
        color: "#9f9f9f",
    },
    error: {
        color: "red",
    },
    loginButton: {
        borderRadius: 10,
        width: "100%",
        height: 50,
        backgroundColor: "#208220",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    loginButtonText: {
        color: "white",
        fontSize: 18,
    },
    signUp: {
        color: "#208220",
        marginTop: 25,
        alignItems: "center",
        justifyContent: "center",
    },
    fingerprintContainer: {
        alignItems: "center",
        marginTop: 25,
    },
    fingerprintImage: {
        width: 60,
        height: 69,
    },
    signUpContainer:{
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,

    },
    versionContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 70,
    },
    version: {
        color: "#9f9f9f",
    },
    icon:{
        position: "absolute",
        right: 10,
        height: 80,
        width: 60,

    }
});
