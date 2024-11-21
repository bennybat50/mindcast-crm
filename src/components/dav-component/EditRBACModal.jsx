 
const EditRBACModal = ({ isOpen, onClose}) => {
  if (!isOpen) return null;
  return (
    <div className="fixed -inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 w-screen">
    <div className="bg-white rounded-lg shadow-lg w-full max-w-[730px] h-[500px] mx-auto p-4 relative">
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl bg-[#f6f6f6] rounded-lg px-2"
      >
        &times;
      </button>
      <h2 className="text-lg font-semibold mb-4">Edit Role_Based Access Control (RBAC)</h2>
     <form action="">
     <div className="">
        <label className="block text-sm font-medium py-3">Admin Roles</label>
        <input type="text"
          className="w-full max-w-[730px] bg-[#f6f6f6] rounded-xl p-5 pb-10 outline-none"
          placeholder="Set roles" />
      </div>
      <div className="">
        <label className="block text-sm font-medium py-3">Moderator Roles</label>
        <input type="text"
          className="w-full max-w-[730px] bg-[#f6f6f6] rounded-xl p-5 pb-10 outline-none"
          placeholder="Set roles" />
      </div>
      <div className="">
        <label className="block text-sm font-medium py-3">User Roles</label>
        <input type="text"
          className="w-full max-w-[730px] bg-[#f6f6f6] rounded-xl p-5 pb-10 outline-none "
          placeholder="Set roles" />
      </div>
      <button  className="bg-[#0a0e16] text-white rounded-full px-10 py-3 absolute right-5 mt-4 ">Submit</button>
     </form>
    </div>
  </div>
  )
}

export default EditRBACModal