import { User } from "lucide-react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Button from '../../../components/Button';
import { useState } from "react";

export default function UserDetails(props) {
    const [hover, setHover] = useState(false);
    return (
        <>
            <View style={styles.card}>
                <View style={styles.icon}>
                    <User />
                </View>
                <View>
                    <Text>John Doe</Text>
                    <Text>john.doe@email.com</Text>
                </View>
            </View>
            <Pressable
                style={[styles.button, { backgroundColor: hover ? 'grey' : 'white' }]}
                onHoverIn={() => setHover(true)}
                onHoverOut={() => setHover(false)}
            >
                <Text style={styles.textButtom}>Edit Profile</Text>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
    },
    icon: {
        backgroundColor: 'lightblue',
        borderRadius: '50%',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'transparent',
        width: '100%',
        alignItems: 'center',
        borderWidth: 0.3,
        borderRadius: 5,
        padding: 4,
        marginTop: 25,
        marginBottom: 10,
    },
    textButtom: {
        fontWeight: '500'
    }
})