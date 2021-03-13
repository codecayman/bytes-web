import React from "react";

// Helpers
import styled from "styled-components";

// Form
import { useField } from "formik";

// Components
import { Typography } from "@material-ui/core";

// TODO: describe all props
interface IProps {
  name: string;
  component: any;
  variant?: string;
  hideErrorMessage?: boolean;
  [key: string]: any;
}

const FormField = ({
  name,
  component: Component,
  variant = "outlined",
  hideErrorMessage,
  ...rest
}: IProps) => {
  const [field, meta] = useField(name);

  return (
    <>
      <Component {...rest} {...field} error={!!meta.error} variant={variant} />

      {!!meta.error && !hideErrorMessage && (
        <StyledErrorTypography color="error">
          {meta.error}
        </StyledErrorTypography>
      )}
    </>
  );
};

const StyledErrorTypography = styled(Typography)`
  margin-top: -10px;
  margin-bottom: 15px;
`;

export default FormField;
