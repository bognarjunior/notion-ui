import { StyleSheet } from 'react-native';
import { theme } from '@/theme';

const { colors } = theme;

export const styles = StyleSheet.create({
  default: {
    backgroundColor: colors.Gray[800],
  },
  tabBarStyle: {
    backgroundColor: colors.Gray[800],
    borderTopColor: colors.Gray[400],
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.White,
  }
});