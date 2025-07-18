// src/components/common/Button.js
import React from 'react';
import { TouchableOpacity, Text } from 'react-native'; // Explicitly import Native components
import styled from 'styled-components/native';
import { COLORS } from '../../styles/colors';
import { TYPOGRAPHY } from '../../styles/typography';

export const StyledButton = styled(TouchableOpacity)`
  background-color: ${props => props.primary ? COLORS.primaryGold : 'transparent'};
  border-width: ${props => props.secondary ? '2px' : '0'};
  border-color: ${props => props.secondary ? COLORS.primaryPurple : 'transparent'};
  padding: 12px 20px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-vertical: 8px;
`;

export const ButtonText = styled(Text)`
  color: ${props => props.primary ? COLORS.white : COLORS.primaryGold};
  font-size: ${TYPOGRAPHY.fontSizes.body};
  font-weight: ${TYPOGRAPHY.fontWeights.semiBold};
`;

export const Button = ({ children, primary, secondary, onPress, style }) => (
  <StyledButton primary={primary} secondary={secondary} onPress={onPress} style={style}>
    <ButtonText primary={primary}>{children}</ButtonText>
  </StyledButton>
);