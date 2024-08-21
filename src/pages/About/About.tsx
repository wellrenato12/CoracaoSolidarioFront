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
    gsap.from('.about-container, .texto-animado , p, img, h3', {
      scrollTrigger: {
        trigger: '.about-container'
      },
      y: 80,
      opacity: 0,
      duration: 1,
      delay: -.5,
      stagger: .5
    })
  }, [])

  

  return (
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
    </div>
  );
}
