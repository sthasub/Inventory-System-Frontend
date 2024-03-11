import {Controller} from "react-hook-form";
import InputField from "@/components/Form/InputField.jsx";
import TextArea from "@/components/Form/TextArea.jsx";
import DropdownField from "@/components/Form/DropdownField.jsx";

const UserForm = ({handleSubmit, form, isEditForm, children}) => {
    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <Controller
                name="first_name"
                control={form.control}
                render={({field}) => (
                    <InputField
                        label="First Name"
                        name={field.name}
                        autoComplete="given-name"
                        value={field.value}
                        handleOnChange={field.onChange}
                        type="text"
                        required
                        error={form.formState.errors.first_name?.message}
                    />
                )}
            />

            <Controller
                name="last_name"
                control={form.control}
                render={({field}) => (
                    <InputField
                        label="Last Name"
                        name={field.name}
                        autoComplete="family-name"
                        value={field.value}
                        handleOnChange={field.onChange}
                        error={form.formState.errors.last_name?.message}
                        type="text"
                    />
                )}
            />

            <Controller
                name="email"
                control={form.control}
                render={({field}) => (
                    <InputField
                        label="Email"
                        name={field.name}
                        autoComplete="email"
                        value={field.value}
                        handleOnChange={field.onChange}
                        error={form.formState.errors.email?.message}
                        type="email"
                    />
                )}
            />

            <Controller
                name="username"
                control={form.control}
                render={({field}) => (
                    <InputField
                        label="Username"
                        name={field.name}
                        autoComplete="username"
                        value={field.value}
                        handleOnChange={field.onChange}
                        error={form.formState.errors.username?.message}
                        type="text"
                    />
                )}
            />

            <Controller
                name="address"
                control={form.control}
                render={({field}) => (
                    <TextArea
                        label="Full Address"
                        name={field.name}
                        autoComplete="address-line1"
                        value={field.value}
                        onChange={field.onChange}
                        error={form.formState.errors.address?.message}
                    />
                )}
            />

            <Controller
                name="phone_number"
                control={form.control}
                render={({field}) => (
                    <InputField
                        label="Phone Number"
                        name={field.name}
                        autoComplete="tel"
                        value={field.value}
                        handleOnChange={field.onChange}
                        error={form.formState.errors.phone_number?.message}
                        type="text"
                    />
                )}
            />

            <Controller
                name="gender"
                control={form.control}
                render={({field}) => (
                    <DropdownField
                        label="Gender"
                        name={field.name}
                        autoComplete="sex"
                        value={field.value}
                        handleOnChange={field.onChange}
                        error={form.formState.errors.gender?.message}
                        options={{
                            male: "Male",
                            female: "Female",
                            other: "Öther"
                        }}
                        placeholder={"Prefer not to say"}
                    />
                )}
            />

            <Controller
                name="date_of_birth"
                control={form.control}
                render={({field}) => (
                    <InputField
                        label="Date of Birth"
                        name={field.name}
                        autoComplete="bday"
                        value={field.value}
                        handleOnChange={field.onChange}
                        error={form.formState.errors.date_of_birth?.message}
                        type="date"
                    />
                )}
            />

            <Controller
                name="role"
                control={form.control}
                render={({field}) => (
                    <DropdownField
                        label="Role"
                        name={field.name}
                        autoComplete="new-password"
                        value={field.value}
                        handleOnChange={field.onChange}
                        error={form.formState.errors.role?.message}
                        options={{
                            admin: "Admin",
                            manager: "Manager",
                            user: "user"
                        }}
                        placeholder={"Select Role"}
                        required
                    />
                )}
            />

            {isEditForm === false && (
                <Controller
                    name="password"
                    control={form.control}
                    render={({field}) => (
                        <InputField
                            label="Password"
                            name={field.name}
                            autoComplete="new-password"
                            value={field.value}
                            handleOnChange={field.onChange}
                            error={form.formState.errors.password?.message}
                            type="password"
                        />
                    )}
                />
            )}

            {isEditForm === false && (
                <Controller
                    name="confirm_password"
                    control={form.control}
                    render={({field}) => (
                        <InputField
                            label="Confirm Password"
                            name={field.name}
                            autoComplete="new-password"
                            value={field.value}
                            handleOnChange={field.onChange}
                            error={form.formState.errors.confirm_password?.message}
                            type="password"
                        />
                    )}
                />
            )}


            {children}
        </form>
    );
};

export default UserForm;