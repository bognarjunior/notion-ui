import { StyleSheet } from 'react-native';
import { theme } from '@/theme';
import { EasingNameSymbol } from 'react-native-reanimated/lib/typescript/Easing';

const { colors } = theme;
export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.Gray[400]
  },
  image: {
    width: 42,
    height: 42,
    borderRadius: 5
  },
  user: {
    flex: 1,
  },
  name: {
    color: colors.Gray[100],
    fontWeight: '500',
    fontSize: 16
  },
  email: {
    color: colors.Gray[300],
    fontSize: 14
  }
});