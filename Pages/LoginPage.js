import React from 'react';
import {ScrollView, View, Text, TextInput, Button, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import {Formik} from "formik";
import * as Yup from 'yup';


export default function LoginPage({ navigation }) {
    const validationSchema = Yup.object().shape({
        phoneNumber: Yup.string().required('Phone number is required'),
        password: Yup.string().required('Password is required'),
    });

    return(
        <SafeAreaView>
            <ScrollView >
                <Formik
                    initialValues={{ phoneNumber: "", password: "" }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        // setSubmitting(true);
                        navigation.navigate("Home");
                    }}
                >
                    {({ handleChange, handleBlur,
                          handleSubmit, values, errors,
                          touched }) => (
                    <View style={styles.container} >
                        <TouchableOpacity style={styles.cancelButton}
                                          onPress={() => navigation.navigate("Home")}>

                            <Text style={styles.buttonText}>
                                Cancel
                            </Text>
                        </TouchableOpacity>


                        <Text style={styles.title}>Login to your account</Text>
                        <Text style={styles.text}>We are glad to have you, Kindly enter{'\n'}your login details.</Text>

                        <View style={styles.labelContainer}>
                            <Text>Phone Number*</Text>
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                // style={styles.input}
                                placeholder="+234 809 531 6411"
                                onBlur={handleBlur("phoneNumber")}
                                value={values.phoneNumber}
                            />
                        </View>

                        {touched.phoneNumber && errors.phoneNumber ? (
                            <Text style={styles.error}>{errors.phoneNumber}</Text>
                        ) : null}


                        <Text
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        value={values.password}
                        />
                        {touched.password && errors.password ?(
                            <Text style={styles.error}>{errors.password}</Text>
                        ) : null}

                        <TouchableOpacity style={styles.LoginButton}
                                          onPress={handleSubmit}>
                        <Text style={styles.LoginButtonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    )}
                </Formik>
            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        padding: 16
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
        textAlign: "center"
    },
    title:{
        color: "#208220",
        fontSize: 18,
        marginTop: 20
    },
    text:{
        fontSize: 10,
        marginTop: 18,
        marginBottom: 18,
    },
    input: {
        width: "50%",
        height: 40,
        // borderColor: "#208220",
        borderColor: "#e3e3e3",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        zIndex: 0,
    },
    password: {

    },
    error: {
        color: "red"
    },
    LoginButton:{
        borderRadius: 10,
        width: "50%",
        height: 40,
        backgroundColor: "#208220",
    },
    LoginButtonText:{
        color: "white",
        textAlign: "center",
        fontSize: 18,
        paddingVertical: 10,
        paddingHorizontal: 2,
    },
    labelContainer:{
        backgroundColor: "#ffffff",
        alignSelf: "flex-start",
        paddingHorizontal: 2,
        marginStart: 22,
        zIndex: 1,
        elevation: 1,
        borderRadius: 6,
        shadowColor: "#b3b5ba",
        position: "absolute",
        // fontSize: 2,
        top: 159
    }
})