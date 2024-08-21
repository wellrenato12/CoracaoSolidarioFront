import './Info.css';

// Import images
import exampleImage from './../../assets/maos.png'; 
import history1 from './../../assets/menina1.png'; 
import history2 from './../../assets/menino3.png'; 
import history3 from './../../assets/menina2.png'; 
import processImage1 from './../../assets/voluntario.jpg'; 
import processImage2 from './../../assets/separar.jpg'; 
import processImage3 from './../../assets/dar.jpg'; 
import whatWeDoImage from './../../assets/doacao3.png'; 

export function Info() {
  return (
    <div className="info-container">
      <div className="info-title">
        <h1>O que Fazemos</h1>
      </div>
      <div className="info-content">
        <div className="info-box">
          <div className="info-text">
            <p>
              Fazemos doação, apoiando aqueles que mais precisam, oferecendo recursos e esperança para comunidades vulneráveis.
            </p>
            <p>
              Conectamos doadores a causas significativas, garantindo que a ajuda chegue às pessoas certas no momento certo.
            </p>
          </div>
          <a href="#how-we-help" className="info-button">Conheça Mais</a>
        </div>
        <div className="info-image">
          <img src={exampleImage} alt="Imagem Principal" />
        </div>
      </div>

      <div id="how-we-help" className="info-what-we-do">
        <div className="info-title-ajudamos">
          <h1>Como Ajudamos</h1>
        </div>
        <div className="content">
          <div className="image-section">
            <img src={whatWeDoImage} alt="Como Ajudamos" />
          </div>
          <div className="text-section">
            <ul>
              <li>Distribuimos recursos essenciais para comunidades vulneráveis</li>
              <li>Suporte contínuo para enfrentar desafios diários</li>
              <li>Assistência que gera impacto real e duradouro</li>
              <li>Implementação de soluções sustentáveis</li>
              <li>Empoderamento das comunidades para o futuro</li>
            </ul>
          </div>
        </div>
      </div>

      <div id="steps-section" className="info-steps">
        <h2>Etapas do Processo de Doação</h2>
        <ul className="steps-list">
          <li><strong>1. Escolha sua causa:</strong> Selecione uma causa que seja significativa para você.</li>
          <li><strong>2. Faça sua doação:</strong> Contribua com o tipo de doação que desejar.</li>
          <li><strong>3. Acompanhamento:</strong> Receba atualizações sobre sua doação.</li>
          <li><strong>4. Impacto:</strong> Com a sua ajuda podemos realizar impactos positivos nas comunidades.</li>
        </ul>
      </div>

      <div className="info-infographic">
        <h2>Como Fazemos a Diferença</h2>

        <div className="infographic-process">
          <h3>Nosso Processo</h3>
          <div className="process-steps">
            <div className="process-step">
              <img src={processImage1} alt="Recebimento" />
              <h4>Recebimento</h4>
              <p>Itens recebidos de doadores.</p>
            </div>
            <div className="process-step">
              <img src={processImage2} alt="Processamento" />
              <h4>Processamento</h4>
              <p>Itens classificados e preparados.</p>
            </div>
            <div className="process-step">
              <img src={processImage3} alt="Distribuição" />
              <h4>Distribuição</h4>
              <p>Itens entregues às comunidades.</p>
            </div>
          </div>
        </div>

        <div className="infographic-stories">
          <h3>Histórias de Quem Ajudamos</h3>
          <div className="story-card">
            <div className="story-image">
              <img src={history1} alt="Depoimento 1" />
            </div>
            <div className="story-text">
              <p>"O projeto mudou a minha vida para melhor. Sou eternamente grato!" - Maria</p>
            </div>
          </div>
          <div className="story-card">
            <div className="story-image">
              <img src={history2} alt="Depoimento 2" />
            </div>
            <div className="story-text">
              <p>"Graças a vocês, minha família recebeu o apoio necessário em um momento difícil." - João</p>
            </div>
          </div>
          <div className="story-card">
            <div className="story-image">
              <img src={history3} alt="Depoimento 3" />
            </div>
            <div className="story-text">
              <p>"O suporte do projeto foi fundamental para nossa recuperação." - Ana</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
