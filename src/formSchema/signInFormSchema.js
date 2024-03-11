import * as yup from "yup";

export default yup
    .object({
        identity: yup.string().required("Username or Email is Required"),
        password: yup.string().required("Password is Required"),
    })
    .required()

