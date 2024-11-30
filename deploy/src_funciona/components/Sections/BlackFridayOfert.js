import React from 'react';
import { Trans } from 'react-i18next'; // Asegúrate de importar el componente Trans de react-i18next
 
const BlackFridayOfert = () => {
    return (
        <div className="container my-5">
            <h1 className="text-center">
                <Trans>¡Oferta Especial de Black Friday!</Trans>
            </h1>
            <div className="row mt-4">
                <div className="col-md-6">
                    <h2>
                        <Trans>Ventanas de Alta Eficiencia</Trans>
                    </h2>
                    <p>
                        <Trans>
                            Hemos negociado con nuestros proveedores para ofrecerte precios especiales en la semana de Black Friday. Esta es una oportunidad única para cambiar tus ventanas y mejorar la eficiencia energética de tu hogar.
                            <br />
                            Recuerda, esta oferta es limitada y no podemos garantizar los mismos precios después de esta semana, ya que dependen de nuestros proveedores. ¡Aprovecha ahora!
                        </Trans>
                    </p>
                </div>
                <div className="col-md-6">
                    <h2>
                        <Trans>Financiación Especial</Trans>
                    </h2>
                    <p>
                        <Trans>
                            Además, hemos llegado a un acuerdo con nuestra entidad financiera para ofrecer financiación especial durante esta semana. Puedes financiar tu compra hasta en 12 meses sin intereses.
                            <br />
                            ¡No dejes pasar esta oportunidad de mejorar tu hogar sin preocupaciones económicas!
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

export default BlackFridayOfert;
