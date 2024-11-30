import React from 'react';

import { graphql } from 'gatsby';
import SingleImageVentanasPvc from "../components/Intro/SingleImageVentanaspvc";
import Layout from "../components/Sections/Layout";
import Loader from "../components/Sections/Loader";
import Header from "../components/Sections/Header";
import Clients from "../components/Sections/Clients";
import Features from "../components/Sections/Features";
import ParallaxVideo from "../components/Sections/ParallaxVideo";
import { Helmet } from "react-helmet";
//import CookieBanner from "../components/CookieConsent"; // Ruta al componente
import Overview from "../components/Sections/Overview";
import Testimonials from "../components/Sections/Testimonials";
import BlackFriday from "../components/Sections//Blackfriday";
import Team from "../components/Sections/Team";

import FaqsBlackFrida from "../components/Sections/FaqBlackFriday";
import BlackFridayOfert from '../components/Sections/BlackFridayOfert';
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import ToTop from "../components/Sections/ToTop";

const ventanaspvc = () => (
    
    <Layout 
        pageTitle="Instal tancaments ventanas de pvc" 
        colorSchema="../colors/orange.css"
    >
      <Helmet>
    <title>Instal Tancaments Ventanas de PVC | Subvenciones Next Generation 2024</title>
    <meta name="description" content="Instala ventanas de PVC con subvenciones Next Generation 2024. Aprovecha los beneficios de alta eficiencia energética y ahorra en tu factura. Solicita tu presupuesto hoy." />
    <meta name="keywords" content="ventanas de PVC, subvenciones Next Generation, eficiencia energética, ahorro energético, instalación de ventanas" />
    <script type="application/ld+json">
      {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Instal Tancaments",
        "url": "https://nexgen.instaltancaments.com",
        "sameAs": [
          "https://instaltancaments.com",
          "https://www.facebook.com/InstalTancaments",
          "https://instaltancaments.com/ventanas-pvc",
          "https://instaltancaments.com/blog/los-6-mejores-fabricantes-de-ventanas-de-pvc/",
          "https://instaltancaments.com/blog/las-6-mejores-ventanas-passivhaus/",
          "https://instaltancaments.com/calcula-subvenciones-ventanas-nextgeneration/"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Carrer del Roures 13, Nave 1",
          "addressLocality": "Vulpellac",
          "addressRegion": "CT",
          "postalCode": "17111",
          "addressCountry": "ES"
        },
        "telephone": "+34 972622566",
        "openingHours": [
          "Mo-Fr 09:00-18:00"
        ],
        "review": [
          {
            "@type": "Review",
            "author": "Maribel",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Encargué el cambio de todas las ventanas, balcón y galería de mi casa a Quim y no puedo estar más satisfecha: resolvió todas mis dudas, cumplió con las fechas previstas, el trabajo se realizó rápido y de forma excelente... Quim responde a cualquier consulta o duda que se genere durante el proceso. Lo recomiendo al 100 por 100!",
            "reviewLink": "https://www.google.com/maps/reviews?placeid=ChIJud92ETL_uhIRnoZHWv9QzP4ese"
          },
          {
            "@type": "Review",
            "author": "Frank Delanghe",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Encargué ventanas para toda nuestra casa a Quim, todo se entregó correctamente y encajó a la perfección. Estamos muy satisfechos y definitivamente recomendamos trabajar con Quim.",
            "reviewLink": "https://www.google.com/maps/reviews?placeid=ChIJud92ETL_uhIRnoZHWv9QzP4ese"
          },
          {
            "@type": "Review",
            "author": "Giuseppe Perrella",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Profesionalidad, amabilidad, calidad del trabajo y de los materiales ; muy satisfechos y sin duda lo recomendamos a todo aquel que quiera un resultado a regola d'arte sin precios desorbitados.",
            "reviewLink": "https://www.google.com/maps/reviews?placeid=ChIJud92ETL_uhIRnoZHWv9QzP4ese"
          },
          {
            "@type": "Review",
            "author": "Tom Van Biesen",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Trabajé 2 veces con Quim y siempre muy buen trabajo, productos de calidad al mejor precio. Lo recomiendo 100%",
            "reviewLink": "https://www.google.com/maps/reviews?placeid=ChIJud92ETL_uhIRnoZHWv9QzP4ese"
          },
          {
            "@type": "Review",
            "author": "Antoni Espona",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Excelente profesional, profundo conocedor de su ámbito donde encuentra siempre la mejor solución al proyecto solicitado, ya un precio ajustado.",
            "reviewLink": "https://www.google.com/maps/reviews?placeid=ChIJud92ETL_uhIRnoZHWv9QzP4ese"
          },
          {
            "@type": "Review",
            "author": "Marti Albi",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Fantástica la experiencia de haber contratado INSTAL CERRAMIENTOS y mención especial para Quim, ya que se trata de unos profesionales que aparte de ofrecer unos servicios de la máxima calidad, actúan con mucha seriedad y rigurosidad, teniendo especial cuidado de todos los detalles.",
            "reviewLink": "https://www.google.com/maps/reviews?placeid=ChIJud92ETL_uhIRnoZHWv9QzP4ese"
          },
          {
            "@type": "Review",
            "author": "Annabel Bea",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "La experiencia con la empresa y con Quim, ha sido buenísima y de confianza. Un trabajo muy bien hecho, (instalación de todas las ventanas y vidrieras con PVC, y Mallorquinas de aluminio), el mejor presupuesto. La vivienda ha quedado totalmente insonorizada y con cierres de primera. Los recomiendo totalmente. Un 10.",
            "reviewLink": "https://www.google.com/maps/reviews?placeid=ChIJud92ETL_uhIRnoZHWv9QzP4ese"
          },
          {
            "@type": "Review",
            "author": "Guillem Pla Escriva",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Muy buen asesoramiento y atención al cliente desde el primer momento. Además de calidad en todo el proceso, sin duda volveré a trabajar con ellos.",
            "reviewLink": "https://www.google.com/maps/reviews?placeid=ChIJud92ETL_uhIRnoZHWv9QzP4ese"
          },
          {
            "@type": "Review",
            "author": "Carmelo",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Empresa fiable 100 % trabajo muy bien realizado y de excelente calidad, un trato muy cordial y profesional. Estamos encantados tanto con los servicios como por los productos. Los recomiendo.",
            "reviewLink": "https://nexgen.instaltancaments.com/"
          }
        ],
        "brand": [
          {
            "@type": "Brand",
            "name": "Rehau"
          },
          {
            "@type": "Brand",
            "name": "Kommerling"
          },
          {
            "@type": "Brand",
            "name": "Schüco"
          },
          {
            "@type": "Brand",
            "name": "Veka"
          }
        ],
        "product": {
          "@type": "Product",
          "name": "Ventanas de PVC",
          "description": "Ventanas de PVC de alta eficiencia energética, con aislamiento térmico y acústico avanzado. Ideales para mejorar la eficiencia energética de tu hogar y reducir el ruido exterior.",
          "brand": [
            "Rehau",
            "Kommerling",
            "Schüco",
            "Veka"
          ],
          "featureList": [
            "Aislamiento térmico de alta calidad",
            "Aislamiento acústico superior",
            "Cumple con estándares Passivhaus",
            "Eficiencia energética A++"
          ]
        },
        "offers": {
          "@type": "Offer",
          "url": "https://nexgen.instaltancaments.com",
          "priceCurrency": "EUR",
          "price": "Consultar presupuesto",
          "priceValidUntil": "2024-12-31",
          "description": "Aprovecha las subvenciones Next Generation 2024 para instalar ventanas de PVC de alta eficiencia energética. Consulta tu presupuesto sin compromiso."
        },
        "additionalType": "https://schema.org/Business",
        "serviceArea": {
          "@type": "ServiceArea",
          "serviceArea": [
            {
              "@type": "Place",
              "name": "Vulpellac"
            }
          ]
        }
      }
      `}
    </script>
  </Helmet>
        
        <Loader />
      
        <Header nav="home" />
        <BlackFriday /> 
        <SingleImageVentanasPvc />
       <BlackFridayOfert />
        <Clients className="section-box bg-grey" />
        <Overview />
        <Features />
        <ParallaxVideo />
        <Pricing className="bg-grey" />
        <Testimonials />
       
        <Team />
    
        <FaqsBlackFrida />
        
       
       
        <Contact />
        <Footer />
        <ToTop />
    </Layout>

)

export default ventanaspvc;
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