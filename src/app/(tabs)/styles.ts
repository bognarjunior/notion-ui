import { StyleSheet } from 'react-native';
import { theme } from '@/theme';

const { colors } = theme;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.White,
  }
});