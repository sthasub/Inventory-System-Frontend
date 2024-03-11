import {Link} from "react-router-dom";
import SuccessAlert from "@/components/Alert/SuccessAlert.jsx";
import ErrorAlert from "@/components/Alert/ErrorAlert.jsx";

// eslint-disable-next-line react/prop-types
const AuthForm = ({children, actionText, actionLinkText, actionLinkHref, handleSubmit, successMessage, errorMessage}) => {
    const onSubmit = (e) =>{
        e.preventDefault();
        handleSubmit();
    }

    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            {successMessage && <SuccessAlert message={successMessage}/>}
            {errorMessage && <ErrorAlert message={errorMessage}/>}
            <form className="space-y-6" onSubmit={onSubmit}>
                {children}
            </form>
            <p className="mt-10 text-center text-sm text-gray-500">
                {actionText}{" "}
                <Link to={actionLinkHref} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                    {actionLinkText}
                </Link>
            </p>
        </div>
    )
}

export default AuthForm;