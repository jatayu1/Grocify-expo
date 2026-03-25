import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useGroceryStore } from '@/store/grocery-store'
import { FontAwesome6 } from '@expo/vector-icons'

const CompletedItems = () => {
    const { removeItem, togglePurchased, items } = useGroceryStore()

    const completedItems = items.filter(item => item.purchased)

    if(!completedItems.length) return null
    
    return (
        <View className="mt-3 rounded-3xl border border-border bg-secondary p-4">
            <Text className="text-sm font-semibold uppercase tracking-[1px] text-secondary-foreground">
                Completed
            </Text>

            {completedItems.map(item => (
                <View key={item.id} className="mt-3 flex-row items-center justify-between rounded-2xl border border-border bg-card px-3 py-2">
                    <View className="flex-row items-center gap-2">
                        <Pressable
                            onPress={() => togglePurchased(item.id)}
                            className="mt-1 size-6 items-center justify-center rounded-full border-2 border-border bg-card"
                        >
                            <FontAwesome6 name="check" size={12} color="#3b5a4a" />
                        </Pressable>
                        <Text className="text-base text-muted-foreground line-through">{item.name}</Text>
                    </View>

                    <Pressable
                        className="h-9 w-9 items-center justify-center rounded-xl bg-destructive"
                        onPress={() => removeItem(item.id)}
                    >
                        <FontAwesome6 name="trash" size={13} color="#d45f58" />
                    </Pressable>
                </View>
            ))}
        </View>
    )
}

export default CompletedItems