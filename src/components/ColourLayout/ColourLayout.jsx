// eslint-disable-next-line react/prop-types
const ColourLayout = () => {
    return (
        <div className="fixed w-full h-full top-0 left-0 isolate bg-white -z-10">
            <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                aria-hidden="true">
                <div
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                ></div>
            </div>
        </div>
    )
}

export default ColourLayout;