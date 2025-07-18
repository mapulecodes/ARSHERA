// src/components/common/LoadingIndicator.js
import React from 'react';
import { ActivityIndicator, View } from 'react-native'; // Explicitly import Native components
import styled from 'styled-components/native';
import { COLORS } from '../../styles/colors';

const LoadingWrapper = styled(View)`
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

export const LoadingIndicator = ({ size = 'large', color = COLORS.primaryGold }) => (
  <LoadingWrapper>
    <ActivityIndicator size={size} color={color} />
  </LoadingWrapper>
);