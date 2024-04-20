import DashboardLayout from "@/components/Layouts/DashboardLayout.jsx";
import {yupResolver} from "@hookform/resolvers/yup";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import { useForm } from "react-hook-form";
import addCategoryFormSchema from "@/formSchema/addCategoryFormSchema";
import CategoryForm from "@/components/Modules/Category/CategoryForm";
import {Button} from "@/components/ui/button.jsx";
import SubmitButton from "@/components/Form/SubmitButton.jsx";
import { addCategory } from "@/API/Category";

const AddCategory = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm({
        resolver: yupResolver(addCategoryFormSchema),
        defaultValues: {
            category_name: "",
        }
    });

    const handleAddCategory = async (data)=>{
            setIsLoading(true);
            await addCategory(data);
            console.log(data);
            setIsLoading(false);
            navigate("/category");
 
    }

    return (
        <DashboardLayout title="Add Category">
            <CategoryForm handleForm={form.handleSubmit(handleAddCategory)} form={form} editForm={false}>
            <SubmitButton>
                    {isLoading ? 'Loading....' : 'Add Category'}
                </SubmitButton>

                <div className="flex justify-center">
                    <Button variant={"link"} asChild>
                        <Link to="/category">
                            Cancel
                        </Link>
                    </Button>
                </div>
            </CategoryForm>
        </DashboardLayout>
    );
};

export default AddCategory;