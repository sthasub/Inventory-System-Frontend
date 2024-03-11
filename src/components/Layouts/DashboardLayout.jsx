import SideNavigationBar from "@/components/Layouts/SideNavigationBar.jsx";
import NavBar from "@/components/Layouts/NavBar.jsx";
import ColourLayout from "@/components/ColourLayout/ColourLayout.jsx";

const DashboardLayout = ({children, title}) => {
    return (
        <main className="flex">
            <ColourLayout/>
            <aside className="w-[200px] z-50 fixed">
                <SideNavigationBar/>
            </aside>

            <section className="h-full w-full overflow-hidden ml-[200px]">
                <NavBar title={title}/>

                <div className="px-6 py-6 lg:px-8">
                    {children}
                </div>
            </section>
        </main>
    );
};

export default DashboardLayout;