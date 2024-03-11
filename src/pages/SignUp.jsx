import {AuthLayout} from "@/components/Layouts/AuthLayout.jsx";
import InputField from "@/components/Form/InputField.jsx";
import {yupResolver} from "@hookform/resolvers/yup";
import signUpFormSchema from "@/formSchema/signUpFormSchema.js";
import {Controller, useForm} from "react-hook-form";
import SubmitButton from "@/components/Form/SubmitButton.jsx";
import {signUpApi} from "@/API/AuthApi.js";
import {useNavigate} from "react-router-dom";


const SignUp = () => {
    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(signUpFormSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            username: "",
            password: "",
            confirm_password: "",
        }
    })
    const handleSignUp = async (data) => {
        await signUpApi(data);
        navigate("/signin");
    }
    return (
        <AuthLayout
            title="Sign Up"
            actionLinkText="Sign In"
            actionLinkHref="/signin"
            actionText="Already have account?"
            handleSubmit={handleSubmit(handleSignUp)}
        >
            <Controller
                name="first_name"
                control={control}
                render={({field}) => (
                    <InputField
                        label="First Name"
                        name={field.name}
                        autoComplete="given-name"
                        value={field.value}
                        handleOnChange={field.onChange}
                        type="text"
                        error={errors.first_name?.message}
                    />
                )}
            />

            <Controller
                name="last_name"
                control={control}
                render={({field}) => (
                    <InputField
                        label="Last Name"
                        name={field.name}
                        autoComplete="family-name"
                        value={field.value}
                        handleOnChange={field.onChange}
                        error={errors.last_name?.message}
                        type="text"
                    />
                )}
            />

            <Controller
                name="email"
                control={control}
                render={({field}) => (
                    <InputField
                        label="Email"
                        name={field.name}
                        autoComplete="email"
                        value={field.value}
                        handleOnChange={field.onChange}
                        error={errors.email?.message}

                        type="email"
                    />
                )}
            />

            <Controller
                name="username"
                control={control}
                render={({field}) => (
                    <InputField
                        label="Username"
                        name={field.name}
                        autoComplete="username"
                        value={field.value}
                        handleOnChange={field.onChange}
                        error={errors.username?.message}

                        type="text"
                    />
                )}
            />

            <Controller
                name="password"
                control={control}
                render={({field}) => (
                    <InputField
                        label="Password"
                        name={field.name}
                        autoComplete="new-password"
                        value={field.value}
                        handleOnChange={field.onChange}
                        error={errors.password?.message}

                        type="password"
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
                        error={errors.confirm_password?.message}

                        type="password"
                    />
                )}
            />

            <SubmitButton>
                Sign Up
            </SubmitButton>

        </AuthLayout>
    );
}

export default SignUp;