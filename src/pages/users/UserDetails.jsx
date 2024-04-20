import DashboardLayout from "@/components/Layouts/DashboardLayout.jsx";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {deleteUser, getUser} from "@/API/UsersApi.js";
import {FaSpinner} from "react-icons/fa";
import {Button} from "@/components/ui/button.jsx";
import {IoArrowBack} from "react-icons/io5";

// string -> ""
// int -> 0
// array -> []
// object/json -> null {}
// boolean -> true/false

const UserDetails = () => {
    const params = useParams();
    const [userLoading, setUserLoading] = useState(true);
    const [user, setUser] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        getUser(params.id).then((data) => {
            setUser(data);
            setUserLoading(false);
        }).catch(e => {
            console.error(e)
            navigate("/not-found")
        });
    }, [navigate, params.id]);

    const handleOnDelete = async (e, item) => {
        e.stopPropagation();
        const result = confirm("Are you sure you want to delete this user?")
        if (result) {
            // api call
            const result = await deleteUser(item.id);
            console.log(result);
            navigate("/users")
        }
    }

    return (
        <DashboardLayout title="User Details">
            {userLoading ? (
                <div className="flex items-center justify-center">
                    <FaSpinner className="size-6 animate-[spin_0.5s_linear_infinite]"/>
                </div>
            ) : (
                <div>
                    <div className="flex justify-between mb-2.5">
                        <Link to="/users" className="border hover:border-gray-500 px-2 rounded-full flex items-center">
                            <IoArrowBack className="size-5"/>
                        </Link>
                        <div className="flex justify-end gap-2">
                            <Button asChild>
                                <Link to={`/users/${user.id}/edit`}>Edit</Link>
                            </Button>
                            <Button variant="destructive" onClick={(e) => handleOnDelete(e, user)}>
                                Delete
                            </Button>
                        </div>
                    </div>
                    <div className="bg-white p-3 shadow-sm rounded-sm">
                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span className="text-green-500">
                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                        </span>
                            <span className="tracking-wide">About</span>
                        </div>
                        <div className="text-gray-700">
                            <div className="grid md:grid-cols-2 text-sm">
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">First Name</div>
                                    <div className="px-4 py-2">{user.name.first_name}</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Last Name</div>
                                    <div className="px-4 py-2">{user.name.last_name}</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Gender</div>
                                    <div className="px-4 py-2">{user.gender}</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Contact No.</div>
                                    <div className="px-4 py-2">{user.phone_number}</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Address</div>
                                    <div className="px-4 py-2">{user.address}</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Email.</div>
                                    <div className="px-4 py-2">
                                        <Link className="text-blue-800"
                                              target="_blank" rel="noreferrer"
                                              to={`mailto:${user.email}`}>{user.email}</Link>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Birthday</div>
                                    <div className="px-4 py-2">{user.date_of_birth}</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </DashboardLayout>
    );
};

export default UserDetails;