import { useState, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);

  // Fecha de inicio en milisegundos
  const startTime = new Date("2023-01-07T11:50:00").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      // Calcula el tiempo transcurrido en milisegundos
      const elapsedTime = new Date().getTime() - startTime;

      // Calcula el tiempo transcurrido en segundos
      const seconds = Math.floor(elapsedTime / 1000);

      // Actualiza el estado del componente con el tiempo transcurrido
      setTime(seconds);
    }, 1000);

    // Limpia el intervalo cuando se desmonta el componente
    return () => clearInterval(interval);
  }, []);

  // Formatea el tiempo transcurrido en horas, minutos y segundos
  const days = Math.floor(time / 86400);
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <div className="w-72 h-auto m-auto rounded-3xl">
        <div className="bg-black flex justify-center p-8 pb-0 rounded-t-3xl" >
            <img src="ar-galaxy-a13-sm-a135-sm-a135mzkkaro-532207027 (1).jpg"/>
        </div>
        <div className="bg-white flex flex-col rounded-b-3xl">
            <h1 className="text-center m-2 text-slate-900 text-2xl">A13 EN PELIGRO</h1>
            <p className="text-center m-2 mt-0 text-gray-500">Contador para saber cuanto paso hasta que Bianca rompa su celular. <br/> Se detendra el dia que se rompa.</p>
            <p className="bg-green-600 m-4 text-center rounded-3xl p-2">Tiempo transcurrido: {days}:{hours}:{minutes}:{seconds}</p>
        </div>
    </div>
  );
}

export default Stopwatch;
