import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import addUserFormSchema from "@/formSchema/addUserFormSchema.js";
import SubmitButton from "@/components/Form/SubmitButton.jsx";
import DashboardLayout from "@/components/Layouts/DashboardLayout.jsx";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import {Button} from "@/components/ui/button.jsx";
import {addUser, editUser} from "@/API/AuthApi.js";
import UserForm from "@/components/Modules/User/UserForm.jsx";
import {getUser} from "@/API/UsersApi.js";
import updateUserFormSchema from "@/formSchema/updateUserFormSchema.js";
import {FaSpinner} from "react-icons/fa";

const EditUser = () => {
    const navigate = useNavigate()
    const params = useParams();

    const [isLoading, setIsLoading] = useState(false)
    const [userLoading, setUserLoading] = useState(true);

    const form = useForm({
        resolver: yupResolver(updateUserFormSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            address: "",
            gender: "",
            phone_number: "",
            date_of_birth: "",
            email: "",
            username: "",
            role: "",
        }
    });

    const setFormData = useCallback((data) => {
        form.setValue("first_name", data.name?.first_name || "")
        form.setValue("last_name", data.name?.last_name || "")
        form.setValue("address", data.address || "")
        form.setValue("gender", data.gender || "")
        form.setValue("phone_number", data.phone_number || "")
        form.setValue("date_of_birth", data.date_of_birth || "")
        form.setValue("email", data.email || "")
        form.setValue("username", data.username || "")
        form.setValue("role", data.role || "")
    }, [form])

    useEffect(() => {
        getUser(params.id).then((data) => {
            setFormData(data)
            setUserLoading(false);
        }).catch(e => {
            console.error(e)
            navigate("/not-found")
        });
    }, [navigate, params.id, setFormData]);

    const handleEditUser = useCallback(async (data) => {
        setIsLoading(true);
        await editUser(data, params.id);
        console.log(data);
        setIsLoading(false);
        navigate(`/users/${params.id}`);
    }, [navigate, params.id])

    return (
        <DashboardLayout title="Add User">
            {userLoading ? (
                <div className="flex items-center justify-center">
                    <FaSpinner className="size-6 animate-[spin_0.5s_linear_infinite]"/>
                </div>
            ) : (<UserForm handleSubmit={form.handleSubmit(handleEditUser)} form={form} isEditForm={true}>
                <SubmitButton>
                    {isLoading ? 'Loading....' : 'Update user'}
                </SubmitButton>

                <div className="flex justify-center">
                    <Button variant={"link"} asChild>
                        <Link to={`/users/${params.id}`}>
                            Cancel
                        </Link>
                    </Button>
                </div>
            </UserForm>)}
        </DashboardLayout>
    );
};

export default EditUser;