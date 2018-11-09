import React, { SFC, useCallback } from 'react';
import styled from 'styled-components';
import { Select, MenuItem } from '@material-ui/core';
import { languages } from '../translations';
import 'flag-icon-css/css/flag-icon.min.css';

interface LanguagePickerProps {
  value: string;
  onChange: (value: string) => void;
}

const LanguagePicker: SFC<LanguagePickerProps> = ({ value, onChange }) => {
  const handleSelect = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      onChange(event.target.value);
    }
  );
  return (
    <StyledSelect value={value} onChange={handleSelect}>
      {languages.map(language => (
        <MenuItem value={language.value}>
          <LanguageItem>
            <Flag className={`flag-icon flag-icon-${language.iso}`} />
            <Names>
              <Name>{language.name}</Name>
              <EnglishName>{language.englishName}</EnglishName>
            </Names>
          </LanguageItem>
        </MenuItem>
      ))}
    </StyledSelect>
  );
};

const StyledSelect = styled(Select)`
  width: 200px;
`;

const LanguageItem = styled.div`
  display: flex;
  align-items: center;
`;

const Flag = styled.div`
  font-size: 34px;
`;
const Names = styled.div`
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  font-size: 0.8em;
`;
const Name = styled.div``;
const EnglishName = styled.div`
  color: grey;
`;

export default LanguagePicker;
