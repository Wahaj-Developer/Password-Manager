import React, { useEffect } from 'react'
import { useRef, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';

import { v4 as uuidv4 } from 'uuid';


const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setpasswordArray] = useState([])


  useEffect(() => {
    let passwords = localStorage.getItem('passwords');
    let passwordArray;
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }

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
  const savePassword = () => {
if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
    setpasswordArray([...passwordArray, {...form , id: uuidv4()}]);
    localStorage.setItem('passwords', JSON.stringify([...passwordArray, {...form , id: uuidv4()}]));
 setform({ site: "", username: "", password: "" });
  }
  
  else{
toast.error("Please fill all fields");

  }

  }

  const deletePassword = (id) => {
let confirmDelete = confirm("Are you sure you want to delete this password?");
if(confirmDelete) {
     setpasswordArray(passwordArray.filter(item => item.id!== id));
     localStorage.setItem('passwords', JSON.stringify(passwordArray.filter(item => item.id !== id)));
    
}


  }
