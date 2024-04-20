import Welcome from "@/pages/Welcome.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "@/pages/auth/SignIn.jsx";
import SignUp from "@/pages/auth/SignUp.jsx";
import ForgetPassword from "@/pages/auth/ForgetPassword.jsx";
import ResetPassword from "@/pages/auth/ResetPassword.jsx";
import Dashboard from "@/pages/Dashboard.jsx";
import {useEffect, useState} from "react";
import {currentUser} from "@/API/UsersApi.js";
import ProtectedRoute from "@/components/Layouts/ProtectedRoute.jsx";
import {FaSpinner} from "react-icons/fa";
import {useStore} from "@/store/store.js";
import AddUser from "@/pages/users/AddUser.jsx";
import UsersList from "@/pages/users/UsersList.jsx";
import UserDetails from "@/pages/users/UserDetails.jsx";
import EditUser from "@/pages/users/EditUser.jsx";
import CategoryList from "@/pages/category/CategoryList.jsx";
import AddCategory from "@/pages/category/AddCategory.jsx";

function App() {
    const [loading, setLoading] = useState(true);

    const {setUser, setIsLoggedIn} = useStore()

    useEffect(() => {
        currentUser().then((data) => {
            console.log(data, "users data")
            setUser(data);
            setIsLoggedIn(true)
            setLoading(false);
        }).catch(e => {
            console.error(e)
            setLoading(false)
        });
    }, [setIsLoggedIn, setUser]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen ">
                <div className="mr-4 font-bold text-2xl">Loading</div>
                <FaSpinner className="size-12 animate-[spin_1s_linear_infinite]"/>
            </div>
        )
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/forget-password" element={<ForgetPassword/>}/>
                <Route path="/reset-password" element={<ResetPassword/>}/>

                <Route element={<ProtectedRoute/>}>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>

                    <Route path="/users" element={<UsersList/>}/>
                    <Route path="/users/add" element={<AddUser/>}/>
                    <Route path="/users/:id" element={<UserDetails/>}/>
                    <Route path="/users/:id/edit" element={<EditUser/>}/>

                    <Route path="/category" element={<CategoryList/>}/>
                    <Route path="/category/add" element={<AddCategory/>}/>
                </Route>

                <Route path={"*"} element={<div>Page not found.</div>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default App
