import { useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import addUserFormSchema from "@/formSchema/addUserFormSchema.js";
import SubmitButton from "@/components/Form/SubmitButton.jsx";
import DashboardLayout from "@/components/Layouts/DashboardLayout.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {Button} from "@/components/ui/button.jsx";
import {addUser} from "@/API/AuthApi.js";
import UserForm from "@/components/Modules/User/UserForm.jsx";

const AddUser = () => {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false)

    const form = useForm({
        resolver: yupResolver(addUserFormSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            address: "",
            gender:"",
            phone_number:"",
            date_of_birth:"",
            email: "",
            username: "",
            password: "",
            confirm_password: "",
            role:""
        }
    });

    const handleAddUser = async (data) => {
        setIsLoading(true);
        await addUser(data);
        console.log(data);
        setIsLoading(false);
        navigate("/users");
    };

    return (
        <DashboardLayout title="Add User">
            <UserForm handleSubmit={form.handleSubmit(handleAddUser)} form={form} isEditForm={false}>
                <SubmitButton>
                    {isLoading ? 'Loading....' : 'Add user'}
                </SubmitButton>

                <div className="flex justify-center">
                    <Button variant={"link"} asChild>
                        <Link to="/users">
                            Cancel
                        </Link>
                    </Button>
                </div>
            </UserForm>
        </DashboardLayout>
    );
};

export default AddUser;