import { useAuth } from '@clerk/expo'
import { Redirect, Stack } from 'expo-router'
import { NativeTabs } from 'expo-router/build/native-tabs'
import { useColorScheme } from 'nativewind'

export default function TabsLayout() {
    const { isSignedIn, isLoaded } = useAuth()

    const {colorScheme} = useColorScheme()
    const isDark = colorScheme === "dark"
    const tabTintColor = isDark ? "hsl(147 70% 54%)" : "hsl(147 75% 67%)"

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