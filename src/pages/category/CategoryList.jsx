import DashboardLayout from "@/components/Layouts/DashboardLayout.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getCategories} from "@/API/Category.js";
import Table from "@/components/Table/Table.jsx";
import {deleteUser} from "@/API/UsersApi.js";

const CategoryList = () => {
    const [categories, setCategories] = useState();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        getCategories().then((data) => {
            console.log(data);
            setCategories(data);
            setLoading(false);
        });
    }, []);

    const handleOnDelete = async (e, item) => {
        e.stopPropagation();
        const result = confirm("Are you sure you want to delete this user?")
        if (result) {
            // api call
            const result = await deleteUser(item.id);
            console.log(result);
            window.location.reload();

            // detail
            // navigate("/users")
        }
    }

    const handleOnEdit = (e, item) => {
        e.stopPropagation();
        e.preventDefault();
        navigate(`/categories/${item.id}/edit`);
    }

    const headers = ['Id', 'Image', 'Category', 'Modify'];

    return (
        <DashboardLayout title="Categories">
            <div className="flex justify-end w-full my-1">
                <Link to={"/category/add"}
                      className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Add Category
                </Link>
            </div>

            <Table data={categories}

                   loading={loading}
                   itemsParser={(item) => {
                       return {
                           id: item.id,
                           image: item.image,
                           name: item.name,
                       };
                   }}
                   itemElementParser={(key, value)=>{
                       if(key === 'image') {
                           return <img src={value} alt="Category Image" className="w-[50px] h-auto"/>
                       }
                       return value;
                   }}
                   headers={headers}
                   modifyElement={(item) => (
                       <>
                           <Link to={`/categories/${item.id}/edit`} onClick={(e) => handleOnEdit(e, item)}
                                 className="text-blue-400 hover:text-blue-600 underline">
                               Edit
                           </Link>
                           <button onClick={(e) => handleOnDelete(e, item)}
                                   className="text-blue-400 hover:text-blue-600 underline pl-6">
                               Remove
                           </button>
                       </>
                   )}/>

            {/* <div>
                <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 text-center dark:text-gray-50">Items</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8 md:mt-10">
                <div className="bg-gray-50 dark:bg-gray-800 p-8">
                    <div className="">
                        <h2 className="text-xl text-gray-600 dark:text-white">Lounge Chair</h2>
                        <p className="text-xl font-semibold text-gray-800 dark:text-white mt-2"></p>
                    </div>
                    <div className="flex justify-center items-center mt-8 md:mt-24">
                        <img className=""
                             src="https://i.ibb.co/8403ZFZ/pexels-hormel-2762247-removebg-preview-2-1.png"
                             alt="A chair with designed back" role="img"/>
                    </div>
                    <div className="flex justify-end items-center space-x-2 mt-16 md:mt-32">
                        <button aria-label="show in red color"
                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="5" r="4.75" fill="#DC2626" stroke="#6B7280"
                                        strokeWidth="0.5"/>
                            </svg>
                        </button>
                        <button aria-label="show in white color"
                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="5" r="4.75" fill="white" stroke="#6B7280" strokeWidth="0.5"/>
                            </svg>
                        </button>
                        <button aria-label="show in black color"
                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="5" r="4.75" fill="#111827" stroke="#6B7280"
                                        strokeWidth="0.5"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-8">
                    <div className="">
                        <h2 className="text-xl text-gray-600 dark:text-white">Lounge Chair</h2>
                        <p className="text-xl font-semibold text-gray-800 dark:text-white mt-2"></p>
                    </div>
                    <div className="flex justify-center items-center mt-8 md:mt-24">
                        <img className=""
                             src="https://i.ibb.co/WBdnRqb/eugene-chystiakov-3ne-Swyntb-Q8-unsplash-1-removebg-preview-2-1.png"
                             alt="A chair with wooden legs" role="img"/>
                    </div>
                    <div className="flex justify-end items-center space-x-2 mt-8 md:mt-24">
                        <button aria-label="show in white color"
                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="5" r="4.75" fill="white" stroke="#6B7280" strokeWidth="0.5"/>
                            </svg>
                        </button>
                        <button aria-label="show in black color"
                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="5" r="4.75" fill="#111827" stroke="#6B7280"
                                        strokeWidth="0.5"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-8">
                    <div className="">
                        <h2 className="text-xl text-gray-600 dark:text-white">Lounge Chair</h2>
                        <p className="text-xl font-semibold text-gray-800 dark:text-white mt-2"></p>
                    </div>
                    <div className="flex justify-center items-center mt-8 md:mt-24">
                        <img className=""
                             src="https://i.ibb.co/R2fbCvj/kari-shea-It-Mgg-D0-Egu-Y-unsplash-removebg-preview-2-1.png"
                             alt="A sofa chair with wooden legs" role="img"/>
                    </div>
                    <div className="flex justify-end items-center space-x-2 mt-16 md:mt-32">
                        <button aria-label="show in green color"
                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="5" r="4.75" fill="#047857" stroke="#6B7280"
                                        strokeWidth="0.5"/>
                            </svg>
                        </button>
                        <button aria-label="show in brown color"
                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="5" r="4.75" fill="#92400E" stroke="#6B7280"
                                        strokeWidth="0.5"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 lg:gap-8 mt-4 md:mt-6 lg:mt-8">
                <div className="bg-gray-50 dark:bg-gray-800 p-8">
                    <div>
                        <h2 className="text-xl leading-tight text-gray-600 dark:text-white">Sectional Sofa</h2>
                        <p className="text-xl font-semibold text-gray-800 dark:text-white mt-2"></p>
                    </div>
                    <div className="flex justify-center items-center mt-28 md:mt-3">
                        <img src="https://i.ibb.co/CPdBFwZ/pexels-pixabay-276583-removebg-preview-1-1.png"
                             alt="A large sectional sofa" role="img"/>
                    </div>
                    <div className="flex justify-end items-center space-x-2 mt-36 md:mt-12">
                        <button aria-label="show in yellow color"
                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="5" r="4.75" fill="#F59E0B" stroke="#6B7280"
                                        strokeWidth="0.5"/>
                            </svg>
                        </button>
                        <button aria-label="show in light gray color"
                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="5" r="4.75" fill="#9CA3AF" stroke="#6B7280"
                                        strokeWidth="0.5"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-8">
                    <div>
                        <h2 className="text-xl leading-tight text-gray-600 dark:text-white">Two Seater Sofa</h2>
                        <p className="text-xl font-semibold text-gray-800 dark:text-white mt-2"></p>
                    </div>
                    <div className="flex justify-center items-center mt-28 md:mt-1">
                        <img
                            src="https://i.ibb.co/238nZzf/pexels-andrea-piacquadio-3757055-removebg-preview-1-1.png"
                            alt="A beautiful two seater sofa" role="img"/>
                    </div>
                    <div className="flex justify-end items-center space-x-2 mt-36 md:mt-12">
                        <button aria-label="show in black color"
                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="5" r="4.75" fill="#111827" stroke="#6B7280"
                                        strokeWidth="0.5"/>
                            </svg>
                        </button>
                        <button aria-label="show in green color"
                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="5" r="4.75" fill="#047857" stroke="#6B7280"
                                        strokeWidth="0.5"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div> */}
        </DashboardLayout>
    );
};

export default CategoryList;