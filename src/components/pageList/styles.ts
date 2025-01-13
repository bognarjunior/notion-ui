import { StyleSheet } from 'react-native';
import { theme } from '@/theme';

const { colors } = theme;
export const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 12
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingRight: 16
  },
  title: {
    flex: 1,
    color: colors.Gray[300],
    fontSize: 16
  },
  list: {
    backgroundColor: colors.Gray[700],
    borderRadius: 8
  },
  separator: {
    flex: 1,
    height: 0.8,
    backgroundColor: colors.Gray[500],
    marginLeft: 42
  }
});