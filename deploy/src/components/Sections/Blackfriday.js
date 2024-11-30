// src/components/BlackFriday.js
import React from 'react';
import { Trans } from 'react-i18next';
import CountdowBlakFriday from "../CountdownBlackFriday";

const BannerBlackFriday = () => {
    return (
        <section className="black-friday-bg-dark black-friday-text-white black-friday-text-center black-friday-py-4">
            <div className="container">
                <div className="row align-items-center justify-content-center blakfriday">        
                    <h1 className="black-friday-display-4">
                        <Trans>blackFridayTitle</Trans>
                    </h1>
                    <h1 className="black-friday-display-4">
                        <Trans>windowsTitle</Trans>
                    </h1>
                    <p className="black-friday-lead">
                        <Trans>discountText</Trans>
                    </p>
                    <p className="black-friday-lead">
                        <Trans>nextGenText</Trans>
                    </p>
                    <p className="black-friday-lead">
                        <Trans>financingText</Trans>
                    </p>
                    <CountdowBlakFriday />
                    <p className="black-friday-condiciones">
                        <Trans>conditionsText</Trans>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BannerBlackFriday;
