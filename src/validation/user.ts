import * as yup from "yup";

export const notifyMeFormSchema = yup.object().shape({
    email: yup.string().trim().email("Wrong email").required("Enter email"),
});