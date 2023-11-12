import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#1e1e1e] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/68be8736-9898-489f-9e52-6216bdd074cb" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-purple-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - ali7aggag@gmail.com</p>
            </div>
            <input className='bg-slate-300 p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-slate-300' type="email" placeholder='Email' name='email' />
            <textarea className='bg-slate-300 p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-purple-600 hover:border-purple-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact