import React, { useState } from "react";


export function SimpleForm(){

    const [formState,SetFormState]=useState(
        {
            username:"agus",
            email:"agus"
        }
    )
    const {username,email}=formState;

    
    return(
        <>
            <input type="text"  placeholder="UserName"  name="username"  value={username}/>
            <br></br>
            <input type="text"  placeholder="Email"  name="email"  value={email}/>

        </>
    )
}