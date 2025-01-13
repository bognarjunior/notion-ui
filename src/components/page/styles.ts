import { StyleSheet } from 'react-native';
import { theme } from '@/theme';

const { colors } = theme;
export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    padding: 16
  },
  title: {
    color: colors.Gray[100],
    fontSize: 16,
    flex: 1
  }
});