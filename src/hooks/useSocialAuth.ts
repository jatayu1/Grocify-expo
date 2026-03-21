import { useSSO } from "@clerk/expo";
import { useState } from "react";
import { Alert } from "react-native";
import * as Linking from "expo-linking";

export const useSocialAuth = () => {
    const [loadingStrategy, selLoadingStrategy] = useState<string | null>(null);
    const { startSSOFlow  } = useSSO();
    const handleSocialAuth = async (strategy: "oauth_google" | "oauth_github" | "oauth_apple") => {

        if (loadingStrategy) return;
        selLoadingStrategy(strategy);

        try {
            const { createdSessionId, setActive } = await startSSOFlow({ 
                strategy,
                redirectUrl: Linking.createURL('/', { scheme: 'grocify' })
            });
            if (!createdSessionId && !setActive) {
                Alert.alert("Sign-in incomplete", "Sign-in did not complete. Please try again.");
                return;
            }
            
            await setActive({ session: createdSessionId });
            
        } catch (error) {
            console.log(error);
            Alert.alert("Error", "Failed to sign in try again");
        } finally {
            selLoadingStrategy(null);
        }
    }

    return { handleSocialAuth, loadingStrategy };
}

export default useSocialAuth;