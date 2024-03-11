import * as yup from "yup";

export default yup
    .object({
        email: yup.string().email().required("Email is Required"),
        password: yup.string().min(8,"Password must be at least 8 characters long").required("Password is Required"),
        confirm_password: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required("Confirm Password is Required"),
        // token:yup.string().required(),
    })
    .required()

