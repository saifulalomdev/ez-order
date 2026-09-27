// src/features/auth/auth-client.ts
import { organizationClient } from 'better-auth/client/plugins';
import { expoClient } from "@better-auth/expo/client";
import { createAuthClient } from "better-auth/react";
import * as SecureStore from "expo-secure-store";

export const authClient = createAuthClient({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
        
    plugins: [
        organizationClient(),
         expoClient({
            scheme: "ezorder",
            storagePrefix: "ezorder",
            storage: SecureStore,
        }),
    ]
});