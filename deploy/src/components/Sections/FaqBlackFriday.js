import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { Trans } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';

const FaqsBlackFriday = (props) => {
    return (
        <section id="support" className={props.className}>
            <Container>
                <Row className="justify-content-center">
                    <Col className="col-12 col-md-10 col-lg-6">
                        <div className="section-title text-center">
                            <h3><Trans>faq_black_friday_title</Trans></h3>
                            <p><Trans>faq_black_friday_intro</Trans></p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col className="col-12 col-lg-10 offset-lg-1">
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header as="h5">
                                    <Trans>faq_black_friday_offer_includes</Trans>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        <Trans>faq_black_friday_offer_details</Trans>
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header as="h5">
                                    <Trans>faq_black_friday_deadline</Trans>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        <Trans>faq_black_friday_deadline_details</Trans>
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header as="h5">
                                    <Trans>faq_black_friday_offer_dates</Trans>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        <Trans>faq_black_friday_offer_dates_details</Trans>
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header as="h5">
                                    <Trans>faq_black_friday_financing</Trans>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        <Trans>faq_black_friday_financing_details_1</Trans>
                                    </p>
                                    <p>
                                        <Trans>faq_black_friday_financing_details_2</Trans>
                                    </p>
                                    <ul>
                                        <li><Trans>faq_black_friday_financing_dni</Trans></li>
                                        <li><Trans>faq_black_friday_financing_bank_receipt</Trans></li>
                                        <li><Trans>faq_black_friday_financing_account_number</Trans></li>
                                        <li><Trans>faq_black_friday_financing_salary</Trans></li>
                                    </ul>
                                    <p>
                                        <Trans>faq_black_friday_financing_unique_case</Trans>
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="4">
                                <Accordion.Header as="h5">
                                    <Trans>faq_black_friday_nextgen_subsidy</Trans>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        <Trans>faq_black_friday_nextgen_details_1</Trans>
                                    </p>
                                    <p>
                                        <Trans>faq_black_friday_nextgen_requirements_intro</Trans>
                                    </p>
                                    <ul>
                                        <li><Trans>faq_black_friday_nextgen_requirements_residence</Trans></li>
                                        <li><Trans>faq_black_friday_nextgen_requirements_windows</Trans></li>
                                    </ul>
                                    <p>
                                        <Trans>faq_black_friday_nextgen_contact</Trans>
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>

                <div className="empty-30"></div>

                <Row>
                    <Col className="col-12">
                        <p className="text-center mb-0">
                            <Trans>faq_black_friday_contact</Trans>
                            <a href="#contact"><strong><Trans>faq_black_friday_contact_link</Trans></strong></a>.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default FaqsBlackFriday;

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
