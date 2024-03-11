import {Navigate, Outlet} from "react-router-dom";
import {useStore} from "@/store/store.js";

const ProtectedRoute = () => {

    const {isLoggedIn} = useStore()
    if (!isLoggedIn) {
        return <Navigate to={"/signin"} replace/>;
    }

    return (
        <Outlet/>
    );
};

export default ProtectedRoute;