import React from 'react'


export default function Contact(props) {
  return (
    <div className='contact-card'>
        <h3>{props.name}</h3>
        <p>{props.phone}</p>
        <p>{props.email}</p>
        {/* <h3>pratikshaa pet</h3>
        <p>pp@gmail.com</p>
        <p>(145) 446-7859</p> */}
     
    </div>
  )
}
