import * as yup from "yup";

 export default yup
    .object({
        first_name: yup.string().required("First Name is Required"),
        last_name: yup.string().required("Last Name is Required"),
        email: yup.string().email("Invalid Email").required("Email is Required"),
        username: yup.string().required("Username is Required"),
        password: yup.string().min(8,"Password must be at least 8 characters long").required("Password is Required"),
        confirm_password: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required("Confirm Password is Required"),
    })
    .required()

