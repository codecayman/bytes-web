import React, { useState } from "react";

// helpers
import styled from "styled-components";
import { notifyMeFormSchema } from "../../../../validation/user";

// components
import FormField from "../../../../components/FormField";
import { Formik, FormikHelpers } from "formik";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Button, TextField } from "@material-ui/core";

const NotifyMeForm = () => {
  const formInitialValues = { email: "" };
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values: any, formHelpers: FormikHelpers<any>) => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);

    await new Promise((resolve) =>
      setTimeout(() => {
        setIsLoading(false);
        formHelpers.resetForm();

        resolve(true);
      }, 1000)
    );
    setIsLoading(false);
  };

  return (
    <Formik
      initialValues={formInitialValues}
      onSubmit={handleSubmit}
      validateOnBlur={false}
      validateOnChange={false}
      validationSchema={notifyMeFormSchema}
    >
      {(formik) => (
        <Wrapper>
          <FormField
            name="email"
            component={StyledTextField}
            placeholder="Your email address ..."
            disabled={isLoading}
            hideErrorMessage
          />

          <StyledButton
            variant="contained"
            color="primary"
            type="submit"
            onClick={formik.handleSubmit as any}
          >
            Notify Me
            <StyledArrowIcon />
          </StyledButton>
        </Wrapper>
      )}
    </Formik>
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
    min-width: 300px !important;

    border-radius: 30px !important;
  }
`;

const StyledButton = styled(Button)`
  margin-left: 15px !important;

  min-width: 160px !important;
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
