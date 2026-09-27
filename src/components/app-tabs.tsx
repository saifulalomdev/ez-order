import type { BottomTabBarProps } from 'expo-router/build/react-navigation/bottom-tabs';
import { View, Text, Pressable } from 'react-native';
import { cn } from 'cn';
import {
  type LucideIcon,
  ShoppingBag,
  Settings2,
  HomeIcon,
  Package,
  Store,
} from 'lucide-react-native'

interface TabIconConfig {
  Icon: LucideIcon;
  label: string;
}

interface TabIcons {
  [key: string]: TabIconConfig;
}

export const tabIcons: TabIcons = {
  "index": { Icon: HomeIcon, label: "Home" },
  "products": { Icon: Package, label: "Products" },
  "orders": { Icon: ShoppingBag, label: "Orders" },
  "shops": { Icon: Store, label: "Shops" },
  "settings": { Icon: Settings2, label: "Settings" },
}

interface TabProps {
  isFocusd: boolean;
  routeName: string;
  onPress: () => void;
}

export function AppTabs({ state, navigation }: BottomTabBarProps) {
  const routes = state.routeNames;

  return (
    <View className="absolute bottom-0 left-0 right-0 flex-row items-center justify-between px-5 bg-white">
      {routes.map((routeName, i) => {
        const isFocused = state.index === i;

        return (
          <Tab
            key={routeName}
            onPress={() => navigation.navigate(routeName)}
            routeName={routeName}
            isFocusd={isFocused}
          />
        );
      })}
    </View>
  );
}


function Tab({ isFocusd, onPress, routeName }: TabProps) {
  const { Icon, label } = tabIcons[routeName];

  return (
    <Pressable
      onPress={onPress}
      className={cn(
        'w-[60px] h-[60px] items-center justify-center pt-3 pb-4 border-t-2',
        isFocusd ? 'border-foreground' : 'border-transparent'
      )}
    >
      <Icon className={isFocusd ? 'text-foreground' : 'text-muted'} size={20} />
      <Text className={cn(
        'text-xs font-medium mt-1',
        isFocusd ? 'text-foreground font-semibold' : 'text-muted'
      )}>
        {label}
      </Text>
    </Pressable>
  );
}