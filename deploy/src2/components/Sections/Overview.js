import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
// Images
import TrackTime from "~images/overview/track-time.png";
import DailySchedule from "~images/overview/daily-schedule.png";

const Overview = (props) => {
    const { t } = useTranslation();
    return (
        <section id="overview" className={props.className}>
            <Container>
                <Row>
                    <Col className="col-12 col-lg-6 offset-lg-1 order-lg-last res-margin">
                        <div className="section-title text-center text-lg-start">
                            <h3><Trans>Subvención NexGeneration</Trans></h3>
                            <p><Trans>Aprovecha las ayudas de los fondos NexGeneration</Trans></p>
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
                                    <h6 className="font-weight-bold mb-2 mt-0">{t('Tramitación opcional')}</h6>
                                    <p>{t('Nuestro equipo técnico se encarga de ello')}</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-12 col-lg-5 order-lg-first text-sm-center">
                        <img src={TrackTime} alt={t('Subvención NexGeneration')} />
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
                        <div className="btn w-50" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.6s">
                            <Link to="/#overview" className="custom-btn d-inline-flex align-items-center justify-content-center m-2 m-sm-0 me-sm-3">
                                <i className="fa fa-piggy-bank"></i>
                                <p className="mb-0 ms-2 text-center"><Trans>+ info</Trans><span>NexGen</span></p>
                            </Link>
                        </div>
                    </Col>
                    <Col className="col-12 col-lg-5 offset-lg-1 text-sm-center">
                        <img src={DailySchedule} alt={t('Requisitos')} className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Overview;
export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
