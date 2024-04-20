import {Link, NavLink} from "react-router-dom";
import {DashboardIcon} from "@radix-ui/react-icons";
import {useMemo} from "react";
import {HiUsers} from "react-icons/hi2";
import {BiSolidCategory} from "react-icons/bi";

const SideNavigationBar = () => {
    const menus = useMemo(() => [
        {
            href: "/dashboard",
            label: "Dashboard",
            icon: <DashboardIcon/>
        },
        {
            href: "/users",
            label: "Users Management",
            icon: <HiUsers/>
        },
        {
            href: "/category",
            label: "Category",
            icon: <BiSolidCategory/>
        },
        {
            href: "/",
            label: "Dashboard",
            icon: <DashboardIcon/>
        },
        {
            href: "/",
            label: "Dashboard",
            icon: <DashboardIcon/>
        },
        {
            href: "/",
            label: "Dashboard",
            icon: <DashboardIcon/>
        },
        {
            href: "/",
            label: "Dashboard",
            icon: <DashboardIcon/>
        }
    ], [])

    return (
        <div className="flex flex-col isolate text-gray-700 bg-white shadow h-screen">
            {/*Side Nav Bar*/}

            <div className="h-16 flex items-center w-full">
                {/*Logo Section */}
                <Link to="/" className="h-6 w-6 mx-auto">
                    <img
                        className="h-6 w-6 mx-auto"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/512px-Svelte_Logo.svg.png"
                        alt="svelte logo"/>
                </Link>
            </div>

            <nav>
                <ul>
                    {menus.map((menuItem, index) => (
                        <li key={index} className="hover:bg-gray-100">
                            <NavLink to={menuItem.href}
                                     className={`sidebar-menu
                                      px-6 py-3 gap-2 text-sm  flex items-center focus:text-orange-500 border-b
                                  `}>
                                {menuItem.icon}
                                {menuItem.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

        </div>);
};

export default SideNavigationBar;

//   <li className="hover:bg-gray-100">
//                         <a
//                             href="."
//                             className="h-16 px-6  flex justify-center items-center w-full
// 					focus:text-orange-500">
//                             <svg
//                                 className="h-5 w-5"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="24"
//                                 height="24"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round">
//                                 <polyline
//                                     points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
//                                 <path
//                                     d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0
// 							2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0
// 							0-1.79 1.11z"></path>
//                             </svg>
//
//                         </a>
//                     </li>
//
//                     <li className="hover:bg-gray-100">
//                         <a
//                             href="."
//                             className="h-16 px-6  flex justify-center items-center w-full
// 					focus:text-orange-500">
//                             <svg
//                                 className="h-5 w-5"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="24"
//                                 height="24"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round">
//                                 <path
//                                     d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
//                             </svg>
//
//                         </a>
//                     </li>
//
//                     <li className="hover:bg-gray-100">
//                         <a
//                             href="."
//                             className="h-16 px-6  flex justify-center items-center w-full
// 					focus:text-orange-500">
//
//                             <svg
//                                 className="h-5 w-5"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="24"
//                                 height="24"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round">
//                                 <polyline points="3 6 5 6 21 6"></polyline>
//                                 <path
//                                     d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2
// 							0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
//                             </svg>
//
//                         </a>
//                     </li>
//
//                     <li className="hover:bg-gray-100">
//                         <a
//                             href="."
//                             className="h-16 px-6  flex justify-center items-center w-full
// 					focus:text-orange-500">
//                             <svg
//                                 className="h-5 w-5"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="24"
//                                 height="24"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round">
//                                 <circle cx="9" cy="21" r="1"></circle>
//                                 <circle cx="20" cy="21" r="1"></circle>
//                                 <path
//                                     d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0
// 							2-1.61L23 6H6"></path>
//                             </svg>
//
//                         </a>
//                     </li>
//
//                     <li className="hover:bg-gray-100">
//                         <a
//                             href="."
//                             className="h-16 px-6  flex justify-center items-center w-full
// 					focus:text-orange-500">
//                             <svg
//                                 className="h-5 w-5"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="24"
//                                 height="24"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round">
//                                 <circle cx="12" cy="12" r="3"></circle>
//                                 <path
//                                     d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1
// 							0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0
// 							0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2
// 							2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0
// 							0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1
// 							0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0
// 							0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65
// 							0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0
// 							1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0
// 							1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2
// 							0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0
// 							1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0
// 							2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0
// 							0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65
// 							1.65 0 0 0-1.51 1z"></path>
//                             </svg>
//                         </a>
//                     </li>
//
//                     <li className="hover:bg-gray-100">
//                         <a
//                             href="."
//                             className="h-16 px-6  flex justify-center items-center w-full
// 					focus:text-orange-500">
//                             <svg
//                                 className="h-5 w-5"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="24"
//                                 height="24"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round">
//                                 <path
//                                     d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
//                                 <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
//                             </svg>
//                         </a>
//                     </li>