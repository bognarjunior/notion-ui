import { StyleSheet } from 'react-native';
import { theme } from '@/theme';

const { colors } = theme;
export const styles = StyleSheet.create({
  container: {
    width: 134,
    height: 134,
    borderRadius: 10,
    backgroundColor: colors.Gray[700],
    overflow: 'hidden'
  },
  cover: {
    width: '100%',
    height: '50%',
    backgroundColor: colors.Gray[600],
  },
  title: {
    color: colors.Gray[300],
    fontSize: 16,
    marginTop: 20
  },
  content: {
    width: '100%',
    height: '50%',
    padding: 12
  },
  icon: {
    position: 'absolute',
    top: -16,
    left: 7
  }
});