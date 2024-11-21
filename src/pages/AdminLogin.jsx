import { useState } from 'react'

const AdminLogin = () => {
    const [adminemail, setAdminemail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Hardcoded admin credentials (for demonstration purposes)
    const adminCredentials = {
        id:1,
        adminemail: "admin123@gmail.com",
        password: "admin123",
    };

    const handleLogin = (e) => {
        e.preventDefault();

        // Check if the entered credentials match the hardcoded admin credentials
        if (adminemail === adminCredentials.adminemail && password === adminCredentials.password) {
            const adminData = { adminemail, loggedIn: true };

            // Store admin information in localStorage
            localStorage.setItem("admin", JSON.stringify(adminData));

            // Redirect to admin dashboard or any other page
            window.location.href = "/layout"; // Replace with your admin dashboard route
        } else {
            setError("Invalid username or password");
        }
    };
    return (
        <>
            <div className="fixed -inset-0 flex items-center justify-center bg-[rgb(165,165,165)] z-50 w-screen">
                <div className="bg-white w-full max-w-[400px] h-[300px] rounded-xl p-5">
                    <h2 className='font-bold text-xl mb-3'>Admin Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="">
                            <label htmlFor="" className='block text-sm font-medium py-2'>Email :  </label>
                            <input type="text"
                                className='p-3 outline-none bg-[#dedede] rounded-md pr-44'
                                placeholder='email'
                                value={adminemail}
                                onChange={(e) => setAdminemail(e.target.value)}
                                required />
                        </div>
                        <div className="">
                            <label htmlFor="" className='block text-sm font-medium py-2'>Password :  </label>
                            <input type="password"
                                className='p-3 outline-none bg-[#dedede] rounded-md pr-44'
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required />
                        </div>
                        <button className='bg-[#40176c] text-white py-2 px-4 rounded-md mt-5 absolute right-[500px]'>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminLogin