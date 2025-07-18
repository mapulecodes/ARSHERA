// src/styles/global.js
import styled from 'styled-components/native';
import { COLORS } from './colors';
import { View, SafeAreaView } from 'react-native'; // Explicitly import Native components

export const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${COLORS.white};
`;

export const ScreenContainer = styled(View)`
  flex: 1;
  padding: 20px;
  background-color: ${COLORS.white};
  justify-content: center;
  align-items: center;
`;

export const CenteredContainer = styled(ScreenContainer)`
  justify-content: center;
  align-items: center;
`;