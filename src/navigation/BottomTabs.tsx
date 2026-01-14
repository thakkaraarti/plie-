import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EventScreen from '../screens/Events/EventScreen';
import Favourites from '../screens/Favourites/Favourites';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import SearchIcon from '../assets/svg/search.svg';
import Eventicon from '../assets/svg/Calendar.svg';
import FavouritesIcon from '../assets/svg/heart.svg';
import ProfileIcon from '../assets/svg/user.svg';
const Tab = createBottomTabNavigator();
const BottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={() => ({
                headerShown: false,
                tabBarHideOnKeyboard: true,
            })}
        //  initialRouteName={sharedInstance.getMessage != null&&sharedInstance.getMessage != '' ? CHAT_TAB : KEYPAD}
        // tabBar={props => <CustomTabBar {...props} />}
        >
            <Tab.Screen
                name={'Search'}
                component={SearchScreen}
                // initialParams={{ nav: nav1 }}
                options={({ route }) => ({
                    headerShown: false,
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ focused }) => {
                        return (
                            <SearchIcon
                                width={24}
                                height={24}
                                color={focused ? '#4CAF50' : '#999'}
                            />
                        );
                    },
                    tabBarStyle: {
                        // display: getTabBarVisibility(route),
                        borderColor: 'lightgrey',
                        //  borderTopWidth: theme === 'light' ? 0.2 : 0,
                    },
                })}
            />

            <Tab.Screen
                name={'Events'}
                component={EventScreen}
                //initialParams={{ nav: nav1 }}
                options={({ route }) => ({
                    headerShown: false,
                    tabBarLabel: 'Events',
                     tabBarIcon: ({ focused }) => {
                        return (
                            <Eventicon
                                width={24}
                                height={24}
                                color={focused ? '#4CAF50' : '#999'}
                            />
                        );
                    },
                    tabBarStyle: {
                        // display: getTabBarVisibility(route),
                        borderColor: 'lightgrey',
                        //  borderTopWidth: theme === 'light' ? 0.2 : 0,
                    },
                })}
            />
            <Tab.Screen
                name={'Favourites'}
                component={Favourites}
                // initialParams={{ nav: nav1 }}
                options={({ route }) => ({
                    headerShown: false,
                    tabBarLabel: 'Favourites',
                     tabBarIcon: ({ focused }) => {
                        return (
                            <FavouritesIcon
                                width={24}
                                height={24}
                                color={focused ? '#4CAF50' : '#999'}
                            />
                        );
                    },
                    tabBarStyle: {
                        // display: getTabBarVisibility(route),
                        borderColor: 'lightgrey',
                        //  borderTopWidth: theme === 'light' ? 0.2 : 0,
                    },
                })}
            />
            <Tab.Screen
                name={'Profile'}
                component={ProfileScreen}
                // initialParams={{ nav: nav1 }}
                options={({ route }) => ({
                    headerShown: false,
                    tabBarLabel: 'Profile',
                     tabBarIcon: ({ focused }) => {
                        return (
                            <ProfileIcon
                                width={24}
                                height={24}
                                color={focused ? '#4CAF50' : '#999'}
                            />
                        );
                    },
                    tabBarStyle: {
                        // display: getTabBarVisibility(route),
                        borderColor: 'lightgrey',
                        //  borderTopWidth: theme === 'light' ? 0.2 : 0,
                    },
                })}
            />







        </Tab.Navigator>
    );
};
export default BottomTabs;