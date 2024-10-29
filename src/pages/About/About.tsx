import './About.css';
import coracaoCaixa from './../../assets/hands-around-heart.png';
import missionImage from './../../assets/humanitario.png';
import impacto from './../../assets/deitado.jpg';
import brasil from './../../assets/brasil.png';
import planeta from './../../assets/planeta.png';
import acesso from './../../assets/coracaocaixa.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function About() {

  useGSAP(() => {
    gsap.from('.about-container, .texto-animado, #main p, #main img, #main h3', {
      scrollTrigger: {
        trigger: '.about-container'
      },
      y: 80,
      opacity: 0,
      duration: .5,
      delay: -.5,
      stagger: .25
    })
  }, [])

  return (
    <div id='main'>
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <div className="about-title-container">
              <h1 className="about-title texto-animado">Quem Somos</h1>
            </div>
            <p className="about-description">
              O Coração Solidário é um projeto dedicado a criar uma ponte para a solidariedade, proporcionando esperança e suporte através de ações comunitárias.
            </p>
            <a href="#mission-section" className="about-button texto-animado">Conheça Mais</a>
          </div>
          <div className="about-image">
            <img src={coracaoCaixa} alt="Coração Solidário" />
          </div>
        </div>
        <div id="mission-section" className="mission-section">
          <h2 className="mission-title">Nossa Missão</h2>
          <div className="mission-content">
            <div className="mission-image">
              <img src={missionImage} alt="Nossa Missão" />
            </div>
            <div className="mission-text-container">
              <div className="mission-text">
                <ul>
                  <li>Proporcionar apoio e esperança para aqueles que enfrentam dificuldades.</li>
                  <li>Trabalhar para criar um impacto positivo através de doações e ações comunitárias.</li>
                  <li>Colaborar com diversas organizações e voluntários para garantir que a ajuda chegue a quem mais precisa.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="impact-section" className="impact-section">
          <h2 className="impact-title">Por que Existimos</h2>
          <div className="impact-content">
            <div className="impact-image">
              <img src={impacto} alt="Por que Existimos" />
            </div>
            <div className="impact-info">
              <div className="info-item">
                <img src={brasil} alt="Pobreza no Brasil" className="info-icon" />
                <div className="info-text">
                  <h3>Pobreza no Brasil</h3>
                  <p>Em 2021, cerca 29,6% da população total do país sobrevivia com até 497 reais.</p>
                </div>
              </div>
              <div className="info-item">
                <img src={planeta} alt="Pobreza no Mundo" className="info-icon" />
                <div className="info-text">
                  <h3>Pobreza Mundial</h3>
                  <p>Em 2023, 1,1 bilhão de um total de 6,1 bilhões de pessoas viviam em pobreza multidimensional aguda em 110 países.</p>
                </div>
              </div>
              <div className="info-item">
                <img src={acesso} alt="Falta de Acesso" className="info-icon" />
                <div className="info-text">
                  <h3>Falta de Acesso</h3>
                  <p>No Brasil, entre 2020 a 2022, a vulnerabilidade alimentar atingiu 9,9% da população.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Seção de Bibliografia */}
        <div id="bibliography-section" className="bibliography-section">
          <h2 className="bibliography-title">Bibliografia</h2>
          <ul className="bibliography-list">
            <li>
              PROGRAMA DAS NAÇÕES UNIDAS PARA O DESENVOLVIMENTO (PNUD). 25 países reduziram pela metade a pobreza multidimensional em 15 anos, mas 1,1 bilhão ainda vive na pobreza. Nova York, 11 de julho de 2023. Disponível em: <a href="https://www.undp.org/pt/brazil/press-releases/25-paises-reduziram-pela-metade-pobreza-multidimensional-em-15-anos-mas-11-bilhao-ainda-vive-na-pobreza" target="_blank" rel="noopener noreferrer">https://www.undp.org/pt/brazil/press-releases/25-paises-reduziram-pela-metade-pobreza-multidimensional-em-15-anos-mas-11-bilhao-ainda-vive-na-pobreza</a>. Acesso em: 29 out. 2024.
            </li>
            <li>
              NERI, Marcelo C. Mapa da Nova Pobreza. Rio de Janeiro: FGV Social, 2022. 40 p. Disponível em: <a href="https://cps.fgv.br/MapaNovaPobreza" target="_blank" rel="noopener noreferrer">https://cps.fgv.br/MapaNovaPobreza</a>. Acesso em: 29 out. 2024.
            </li>
            <li>
              FAO. Aumento da Fome e Insegurança Alimentar no Brasil: relatório da ONU revela dados preocupantes. 14 jul. 2023. Disponível em: <a href="https://www.cfn.org.br/index.php/noticias/aumento-da-fome-e-inseguranca-alimentar-no-brasil-relatorio-da-onu-revela-dados-preocupantes/#:~:text=Entre%202014%20e%202016%2C%20cerca,%2C9%25%20da%20popula%C3%A7%C3%A3o)." target="_blank" rel="noopener noreferrer">https://www.cfn.org.br/index.php/noticias/aumento-da-fome-e-inseguranca-alimentar-no-brasil-relatorio-da-onu-revela-dados-preocupantes/#:~:text=Entre%202014%20e%202016%2C%20cerca,%2C9%25%20da%20popula%C3%A7%C3%A3o).</a>. Acesso em: 29 out. 2024.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}


