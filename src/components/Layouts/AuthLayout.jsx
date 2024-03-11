import {AuthHeader} from "@/components/Layouts/AuthHeader.jsx";
import AuthForm from "@/components/Layouts/AuthForm.jsx";
import ColourLayout from "@/components/ColourLayout/ColourLayout.jsx";

// eslint-disable-next-line react/prop-types
export const AuthLayout = ({
                               children,
                               title,
                               actionLinkHref,
                               actionText,
                               actionLinkText,
                               handleSubmit,
                               successMessage = "",
                               errorMessage = "",
                           }) => {

    return (
        <main className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <ColourLayout/>

            <AuthHeader title={title}/>
            <AuthForm
                actionLinkHref={actionLinkHref}
                actionText={actionText}
                actionLinkText={actionLinkText}
                handleSubmit={handleSubmit}
                successMessage={successMessage}
                errorMessage={errorMessage}
            >
                {children}
            </AuthForm>
        </main>
    )
}