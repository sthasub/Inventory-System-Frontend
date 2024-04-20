import {Link, useNavigate} from "react-router-dom";
import Table from "@/components/Table/Table.jsx";
import DashboardLayout from "@/components/Layouts/DashboardLayout.jsx";
import {useEffect, useState} from "react";
import {deleteUser, getUsers} from "@/API/UsersApi.js";

const UsersList = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [usersLoading, setUsersLoading] = useState(true);
    const headers = ['Id', 'Name', 'Username', 'Email', 'Role', 'Modify'];

    useEffect(() => {
        getUsers().then((data) => {
            setUsers(data);
            setUsersLoading(false);
        });
    }, []);

    const handleOnRowClick = (rowItem) => {
        navigate(`/users/${rowItem.id}`);
    }

    const handleOnEdit = (e, item) => {
        e.stopPropagation()
        e.preventDefault()

        // tracking code
        console.log(navigator)

        navigate(`/users/${item.id}/edit`)
    }

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

    return (
        <DashboardLayout title="Dashboard">
            <div className="flex justify-end w-full my-1">
                <Link to={"/users/add"}
                      className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Add User
                </Link>
            </div>

            <Table data={users}
                   loading={usersLoading}
                   itemsParser={(item) => {
                       return {
                           id: item.id,
                           name: (item.name.first_name || "") + " " + (item.name.last_name ?? ""),
                           username: item.username,
                           email: item.email,
                           role: item.role
                       };
                   }}
                   itemElementParser={(key, value)=>{
                       return value;
                   }}
                   headers={headers}
                   handleOnRowClick={handleOnRowClick}
                   modifyElement={(item) => (
                       <>
                           <Link to={`/users/${item.id}/edit`} onClick={(e) => handleOnEdit(e, item)}
                                 className="text-blue-400 hover:text-blue-600 underline">
                               Edit
                           </Link>
                           <button onClick={(e) => handleOnDelete(e, item)}
                                   className="text-blue-400 hover:text-blue-600 underline pl-6">
                               Remove
                           </button>
                       </>
                   )}/>
        </DashboardLayout>
    );
};

export default UsersList;