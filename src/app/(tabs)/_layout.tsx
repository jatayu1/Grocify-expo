import { useGroceryStore } from '@/store/grocery-store'
import { useAuth } from '@clerk/expo'
import { Redirect } from 'expo-router'
import { NativeTabs } from 'expo-router/build/native-tabs'
import { useColorScheme } from 'nativewind'
import { useEffect } from 'react'


export default function TabsLayout() {
    const { isSignedIn, isLoaded } = useAuth()

    const { loadItems, items } = useGroceryStore()

    const { colorScheme } = useColorScheme()
    const isDark = colorScheme === "dark"
    const tabTintColor = isDark ? "hsl(147 70% 54%)" : "hsl(147 75% 67%)"

    useEffect(() => {
        loadItems();
    }, []);

    if (!isLoaded) {
        return null
    }

    if (!isSignedIn) {
        return <Redirect href="/(auth)/sign-in" />
    }

    return <NativeTabs tintColor={tabTintColor}>
        <NativeTabs.Trigger name="index">
            <NativeTabs.Trigger.Label>List</NativeTabs.Trigger.Label>
            <NativeTabs.Trigger.Icon sf={{
                default: "list.bullet.clipboard",
                selected: "list.bullet.clipboard.fill"
            }} md="assignment" />
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="planner">
            <NativeTabs.Trigger.Icon sf={{
                default: "plus.circle",
                selected: "homekit"
            }} md="add_circle" />
            <NativeTabs.Trigger.Label>Planner</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="insights">
            <NativeTabs.Trigger.Icon sf={{
                default: "chart.bar",
                selected: "chart.bar.fill"
            }} md="analytics" />
            <NativeTabs.Trigger.Label>Insights</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>
    </NativeTabs>
}






// // 
// import { useGroceryStore } from '@/store/grocery-store'
// import { useAuth } from '@clerk/expo'
// import { Redirect, Tabs } from 'expo-router'
// import { NativeTabs } from 'expo-router/build/native-tabs'
// import { useColorScheme } from 'nativewind'
// import { useEffect } from 'react'
// import { Platform } from 'react-native'
// import { MaterialIcons } from '@expo/vector-icons'

// export default function TabsLayout() {
//     const { isSignedIn, isLoaded } = useAuth()

//     const { loadItems, items } = useGroceryStore()

//     const { colorScheme } = useColorScheme()
//     const isDark = colorScheme === "dark"
//     const tabTintColor = isDark ? "hsl(147 70% 54%)" : "hsl(147 75% 67%)"

//     useEffect(() => {
//         loadItems();
//     }, []);

//     if (!isLoaded) {
//         return null
//     }

//     if (!isSignedIn) {
//         return <Redirect href="/(auth)/sign-in" />
//     }

//     if (Platform.OS === 'android') {
//         return (
//             <Tabs screenOptions={{
//                 headerShown: false,
//                 tabBarActiveTintColor: tabTintColor,
//                 tabBarStyle: {
//                     position: 'absolute',
//                     bottom: 24,
//                     left: 24,
//                     right: 24,
//                     elevation: 0,
//                     backgroundColor: isDark ? 'rgba(30, 30, 30, 0.95)' : 'rgba(255, 255, 255, 0.95)',
//                     borderRadius: 32,
//                     height: 64,
//                     borderTopWidth: 0,
//                     shadowColor: '#000',
//                     shadowOffset: { width: 0, height: 10 },
//                     shadowOpacity: 0.1,
//                     shadowRadius: 10,
//                 },
//                 tabBarItemStyle: {
//                     paddingVertical: 8,
//                 },
//             }}>
//                 <Tabs.Screen 
//                     name="index" 
//                     options={{ 
//                         title: 'List',
//                         tabBarIcon: ({ color }) => <MaterialIcons name="assignment" size={26} color={color} />
//                     }} 
//                 />
//                 <Tabs.Screen 
//                     name="planner" 
//                     options={{ 
//                         title: 'Planner',
//                         tabBarIcon: ({ color }) => <MaterialIcons name="add-circle" size={26} color={color} />
//                     }} 
//                 />
//                 <Tabs.Screen 
//                     name="insights" 
//                     options={{ 
//                         title: 'Insights',
//                         tabBarIcon: ({ color }) => <MaterialIcons name="analytics" size={26} color={color} />
//                     }} 
//                 />
//             </Tabs>
//         )
//     }

//     return <NativeTabs tintColor={tabTintColor}>
//         <NativeTabs.Trigger name="index">
//             <NativeTabs.Trigger.Label>List</NativeTabs.Trigger.Label>
//             <NativeTabs.Trigger.Icon sf={{
//                 default: "list.bullet.clipboard",
//                 selected: "list.bullet.clipboard.fill"
//             }} md="assignment" />
//         </NativeTabs.Trigger>

//         <NativeTabs.Trigger name="planner">
//             <NativeTabs.Trigger.Icon sf={{
//                 default: "plus.circle",
//                 selected: "homekit"
//             }} md="add_circle" />
//             <NativeTabs.Trigger.Label>Planner</NativeTabs.Trigger.Label>
//         </NativeTabs.Trigger>

//         <NativeTabs.Trigger name="insights">
//             <NativeTabs.Trigger.Icon sf={{
//                 default: "chart.bar",
//                 selected: "chart.bar.fill"
//             }} md="analytics" />
//             <NativeTabs.Trigger.Label>Insights</NativeTabs.Trigger.Label>
//         </NativeTabs.Trigger>
//     </NativeTabs>
// }