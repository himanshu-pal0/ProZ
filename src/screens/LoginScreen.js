import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES, SHADOW } from "../theme/colors";

export default function LoginScreen({navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <StatusBar barStyle="light-content" />

      {/* TOP PURPLE */}
      <View style={styles.top}>
        <Text style={styles.logo}>P</Text>
        <Text style={styles.title}>Welcome Back To</Text>
        <Text style={styles.brand}>ProZsphere</Text>
        <Text style={styles.subtitle}>
          Your Trusted Platform For Professional Expertise
        </Text>
      </View>

      {/* CARD */}
      <View style={styles.card}>
        <TouchableOpacity style={styles.otpBtn}>
          <Text style={styles.otpText}>Login with OTP</Text>
        </TouchableOpacity>

        <Text style={styles.or}>Or login with</Text>

        <TextInput placeholder="Mobile Number / Email" style={styles.input} />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} />

        <Text style={styles.forgot}>Forgot Password?</Text>

        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>

        <Text style={styles.signup}>
          Don’t have an account? <Text style={{ color: COLORS.primary }}>Sign Up</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  top: {
    alignItems: "center",
    marginTop: 40,
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 32,
    color: "#fff",
    marginBottom: 10,
  },
  title: { color: "#fff", fontSize: 18 },
  brand: { color: "#fff", fontSize: 24, fontWeight: "bold" },
  subtitle: {
    color: "#ddd",
    fontSize: 12,
    textAlign: "center",
    marginTop: 8,
  },

  card: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    ...SHADOW,
  },

  otpBtn: {
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 14,
    borderRadius: 25,
    alignItems: "center",
  },
  otpText: { fontWeight: "600" },

  or: {
    textAlign: "center",
    marginVertical: 15,
    color: COLORS.subText,
  },

  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 14,
    borderRadius: 10,
    marginBottom: 15,
  },

  forgot: {
    textAlign: "right",
    color: COLORS.primary,
    marginBottom: 20,
  },

  loginBtn: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
  },

  loginText: {
    color: "#fff",
    fontWeight: "bold",
  },

  signup: {
    textAlign: "center",
    marginTop: 20,
    color: COLORS.subText,
  },
});