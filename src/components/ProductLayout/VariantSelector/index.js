import React from 'react';
import { Box } from 'rebass';
import { Label, Select } from '@rebass/forms';

const VariantSelector = ({ onChange, option }) => (
  <Box width={[1, null, 1 / 3]}>
    <Label htmlFor={option.name} sx={{ color: 'textSubtle', mb: 2 }}>
      {option.name}
    </Label>
    <Select id={option.name} name={option.name} onChange={onChange}>
      {option.values.map((value) => (
        <option key={`${option.name}-${value}`}>{value}</option>
      ))}
    </Select>
  </Box>
);

export default VariantSelector;
