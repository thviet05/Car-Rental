import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const Login = () => {
    const { setShowLogin, axios, setToken, navigate } = useAppContext();

    const [currentState, setCurrentState] = useState("login");
    
    // 1. Gộp tất cả dữ liệu form vào một state duy nhất
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    // 2. Một hàm duy nhất để cập nhật dữ liệu form
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            const url = `/api/user/${currentState}`;
            
            // 3. Chỉ gửi dữ liệu cần thiết
            const dataToSend = currentState === "login" 
                ? { email: formData.email, password: formData.password }
                : { name: formData.name, email: formData.email, password: formData.password };
            
            // Dùng console.log để kiểm tra dữ liệu gửi đi
            console.log("Data being sent:", dataToSend);

            const { data } = await axios.post(url, dataToSend);

            if (data.success) {
                navigate('/');
                setToken(data.token);
                localStorage.setItem('token', data.token);
                setShowLogin(false);
            } else {
                toast.error(data.message);
            }

        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div onClick={() => setShowLogin(false)} className='fixed top-0 bottom-0 left-0 right-0 z-[100] flex items-center text-sm text-gray-600 bg-black/50'>
            <form onSubmit={onSubmitHandler} onClick={(e) => e.stopPropagation()} className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white">
                <p className="text-2xl font-medium m-auto">
                    <span className="text-primary">User</span> {currentState === "login" ? "Login" : "Sign Up"}
                </p>

                {currentState === "register" && (
                    <div className="w-full">
                        <p>Name</p>
                        <input 
                            name="name" 
                            onChange={handleChange} 
                            value={formData.name} 
                            placeholder="type here" 
                            className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary" 
                            type="text" 
                            required 
                        />
                    </div>
                )}

                <div className="w-full ">
                    <p>Email</p>
                    <input 
                        name="email" 
                        onChange={handleChange} 
                        value={formData.email} 
                        placeholder="type here" 
                        className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary" 
                        type="email" 
                        required 
                    />
                </div>

                <div className="w-full ">
                    <p>Password</p>
                    <input 
                        name="password" 
                        onChange={handleChange} 
                        value={formData.password} 
                        placeholder="type here" 
                        className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary" 
                        type="password" 
                        required 
                    />
                </div>

                {currentState === "register" ? (
                    <p>
                        Already have account? <span onClick={() => setCurrentState("login")} className="text-primary cursor-pointer">click here</span>
                    </p>
                ) : (
                    <p>
                        Create an account? <span onClick={() => setCurrentState("register")} className="text-primary cursor-pointer">click here</span>
                    </p>
                )}
                <button type="submit" className="bg-primary hover:bg-blue-800 transition-all text-white w-full py-2 rounded-md cursor-pointer">
                    {currentState === "register" ? "Create Account" : "Login"}
                </button>
            </form>
        </div>
    );
}

export default Login