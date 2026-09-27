import { AppTabs } from '@/components/app-tabs'
import { Tabs } from 'expo-router'

export default function Layout() {

    const tabOptions = {
        headerShown: false,
    }
    
    return (
        <Tabs tabBar={(props) => <AppTabs {...props} />}>
            <Tabs.Screen
                name='index'
                options={tabOptions}
            />
            <Tabs.Screen
                name='products'
                options={tabOptions}
            />
            <Tabs.Screen
                name='orders'
                options={tabOptions}
            />
            <Tabs.Screen
                name='shops'
                options={tabOptions}
            />
            <Tabs.Screen
                name='settings'
                options={tabOptions}
            />
        </Tabs>
    )
}
