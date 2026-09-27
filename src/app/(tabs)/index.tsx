import { ContentWrapper } from '@/components/ui/content-wrapper';
import { ScreenWrapper } from '@/components/ui/screen-wrapper';
import { Text } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <ScreenWrapper>
      <ContentWrapper>
        <Link href="/(auth)/login">
          <Text>Go to Login Screen</Text>
        </Link>
      </ContentWrapper>
    </ScreenWrapper>
  )
}