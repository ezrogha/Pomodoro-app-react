import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RangeContainer = styled.div`
	margin-bottom: 20px;
`;

const StyledRange = styled.input`
  width: 100%;
`;

export default function InputRange(props) {
  const { label, value } = props;
  return (
    <RangeContainer>
      <label>
        {label}: {value} minutes
        <StyledRange type="range" step="1" { ...props } />
      </label>
    </RangeContainer>
  )
}

InputRange.propTypes = {
	label: PropTypes.number,
	value: PropTypes.number
}
