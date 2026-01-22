import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './screens/home/HomeScreen';
import { Book, House, TrendingUp, User } from 'lucide-react-native';
import LogScreen from './screens/log/LogScreen';
import StatsScreen from './screens/stats/StatsScreen';
import ProfileScreen from './screens/profile/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="auto" />
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={{
                        headerShown: true,
                        headerTitleAlign: 'center',
                        tabBarShowLabel: false,
                    }}
                >
                    <Tab.Screen
                        name="Home"
                        options={{
                            tabBarIcon: ({ focused, color, size }) => (<House />),
                            title: 'Calories-Counter',
                        }}
                        component={HomeScreen}
                    />

                    <Tab.Screen
                    name="Log"
                    options={{
                        tabBarIcon: ({focused, color, size}) => (<Book />),
                        title: 'LOG'
                        }}
                    component={LogScreen}
                    />

                    <Tab.Screen
                    name="STATS"
                    options={{
                        tabBarIcon: ({focused, color, size}) => (<TrendingUp />),
                        title: 'LOG'
                        }}
                    component={StatsScreen}
                    />

                    <Tab.Screen
                    name="Profile"
                    options={{
                        tabBarIcon: ({focused, color, size}) => (<User />),
                        title: 'LOG'
                        }}
                    component={ProfileScreen}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    );
}
