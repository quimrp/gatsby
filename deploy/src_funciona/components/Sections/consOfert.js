import React from 'react';
import { Trans } from 'react-i18next'; // Asegúrate de importar el componente Trans de react-i18next
 
const ConsOfert = () => {
    return (
        <div className="container my-5">
            <h1 className="text-center">
                <Trans>¡Ofrece Ventans de Altas Prestaciones!</Trans>
            </h1>
            <h4 className="text-center subtitulo"><Trans>Ofrece a tus clientes ventanas de alta calidad que combinan diseño, eficiencia y durabilidad, añadiendo valor a tus proyectos y garantizando la satisfacción de tus compradores. </Trans></h4>
            <div className="row mt-4">
                <div className="col-md-6">
                    <h2>
                        <Trans>Ventanas de Alta Eficiencia</Trans>
                    </h2>
                    <p>
                        <Trans>
                        Nuestras ventanas de alta eficiencia están diseñadas para satisfacer las demandas de los clientes modernos: máximo aislamiento térmico, ahorro energético y una durabilidad que eleva la calidad de cualquier proyecto de construcción.
                        </Trans>
                    </p>
                </div>
                <div className="col-md-6">
                    <h2>
                        <Trans>Asesoramiento Energetico</Trans>
                    </h2>
                    <p>
                        <Trans>
                       Asesoramos a tus clientes en cada proyecto, les presentamos tres opciones de acabados con una amplia gama de precios.<br/> Les mostramos los últimos avances tecnológicos en ventanas, Tus clientes estaran encantados con la información.
                        </Trans>
                    </p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12 text-center">
                    <h3>
                        <Trans>¡Aprovecha las Ayudas del Gobierno!</Trans>
                    </h3>
                    <p>
                        <Trans>
                            Además, puedes combinar nuestra oferta con la subvención Next Generation, que te permite obtener un ahorro de hasta el 40% del precio de las ventanas, con un máximo de 3.000 euros. Esto te permite conseguir un ahorro total de hasta el 50%.
                            <br />
                            No pierdas la oportunidad de modernizar tu hogar. ¡Solicita tu presupuesto hoy mismo!
                        </Trans>
                    </p>
                    <button
                        className="btn btn-primary btn-lg mt-3"
                        onClick={() => window.location.href = '#contact'}
                    >
                        <Trans>Solicitar Presupuesto</Trans>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConsOfert;
