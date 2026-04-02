import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import TabScreenBackground from '@/components/TabScreenBackground'
import UserProfile from '@/components/insights/userProfile'
import InsightStatsSection from '@/components/insights/InsightStatsSection'
import InsightCategorySection from '@/components/insights/InsightCategorySection'
import ClearCompletedButton from '@/components/insights/ClearCompletedButton'
import InsightPrioritySection from '@/components/insights/InsightPrioritySection'
import SentryFeedbackButton from '@/components/insights/SentryFeedbackButton'

const InsightsScreen = () => {
  return (
    <>
    <ScrollView
        className='flex-1 bg-background py-4'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20, gap: 14, paddingTop: 40 }}
        contentInsetAdjustmentBehavior="automatic"
    >
        <TabScreenBackground />

        <UserProfile />
        <InsightStatsSection/>
        <InsightCategorySection />
        <InsightPrioritySection />
        <ClearCompletedButton />

    </ScrollView>

    <SentryFeedbackButton />
    </>
  )
}

export default InsightsScreen