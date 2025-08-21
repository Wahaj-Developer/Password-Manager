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
