const SigninComponent=()=>{
    return(
        <div className="w-screen h-screen flex justify-center items-center">

            <div className="border-1 border-slate-500 rounded-xl w-72 h-80 flex flex-col items-center">
                <div className="m-3 text-2xl font-semibold text-slate-300">
                    Signin
                </div>

                <div className="flex flex-col items-center mt-3">
                    <input type="email" className="w-56 h-7 rounded-sm border-1 p-3 border-slate-300 text-slate-500" placeholder="Enter Your Email" required/>
                    <input type="password" className="mt-4 w-56 h-7 rounded-sm border-1 p-3 border-slate-300 text-slate-500" placeholder="Enter Your Password" required/>
                </div>

                <div>
                    <button className="mt-5 text-md font-semibold text-slate-200 w-32 border-1 p-2 rounded-md bg-slate-500 hover:bg-slate-800 hover:cursor-pointer">Signin</button>
                </div>
            </div>
            
        </div>
    )
}

export default SigninComponent;