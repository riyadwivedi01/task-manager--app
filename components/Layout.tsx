// components/Layout.tsx
import React from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default Layout;

