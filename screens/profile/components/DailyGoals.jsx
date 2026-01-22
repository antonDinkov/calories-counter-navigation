import { Picker } from "@react-native-picker/picker";
import { Target } from "lucide-react-native";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function DailyGoals(props) {
    const [caloriesGoal, setCaloriesGoal] = useState('');
    const [protein, setProtein] = useState('');
    const [carbs, setCarbs] = useState('');
    const [fat, setFat] = useState('');
    const [hover, setHover] = useState(false);
    const [activityLevel, setActivityLevel] = useState('sedentary');
    return (
        <>
            <View style={styles.head}>
                <Target />
                <Text>Daily Goals</Text>
            </View>
            <View>
                <Text>Calorie Goal</Text>
                <TextInput style={styles.calories} value={caloriesGoal} onChangeText={setCaloriesGoal} placeholder="0" keyboardType="numeric" />
            </View>
            <View style={styles.macros}>
                <View>
                    <Text>Protein (g)</Text>
                    <TextInput style={[styles.calories, styles.inputMacros]} value={protein} onChangeText={setProtein} placeholder="0" keyboardType="numeric" />
                </View>
                <View>
                    <Text>Carbs (g)</Text>
                    <TextInput style={[styles.calories, styles.inputMacros]} value={carbs} onChangeText={setCarbs} placeholder="0" keyboardType="numeric" />
                </View>
                <View>
                    <Text>Fat (g)</Text>
                    <TextInput style={[styles.calories, styles.inputMacros]} value={fat} onChangeText={setFat} placeholder="0" keyboardType="numeric" />
                </View>
            </View>
            <View>
                <Text>Activity Level</Text>
                <Picker
                    selectedValue={activityLevel}
                    onValueChange={(itemValue, itemIndex) => setActivityLevel(itemValue)}
                    style={styles.picker}
                    mode="dropdown"
                >
                    <Picker.Item label="Sedentary" value="sedentary" />
                    <Picker.Item label="Light Exercise" value="moderate" />
                    <Picker.Item label="Moderate Exercise" value="moderate" />
                    <Picker.Item label="Very Active" value="active" />
                    <Picker.Item label="Extreme Exercise" value="moderate" />
                </Picker>
            </View>
            <Pressable
                style={[styles.button, { backgroundColor: hover ? 'grey' : 'white' }]}
                onHoverIn={() => setHover(true)}
                onHoverOut={() => setHover(false)}
            >
                <Text style={styles.textButtom}>Save Goals</Text>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    head: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        marginBottom: 20
    },
    calories: {
        backgroundColor: '#f3f3f5',
        borderRadius: 5,
        padding: 5,
        height: 25
    },
    macros: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputMacros: {
        width: 80,
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
    picker: {
        backgroundColor: '#f3f3f5',
        width: '100%',
        height: 56,
        width: '100%',
        borderRadius: 5
    },
})