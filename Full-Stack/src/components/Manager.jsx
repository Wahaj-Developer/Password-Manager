import React, { useEffect } from 'react'
import { useRef, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';

import { v4 as uuidv4 } from 'uuid';


const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setpasswordArray] = useState([])


const getpassword = async () => {
let req = await fetch("http://localhost:3000/");
 let passwords = await req.json();
    console.log(passwords);
    setpasswordArray(passwords)
}
  useEffect(() => {
    getpassword()
   

  }, [])

  
  
  const copyText = (text) => {
    toast('copy to clipboard!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick:false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",

    });
    navigator.clipboard.writeText(text)
  }


  const showPassword = () => {
    passwordRef.current.type = "text"
    if (ref.current.src.includes('/eyecross.png')) {
      ref.current.src = '/eye.png';
      passwordRef.current.type = "text"
    }
    else {
      ref.current.src = '/eyecross.png';
      passwordRef.current.type = "password"
    }

  }


  const savePassword = async () => {
if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {

    await fetch("http://localhost:3000/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: form.id})
    }) 

    setpasswordArray([...passwordArray, {...form , id: uuidv4()}]);
    
     await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...form, id: uuidv4() })
    }) 

   

 setform({ site: "", username: "", password: "" });
  }
  
  else{
toast.error("Please fill all fields");

  }

  }

  const deletePassword = async (id) => {
let confirmDelete = confirm("Are you sure you want to delete this password?");
if(confirmDelete) {
     setpasswordArray(passwordArray.filter(item => item.id!== id));
        let res = await fetch("http://localhost:3000/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id})
    }) 
  //   localStorage.setItem('passwords', JSON.stringify(passwordArray.filter(item => item.id !== id)));
    
}


  }

  const editPassword = (id) => {

     setform({...passwordArray.filter(i=>i.id===id)[0], id: id} );
     setpasswordArray(passwordArray.filter(item => item.id!== id));
    


  }

  const handelChange = (e) => {

    setform({ ...form, [e.target.name]: e.target.value })

  }



  return (
    <>
    <ToastContainer
  position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick={false}  // Changed from false to true
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="dark"
  transition="Bounce"
/>

      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div><div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>
       <div className=" p-2 pt-5 md:mycontainer min-h-[88.2vh] ">
        <h1 className='text-white text-4xl font-bold text-center'>
          <span className="text-green-700">&lt;</span>
          <span>Pass</span><span className="text-green-700">Op&gt;</span>
        </h1>
        <p className='text-center text-lg text-green-900'>Your own password manager</p>


         <div className="flex flex-col  w-full justify-between gap-8">
          <input value={form.site} onChange={handelChange} placeholder='Enter website URL' className='w-full rounded-full p-4 py-1 bg-white border border-green-500 outline-none' type="text" name='site' id='site' />
          <div className="flex w-full  justify-between gap-4">
            <input value={form.username} onChange={handelChange} placeholder='Enter user name' className=' w-full rounded-full p-4 py-1 bg-white border border-green-500 outline-none' type="text" name='username' id='username' />
            <div className="relative items-center">


              <input ref={passwordRef} value={form.password} onChange={handelChange} placeholder='Enter password' className=' w-full rounded-full p-4 py-1 bg-white border border-green-500 outline-none' type="password" name='password' id='password' />

              <span className="absolute right-[3px] top-[4px] cursor-pointer items-center" onClick={showPassword}>
                <img ref={ref} className='p-1' width={25} src="/eye.png" alt="" />
              </span>
            </div>

          </div>
          <button onClick={savePassword} className='flex justify-center items-center text-green-700 border-2 hover:border-none px-4 border-green-700 hover:bg-green-700 hover:text-white rounded-full w-fit p-2 '>
            <lord-icon 
              src="https://cdn.lordicon.com/sbnjyzil.json"
              trigger="hover"
               stroke="bold">
            </lord-icon>
            Add Password</button>
        </div>


