import * as yup from "yup";

export default yup.object({
    first_name: yup.string().required("First Name is Required"),
    last_name: yup.string().required("Last Name is Required"),
    email: yup.string().email("Invalid Email").required("Email is Required"),
    username: yup.string().required("Username is Required"),
    gender: yup.string().required("Gender is Required"),
    address: yup.string().required("Address is Required"),
    date_of_birth: yup.string().required("Date of Birth is Required"),
    phone_number: yup.string().required("Phone Number is Required"),
}).required();