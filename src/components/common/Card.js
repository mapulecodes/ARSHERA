// src/components/common/Card.js
import React from 'react';
import { View } from 'react-native'; // Explicitly import Native component
import styled from 'styled-components/native';
import { COLORS } from '../../styles/colors';

export const Card = styled(View)`
  background-color: ${COLORS.lightGoldTint};
  border-radius: 12px;
  padding: 16px;
  margin-vertical: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  elevation: 3;
`;