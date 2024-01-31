import React from 'react'

export default function User({users}) {
    console.log(users)
    if(!users){
        return(<>LOading....</>)
    }
  return (
    <>
    {users.map((item)=>(
        <>
            <h6>{item.name}</h6>

        </>
    ))}
    </>
  )
}
