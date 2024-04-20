import InputField from "@/components/Form/InputField";
import { Controller } from "react-hook-form";

export default function CategoryForm({handleSubmit, form, editForm, children}) {
  return (
    <form className="space-y-6" onSubmit={handleSubmit}> 
        <Controller
                name="category_name"
                control={form.control}
                render={({field}) => (
                    <InputField
                        label="Category Name"
                        name={field.name}
                        autoComplete="given-name"
                        value={field.value}
                        handleOnChange={field.onChange}
                        type="text"
                        required
                        error={form.formState.errors.category_name?.message}
                    />
                )}
            />

        {children}    
    </form>
  )
}
