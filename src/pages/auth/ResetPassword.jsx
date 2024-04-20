import {AuthLayout} from "@/components/Layouts/AuthLayout.jsx";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import SubmitButton from "@/components/Form/SubmitButton.jsx";
import InputField from "@/components/Form/InputField.jsx";
import api from "@/API/api.js";
import resetPasswordFormSchema from "@/formSchema/resetPasswordFormSchema.js";
import {useSearchParams} from "react-router-dom";

const ResetPassword = () => {
    const [params] = useSearchParams();
    const email = params.get('email');
    const token = params.get('token');

    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(resetPasswordFormSchema),
        defaultValues: {
            email: email,
            password: "",
            confirm_password: "",
            token: "",
        }
    });

    const send = async (data) => {
        try {
            const {password, confirm_password} = data;
            // console.log(password, confirm_password, email, token);
            return await api().post("/reset-password", {confirm_password, password, token, email});
        } catch (e) {
            console.log("Message: ", e);

        }
    }
    return (
        <AuthLayout
            title="Reset Password?"
            handleSubmit={handleSubmit(send)}
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
                        readOnly={true}
                        error={errors.email?.message}
                    />
                )}
            />

            <Controller
                name="password"
                control={control}
                render={({field}) => (
                    <InputField
                        label="New Password"
                        name={field.name}
                        autoComplete="new-password"
                        value={field.value}
                        handleOnChange={field.onChange}
                        type="password"
                        error={errors.password?.message}
                    />
                )}
            />

            <Controller
                name="confirm_password"
                control={control}
                render={({field}) => (
                    <InputField
                        label="Confirm Password"
                        name={field.name}
                        autoComplete="new-password"
                        value={field.value}
                        handleOnChange={field.onChange}
                        type="password"
                        error={errors.confirm_password?.message}
                    />
                )}
            />
            <SubmitButton>
                Send
            </SubmitButton>
        </AuthLayout>
    )
}

export default ResetPassword;