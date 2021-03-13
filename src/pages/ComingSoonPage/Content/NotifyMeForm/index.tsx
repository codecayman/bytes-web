import React from "react";

// helpers
import styled from "styled-components";

// components
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Button, TextField } from "@material-ui/core";

const NotifyMeForm = () => {
  return (
    <Wrapper>
      <StyledTextField
        variant="outlined"
        placeholder="Your email address ..."
      />

      <StyledButton variant="contained" color="primary">
        Notify Me
        <StyledArrowIcon />
      </StyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledTextField = styled(TextField)`
  width: 70%;
  margin-right: 10px;

  .MuiInputBase-root {
    border-radius: 30px !important;
  }
`;

const StyledButton = styled(Button)`
  margin-left: 15px !important;

  display: flex;
  flex-grow: 1;

  font-size: 16px !important;
  border-radius: 30px !important;
  text-transform: none !important;
`;

const StyledArrowIcon = styled(ArrowForwardIcon)`
  margin-left: 10px;
`;

export default NotifyMeForm;
