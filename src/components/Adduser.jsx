import { useState } from 'react'

const Adduser = ({isOpen, onClose}) => {
  
  const [user, setUser] = useState({
    email:'',
    cuopon_code:''
  })

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  console.log(user)
  
  if (!isOpen) return null;
  return (
    <>
       <div className="fixed -inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 w-screen">
    <div className="bg-white rounded-lg shadow-lg w-full max-w-[370px] h-[320px] mx-auto p-4 relative">
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl bg-[#f6f6f6] rounded-lg px-2"
      >
        &times;
      </button>
      <h2 className="text-lg font-semibold mb-6">Add user</h2>
     <form action="">
      <div className="">
        <label className="block text-sm font-medium py-3">Email</label>
        <input type="email"
          className="w-full bg-[#f6f6f6] rounded-xl p-3 outline-none"
          placeholder="example@gamil.com"
          name='email'
          onChange={handleInput}/>
      </div>
      <div className="">
        <label className="block text-sm font-medium py-3">Coupon-code</label>
        <input type="text"
          className="w-full bg-[#f6f6f6] rounded-xl p-3 outline-none"
          placeholder="12****"
          name='cuopon_code'
          onChange={handleInput}/>
      </div>
      <button  className="bg-[#0a0e16] text-white rounded-full px-10 py-3 absolute right-5 mt-4 ">Submit</button>
     </form>
    </div>
  </div>  
    </>
  )
}

export default Adduser