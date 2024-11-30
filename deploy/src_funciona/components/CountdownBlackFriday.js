import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importación de Bootstrap CSS
import { useTranslation } from 'react-i18next';

const CountdownBlakFriday = () => {
  const { t } = useTranslation(); // Hook para obtener la función de traducción
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const targetDate = new Date('2024-11-20T23:59:59'); // Fecha objetivo para la cuenta regresiva
    const difference = targetDate - new Date();

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="container_blakfriday">
      <div className="text-center p-4">
        <h4 className="mb-4 black-friday">{t('Fecha límite para la tramitación')}</h4>
        <div className="row justify-content-center count-blak-friday">
          <div className="col-auto">
            <div className="p-3 border rounded shadow-sm bg-orange text-center">
              <h3 className="mb-0">{days}</h3>
              <small>{t('Días')}</small>
            </div>
          </div>
          <div className="col-auto">
            <div className="p-3 border rounded shadow-sm bg-orange text-center">
              <h3 className="mb-0">{hours}</h3>
              <small>{t('Horas')}</small>
            </div>
          </div>
          <div className="col-auto">
            <div className="p-3 border rounded shadow-sm bg-orange text-center">
              <h3 className="mb-0">{minutes}</h3>
              <small>{t('Minutos')}</small>
            </div>
          </div>
          <div className="col-auto">
            <div className="p-3 border rounded shadow-sm bg-orange text-center">
              <h3 className="mb-0">{seconds}</h3>
              <small>{t('Segundos')}</small>
            </div>
          </div>
        </div>
        <a href="#contact" className="btn btn-outline-primary btn-sm mt-4">
          {t('¡Solicita tu presupuesto ahora!')}
        </a>
      </div>
    </div>
  );
};

export default CountdownBlakFriday;
