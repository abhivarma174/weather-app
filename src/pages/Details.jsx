import React, { useEffect, useState } from 'react'
import TopComponent from '../components/TopComponent';
import BottomComponent from '../components/BottomComponent';
import Loader from '../components/Loader';
import axios from 'axios';


function Details({userInput}) {

    const dayGetter = {
        0: "Sun",
        1: "Mon",
        2: "Tue",
        3: "Wed",
        4: "Thu",
        5: "Fri",
        6: "Sat"
    }


    const [data, setData] = useState(null);
    const [prevData, setPrevData] = useState(null);
    const [error, setError] = useState("");


    const fetchWeather = async () => {
        try {
            const res = await axios.get(
                import.meta.env.VITE_GEOLOCATION_URL,
                {
                    params: {
                        q: userInput,
                        api_key: import.meta.env.VITE_GEOLOCATION_API_KEY
                    }
                }
            );
            const {lat, lon} = res.data[0];
            const weatherData = await axios.get(
                import.meta.env.VITE_WEATHER_URL,
                {
                    params: {
                        key: import.meta.env.VITE_WEATHER_API_KEY,
                        lat,
                        lon
                    }
                }
            );

            setData(weatherData.data.data[0]);

            const currentDateData = (weatherData.data.data[0]);
            const currentDate = new Date(currentDateData.datetime.slice(0,10));
            const lastWeekDate = new Date(currentDate.getTime() - 6 * 24 * 60 * 60 * 1000);
            const start_date = lastWeekDate.toISOString().split('T')[0];
            const end_date = currentDate.toISOString().split('T')[0];
            
            const historyResponse = await axios.get(import.meta.env.VITE_HISTORY_WEATHER_URL,{
                params:{
                    key: import.meta.env.VITE_WEATHER_API_KEY,
                    start_date,
                    end_date,
                    lat,
                    lon
                }
            })
            setPrevData(historyResponse.data.data);
            

           

        } catch (error) {
            setError(error.message);
        }
    }





    useEffect(() => {
        fetchWeather();
        
    },[userInput])






    return (
    <>
        {data && prevData && 
        <div className='w-4/5 h-4/5 bg-[#374151] flex flex-col rounded-lg border-[0.3px] border-slate-600 justify-center items-center'>
            <TopComponent city={data.city_name} country={data.country_code}/>
            <BottomComponent data={data} prevData={prevData}/>
        </div>}
        {!data && <Loader />}
        {error && <h1 className='text-8xl'>{error}</h1>}
    </>
    );
}

export default Details