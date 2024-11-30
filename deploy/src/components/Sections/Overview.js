import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';

const Overview = ({ className }) => {
    const { t } = useTranslation();

    return (
        <section id="overview" className={className}>
            <Container>
                <Row>
                    <Col className="col-12 col-lg-6 offset-lg-1 order-lg-last res-margin">
                        <div className="section-title text-center text-lg-start">
                            <h3><Trans>Subvención NextGeneration</Trans></h3>
                            <p><Trans>Aprovecha las ayudas de los fondos NextGeneration</Trans></p>
                        </div>
                        <div className="overview-item">
                            <div className="overview-box d-flex flex-wrap">
                                <div className="icon icon-basic-compass"></div>
                                <div className="content">
                                    <h6 className="font-weight-bold mb-2 mt-0">{t('Subvención del 40%')}</h6>
                                    <p>{t('Hasta 3.000€')}</p>
                                </div>
                            </div>
                            <div className="overview-box d-flex flex-wrap">
                                <div className="icon icon-basic-helm"></div>
                                <div className="content">
                                    <h6 className="font-weight-bold mb-2 mt-0">{t('Deducción Fiscal del 20%')}</h6>
                                    <p>{t('Hasta 5.000€')}</p>
                                </div>
                            </div>
                            <div className="overview-box d-flex flex-wrap">
                                <div className="icon icon-basic-link"></div>
                                <div className="content">
                                    <h6 className="font-weight-bold mb-2 mt-0">{t('Fecha Limite')}</h6>
                                    <p>{t('31 del 12 del 2024')}</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-12 col-lg-5 order-lg-first text-sm-center">
                        <StaticImage
                            src="../../images/overview/track-time.png" // Ajusta la ruta según tu estructura de proyecto
                            alt={t('Subvención NextGeneration')}
                            layout="constrained"
                            width={600}
                            height={400}
                        />
                    </Col>
                </Row>
                <div className="empty-100"></div>
                <Row>
                    <Col className="col-12 col-lg-6 res-margin">
                        <div className="section-title text-center text-lg-start">
                            <h3>{t('Requisitos')}</h3>
                            <p>{t('Si cumples los requisitos, puedes alcanzar hasta 8.000€ con la subvención + deducción fiscal')}</p>
                        </div>
                        <ul className="overview-list">
                            <li>
                                <p><i className="fa-li fas fa-check"></i>{t('Debe ser tu vivienda habitual.')}</p>
                            </li>
                            <li>
                                <p><i className="fa-li fas fa-check"></i>{t('Es obligatorio estar empadronado.')}</p>
                            </li>
                            <li>
                                <p><i className="fa-li fas fa-check"></i>{t('Sustitución de componentes de la envolvente térmica por otros elementos que cumplan el CTE.')}</p>
                            </li>
                            <li>
                                <p><i className="fa-li fas fa-check"></i>{t('Reducción del 7% de la demanda energética, calefacción y aire acondicionado.')}</p>
                            </li>
                        </ul>
                    </Col>
                    <Col className="col-12 col-lg-5 offset-lg-1 text-sm-center">
                        <StaticImage
                            src="../../images/overview/daily-schedule.png" // Ajusta la ruta según tu estructura de proyecto
                            alt={t('Requisitos')}
                            layout="constrained"
                            width={600}
                            height={400}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Overview;
