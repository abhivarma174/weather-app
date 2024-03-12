import React from 'react'

function TopComponent({city, country}) {

    

    
  return (
    <>
    <div className='w-full h-2/3 bg-[#374151] border-b-2 border-slate-600/65 relative'>
        
        
        <img className='h-full w-full z-[-10]' src="https://images.unsplash.com/photo-1561484930-998b6a7b22e8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        
        <h1 className='absolute top-2 left-5 z-[60] text-5xl text-[#fffafa]/[0.6]'>{city},{country}</h1>
       
        
    </div>
    </>
  )
}

export default TopComponent