import {AuthLayout} from "@/components/Layouts/AuthLayout.jsx";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import forgetPasswordFormSchema from "@/formSchema/forgetPasswordFormSchema.js";
import SubmitButton from "@/components/Form/SubmitButton.jsx";
import InputField from "@/components/Form/InputField.jsx";
import api from "@/API/api.js";
import {useState} from "react";
import {FaSpinner} from "react-icons/fa";

const ForgetPassword = () => {
    const [success, setSuccess] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(forgetPasswordFormSchema),
        defaultValues: {
            email: "",
        }
    });

    const send = async (data) => {
        setSuccess('');
        setError('');
        try {
            const {email} = data;
            setLoading(true);
            const result = await api().post("/forget-password", {email});
            setSuccess(result.data.message);
            setLoading(false);
        } catch (e) {
            setError(e.response.data.error);
            setLoading(false);
        }
    }
    return (
        <AuthLayout
            title="Forgot Password?"
            handleSubmit={handleSubmit(send)}
            successMessage={success}
            errorMessage={error}
        >
            <Controller
                name="email"
                control={control}
                render={({field}) => (
                    <InputField
                        label="Email Address"
                        name={field.name}
                        autoComplete="email"
                        value={field.value}
                        handleOnChange={field.onChange}
                        type="email"
                        error={errors.email?.message}
                    />
                )}
            />
            <SubmitButton>
                {loading ? <FaSpinner className="size-6 animate-[spin_2s_linear_infinite]"/> : "Send"}
            </SubmitButton>
        </AuthLayout>
    )
}

export default ForgetPassword;