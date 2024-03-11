import {BellIcon} from "@radix-ui/react-icons";
import {useStore} from "@/store/store.js";
import {useState} from "react";
import {logoutApi} from "@/API/AuthApi.js";
import {FaCog, FaUserAlt} from "react-icons/fa";
import {ImExit} from "react-icons/im";

const NavBar = ({title}) => {
    const {user, setIsLoggedIn, isLoggedIn} = useStore()

    const [isOpen, setIsOpen] = useState(false)

    const logout = () => {
        // call api
        logoutApi().then(() => {
            localStorage.removeItem("token");
            setIsLoggedIn(false);
            window.location.href = "/signin";
        })
    }

    return (
        isLoggedIn ? (
            <nav className="bg-gray-800 px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div>
                        <h1 className="text-xl font-semibold text-white">{title}</h1>
                    </div>

                    <div
                        className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button"
                                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="size-5"/>
                        </button>

                        {/*Profile dropdown */}
                        <div className="relative ml-3">
                            <div>
                                <button type="button"
                                        className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                        id="user-menu-button" aria-expanded="false" aria-haspopup="true"
                                        onClick={() => setIsOpen(!isOpen)}>
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">Open user menu</span>

                                    {user.profile_picture ? (
                                        <img className="h-8 w-8 rounded-full"
                                             src={user.profile_picture}
                                             alt=""/>
                                    ) : (
                                        <div
                                            className="h-8 w-8 rounded-full bg-white text-black flex justify-center items-center">
                                            {user.name.first_name[0]}{user.name.last_name[0]}
                                        </div>
                                    )}
                                </button>
                            </div>

                            {isOpen && (
                                <>
                                    <div className="w-screen h-screen fixed top-0 left-0 bg-black opacity-15 z-[100]"
                                         onClick={() => setIsOpen(false)}></div>
                                    <div
                                        className="absolute z-[101] right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                        role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button"
                                        tabIndex="-1">
                                        {/*Active: "bg-gray-100", Not Active: "" */}
                                        <a href="#"
                                           className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                                           role="menuitem"
                                           tabIndex="-1" id="user-menu-item-0">
                                            <FaUserAlt/> Your Profile</a>
                                        <a href="#"
                                           className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                                           role="menuitem"
                                           tabIndex="-1" id="user-menu-item-1">
                                            <FaCog/>
                                            Settings</a>
                                        <button
                                            className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                                            role="menuitem"
                                            tabIndex="-1" id="user-menu-item-2" onClick={logout}>
                                            <ImExit/>
                                            Sign out
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        ) : window.location.href = "/signin"

    );
};

export default NavBar;