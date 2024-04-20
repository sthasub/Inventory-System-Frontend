import * as yup from "yup";

export default yup.object({
    category_name:yup.string().required("Category name required")
});