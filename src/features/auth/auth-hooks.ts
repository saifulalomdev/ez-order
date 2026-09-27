import * as SecureStore from "expo-secure-store";
import { useEffect, useState, useCallback } from "react";
// import { authClient } from "./auth-client";

const CACHED_USER_KEY = "offline_user_session";

export function useAuthState() {
  const [user, setUser] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOffline, setIsOffline] = useState(false);

  const initAuth = useCallback(async () => {
    try {
      setIsLoading(true);
      // Try fetching fresh session from backend
      // const { data, error } = await authClient.getSession();

      // if (data?.user) {
      //   setUser(data.user);
      //   await SecureStore.setItemAsync(CACHED_USER_KEY, JSON.stringify(data.user));
      //   setIsOffline(false);
      // } else if (error) {
      //   throw error;
      // } else {
      //   setUser(null);
      // }
    } catch (error) {
      // Fallback to cached user if offline or network error
      try {
        const cachedUser = await SecureStore.getItemAsync(CACHED_USER_KEY);
        if (cachedUser) {
          setUser(JSON.parse(cachedUser));
          setIsOffline(true);
        } else {
          setUser(null);
        }
      } catch {
        setUser(null);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    initAuth();
  }, [initAuth]);

  const signOut = async () => {
    try {
      // await authClient.signOut();
    } catch (e) {
      // Ignore network errors on sign out
    } finally {
      await SecureStore.deleteItemAsync(CACHED_USER_KEY);
      setUser(null);
    }
  };

  return { isLoading, user, isOffline, signOut, refetchSession: initAuth };
}