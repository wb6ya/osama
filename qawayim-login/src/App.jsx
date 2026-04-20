import React, { useState } from 'react';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('بيانات الدخول:', formData);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden font-sans text-white bg-slate-950">
      <video
        autoPlay
        muted
        playsInline
        loop 
        className="absolute top-0 left-0 w-full h-full object-contain z-0"
        poster="/fallback-image.jpg" 
      >
        <source src="/your-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      <div className="relative z-10 flex w-full h-full">

        <div className="h-full md:w-[500px] w-full md:pl-20 flex flex-col justify-center items-start">
          <div className="h-screen w-full bg-black/30 backdrop-blur-xl border-r border-white/10 p-10 flex flex-col justify-center rounded-none shadow-[20px_0_50px_rgba(0,0,0,0.5)]">
            
            <div className="w-full max-w-sm mx-auto flex flex-col">
              <div className="flex justify-center mb-10">
                <img src="/5.png" alt="Qawayim Logo" className="h-20 w-auto" />
              </div>
              <div className="text-center mb-10">
                <h2 className="text-3xl font-semibold mb-2">Sign In</h2>
                <p className="text-sm text-gray-300">Welcome Back to qawayim-Master</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-1 pl-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-mail"
                    className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#4cb5a8] focus:ring-1 focus:ring-[#4cb5a8] transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 pl-1">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Password"
                      className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#4cb5a8] focus:ring-1 focus:ring-[#4cb5a8] transition-colors"
                      required
                    />
                    
                    <button 
                      type="button" 
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      {showPassword ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )}
                    </button>
                  </div>
                  
                  <div className="flex justify-end mt-2">
                    <a href="#" className="text-xs text-[#4cb5a8] hover:underline hover:text-white transition-colors">
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#4cb5a8] hover:bg-[#3ea094] text-white font-medium py-3 rounded-lg transition-colors mt-4 shadow-lg text-lg"
                >
                  Sign In
                </button>
              </form>
              <div className="text-center mt-8 text-sm">
                <p className="text-gray-300">
                  Don't have an account yet? <a href="#" className="text-[#4cb5a8] hover:underline font-medium">Sign Up</a>
                </p>
                <p className="text-xs text-gray-400 mt-3">Powered By qawayim-Master</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;