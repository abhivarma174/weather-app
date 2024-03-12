import React from 'react'

function SmallWeather({datetime,icon,temp}) {

    const date = datetime.slice(0,10);
    const dayGetter = {
        0: "Sun",
        1: "Mon",
        2: "Tue",
        3: "Wed",
        4: "Thu",
        5: "Fri",
        6: "Sat"
    }
    const currentDate = new Date(date);
    const day = dayGetter[currentDate.getDay()]
   




  return (
    <div className='w-1/6 h-full flex flex-col bg-[#374151] bg-opacity-50 justify-center items-center border-r-2 border-slate-600/65'>
        <div className='bg-black/10 rounded-full text-center w-4/5 mb-4'>
            <h5 className='text-white'>{day}</h5>
        </div>
        <img src={`/icons/${icon}.png`} alt="weather icon" className='w-1/2 h-1/3'/>
        <h1>{temp}&deg;</h1>
    </div>
  )
}

export default SmallWeather