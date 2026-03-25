import TabScreenBackground from '@/components/TabScreenBackground'
import ListHeroCard from '@/components/list/ListHeroCard'
import PendingItemCard from '@/components/list/PendingItemCard'
import CompletedItems from '@/components/list/CompletedItems'
import { useGroceryStore } from '@/store/grocery-store'
import { useClerk, useUser } from '@clerk/expo'
import React from 'react'
import { ScrollView, View, Text, FlatList } from 'react-native'


export default function ListScreen() {
    const {items} = useGroceryStore()

    const pendingItems = items.filter(item => !item.purchased);

    return (
        <FlatList
            className='flex-1 bg-background'
            data={pendingItems}
            renderItem={({item}) => <PendingItemCard item={item}/>}
            keyExtractor={item => item.id}
            contentContainerStyle={{
                padding: 20,
                gap: 14,
            }}
            contentInsetAdjustmentBehavior='automatic'
            ListHeaderComponent={
                <View style={{gap:14, paddingTop: 20}}>
                    <TabScreenBackground />
                    <ListHeroCard />

                    <View className="flex-row items-center justify-between px-1">
                        <Text className="text-sm font-semibold uppercase tracking-[1px] text-muted-foreground">
                        Shopping items
                        </Text>

                        <Text className="text-sm text-muted-foreground">{pendingItems.length} active</Text>
                    </View>
                </View>
            }
            ListEmptyComponent={<Text className='text-center text-muted-foreground'>No items</Text>}
            ListFooterComponent={<CompletedItems />}
        />

        // study : flatlist, legendlist, flashlist




        // first version
        // <ScrollView className='flex-1 bg-background py-4' showsVerticalScrollIndicator={false}
        //     contentContainerStyle={{
        //         padding: 20,
        //         gap: 14,
        //     }}
        // >
        //     <TabScreenBackground />
        //     <ListHeroCard />

        //     <View className="flex-row items-center justify-between px-1">
        //         <Text className="text-sm font-semibold uppercase tracking-[1px] text-muted-foreground">
        //         Shopping items
        //         </Text>

        //         <Text className="text-sm text-muted-foreground">{pendingItems.length} active</Text>
        //     </View>

        //     {pendingItems.map(item => < PendingItemCard key={item.id} item={item}/>)}

        //     <CompletedItems />
        // </ScrollView>
    )
}