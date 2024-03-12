import React from 'react'

function MainWeather({temp,date,icon,windSpeed,day}) {

    function supCalculator(dayNumber) {
        switch (date) {
            case '1':
                return 'st'
            case '2': return 'nd'
            case '3': return 'rd'
            default: return 'th';
        }
    }



  return (
    <div className='w-1/3 h-full flex flex-row border-r-2 border-slate-600/65'>
        <div className='w-1/2 h-full flex flex-col justify-center items-center border-r-2 border-slate-600/65'>
            <h1 className='text-5xl mb-5'>{temp}&deg;</h1>
            <div className='w-10/12 bg-black bg-opacity-50 rounded-full text-center text-white'>
                <h4>{day} {date}<sup>{supCalculator(date)}</sup></h4>
            </div>
        </div>
        <div className='w-1/2 h-full flex flex-col justify-center items-center'>
            <img src={`/icons/${icon}.png`} alt="WeatherIcon" className='w-1/2 h-1/2' />
            <h1>{windSpeed} m/s</h1>
        </div>
    </div>
  );
}

export default MainWeather