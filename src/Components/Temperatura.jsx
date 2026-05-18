import { useEffect, useState } from "react";


function Temperatura() {
 
    const [temp, setTemp] = useState(null)
    useEffect(() => {
        fetch("https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.63&current_weather=true")
        .then(res => res.json())
        .then(data => {
            setTemp(data.current_weather.temperature)
        })
    }, [])

    return ( <>
     <p>
            Temperatura atual: {temp ? `${temp}°C` : "carregando..."}
        </p>
    
    
    </>  );
}

export default Temperatura;