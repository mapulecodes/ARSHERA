// src/components/common/TextInput.js
import React from 'react';
import { TextInput as RNTextInput } from 'react-native'; // Explicitly import Native component
import styled from 'styled-components/native';
import { COLORS } from '../../styles/colors';
import { TYPOGRAPHY } from '../../styles/typography';

const StyledInput = styled(RNTextInput)`
  border-width: 1px;
  border-color: ${COLORS.primaryPurple};
  background-color: ${COLORS.white};
  padding: 12px;
  border-radius: 8px;
  font-size: ${TYPOGRAPHY.fontSizes.body};
  color: ${COLORS.softBlack};
  margin-vertical: 8px;
  width: 100%;
`;

export const TextInput = (props) => {
  return <StyledInput placeholderTextColor={COLORS.primaryPurple + '80'} {...props} />;
};