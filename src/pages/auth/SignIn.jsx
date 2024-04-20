import {AuthLayout} from "@/components/Layouts/AuthLayout.jsx";
import InputField from "@/components/Form/InputField.jsx";
import SubmitButton from "@/components/Form/SubmitButton.jsx";
import api from "@/API/api.js";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import signInFormSchema from "@/formSchema/signInFormSchema.js";
import {Link} from "react-router-dom";
import {useState} from "react";
import {FaSpinner} from "react-icons/fa";

const SignIn = () => {
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(signInFormSchema),
        defaultValues: {
            identity: "",
            password: "",

        }
    });
    const sign_in = async (data) => {
        setError('');
        setLoading('');
        try {
            const {identity, password} = data;
            const result = await api().post("/login", {identity, password});
            localStorage.setItem('token', result.data.token);
            window.location.href = "/dashboard"; //refresh the page
        } catch (e) {
            console.log("Message: ", e);
            setError(e.response.data.error);
            setLoading(false);
        }
    }

    return (
        <AuthLayout
            title="Sign in to your account"
            actionLinkText="Sign Up"
            actionLinkHref="/signup"
            actionText="Not a member?"
            errorMessage={error}
            handleSubmit={handleSubmit(sign_in)}>
            <Controller
                name="identity"
                control={control}
                render={({field}) => (
                    <InputField
                        label="Username or Email address"
                        name={field.name}
                        autoComplete="username"
                        value={field.value}
                        handleOnChange={field.onChange}
                        type="text"
                        error={errors.identity?.message}
                    />
                )}
            />

            <Controller
                name="password"
                control={control}
                render={({field}) => (
                    <div>
                        <InputField
                            label="Password"
                            name={field.name}
                            autoComplete="password"
                            value={field.value}
                            handleOnChange={field.onChange}
                            type="password"
                            error={errors.password?.message}
                        />
                        <Link to="/forget-password"
                              className="text-right block font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Forget Password?
                        </Link>
                    </div>
                )}
            />


            <SubmitButton>
                {loading ?  <FaSpinner className="size-6 animate-[spin_2s_linear_infinite]"/> : "Sign In"}
            </SubmitButton>

        </AuthLayout>
    )
}

export default SignIn;

// <AuthLayout
//     title="Sign in to your account"
//     actionLinkText="Sign Up"
//     actionLinkHref="/signup"
//     actionText="Not a member?"
//     handleSubmit={signIn}
// >
//     <InputField
//         label="Email address or Username"
//         name="identity"
//         autoComplete="email"
//         value={identity}
//         handleOnChange={e => setIdentity(e.target.value)}
//         required={true}
//         type="text"
//     />
//     <InputField
//         label="Password"
//         name="password"
//         autoComplete="current-password"
//         value={password}
//         handleOnChange={e => setPassword(e.target.value)}
//         required={true}
//         type="password"
//     />
//     <SubmitButton>
//         Sign In
//     </SubmitButton>
// </AuthLayout>