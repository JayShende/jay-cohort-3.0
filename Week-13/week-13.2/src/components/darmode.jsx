export const Mode=()=>{
    function fun()
    {
        document.querySelector("html").classList.toggle("dark")
    }
    return(
        <div className="bg-[#F5F5F5] h-screen dark:bg-[#4C4646] text-blue-500 dark:text-white">
            <div>
                <h1>Hello World</h1>
                <button onClick={fun}>Toggle Mode</button>
            </div>
        </div>
    )
}