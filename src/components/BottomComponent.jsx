import React from 'react'
import MainWeather from './MainWeather'
import SmallWeather from './SmallWeather'

function BottomComponent({data, prevData}) {

   
    const date = data.datetime.slice(8,10); 
    const icon = data.weather.icon;
    const temp = data.temp;
    const windSpeed = Math.round(data.wind_spd);
    const dayGetter = {
        0: "Sun",
        1: "Mon",
        2: "Tue",
        3: "Wed",
        4: "Thu",
        5: "Fri",
        6: "Sat"
    }

    const currentDate = new Date(data.datetime.slice(0,10));
    const day = dayGetter[currentDate.getDay()]
  

  return (
    <div className='h-1/3 w-full bg-[#374151] flex flex-row'>
        <MainWeather temp={temp} icon={icon} windSpeed={windSpeed} date={date} day={day} />
        <div className='w-2/3 flex flex-row'>
            {
                prevData.map((obj,i) => 
                    <SmallWeather key={i} datetime={obj.datetime} icon={"t02d"} temp={obj.temp}/>
                )
            }          
        </div>
    </div>
  )
}

export default BottomComponent