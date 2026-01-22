import { ScrollView, StyleSheet, Text, View } from "react-native";
import UserDetails from "./components/UserDetails";

export default function ProfileScreen(props) {
    return (
        <ScrollView contentContainerStyle={styles.body}>
            <View style={styles.card}>
                <UserDetails />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        gap: 10,
        flex: 1,
        backgroundColor: '#f9fafb',
        alignItems: 'center',
        paddingTop:20,
        paddingBottom: 20,
    },
    card: {
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 10,
        width: '90%',
    }
})