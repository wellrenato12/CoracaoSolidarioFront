import donate from '../../assets/donate.jpg'
import home from '../../assets/home.svg'
import brasil from '../../assets/brasilB.svg'
import balao from '../../assets/balao.svg'
import planeta from './../../assets/planeta.png';
import musculo from './../../assets/musculo.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export function Home() {

  useGSAP(() => {
    gsap.from('.text , p', {
      scrollTrigger: {
        trigger: 'img',
        toggleActions: 'play'
      },
      y: 80,
      duration: .8,
      stagger: .25,
      opacity: 0
    })

    gsap.from('.balls', {
      scale: 0,
      rotation: 360,
      delay: 2.5,
      stagger: .25
    })

    gsap.from('#brasil, .balao', {
      scrollTrigger: {
        trigger: '#brasil',
        start: '-600px bottom',
        // markers: true,
        toggleActions: 'restart'
      },
      y: 400,
      scale: 0,
      rotation: 360,
      opacity: 0,
      duration: 2,
      stagger: .5,
      ease: 'back'
    })
  }, [])

  return (
    <>
      <img src={donate} className="rounded-sm mt-12 h-[200px] md:h-[300px] xl:h-[500px] w-full object-cover" alt="" />
      <div id='all' className="flex flex-col space-y-12 max-w-7xl mx-auto my-12 px-4 md:px-8 justify-center items-center">
        <h2 className=" w-[12em] md:w-[18em] text-center text-roseOscuro text-[25px] md:text-5xl font-bold border-b-4 p-5 border-roseOscuro text">Doações transformam o mundo!</h2>
        <div className="flex flex-col md:flex-row items-center justify-around py-12 text-rose-700 space-y-8 md:space-y-0 gap-4">
          <div className="flex flex-col max-w-[90%] md:max-w-[50%]">
            <div className='flex flex-col bg-roseFucsia text-white p-4 rounded-lg mb-6'>
              <strong className='text-[18px] md:text-2xl mb-4 text'>Qual é a importancia da doação?</strong>
              <p>Doar não é apenas um ato de generosidade; é uma ferramenta poderosa para transformar o mundo. Com cada doação, você ajuda a criar oportunidades para quem mais precisa e contribui para erradicar a pobreza.</p><br></br>
            </div>
            <div className='flex items-center gap-4'>
              <img src={planeta} alt="Pobreza no Mundo" className="w-[60px] h-[60px]" />
              <div>
                <strong className='text'>Apoie o ODS 1</strong>
                <p className='text-justify'>A pobreza extrema afeta milhões de pessoas, mas juntos podemos mudar essa realidade. O ODS 1 da ONU foca em erradicar a pobreza em todas as suas formas até 2030. Sua doação é um passo concreto em direção a esse objetivo.</p><br></br>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <div>
                <strong className='text'>Faça sua Doação Valer </strong>
                <p className='text-justify'>Cada contribuição faz a diferença, proporcionando acesso à educação, saúde e recursos essenciais. Você está ajudando a quebrar o ciclo da pobreza e a construir um futuro mais justo.</p>
              </div>
              <img src={musculo} alt="valor" className="w-[60px] h-[60px]" />
            </div>
          </div>
          <img className='max-w-[90%] md:max-w-[50%]' src={home} alt="" />
        </div>
      </div>
      <div className="bg-rose-400 py-12">
        <h2 className="text-center text-white text-3xl font-bold mb-8 text">O caminho da sua doação</h2>
        <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-8 max-w-4xl mx-auto px-4">

          <div className="text-center text-white">
            <div className="flex justify-center mb-4">
              <span className="inline-block w-12 h-12 bg-white text-rose-400 rounded-full flex items-center justify-center text-2xl balls">1</span>
            </div>
            <p>Primeiro crie seu perfil e depois selecione o tipo de doação que deseja realizar.</p>
          </div>

          <div className="hidden md:flex justify-center items-center">
            <span className="text-white text-4xl">→</span>
          </div>
          <div className="text-center text-white">
            <div className="flex justify-center mb-4">
              <span className="inline-block w-12 h-12 bg-white text-rose-400 rounded-full flex items-center justify-center text-2xl balls">2</span>
            </div>
            <p>Nós juntamos todas essas doações, compramos os mantimentos e preparamos todos os pedidos.</p>
          </div>

          <div className="hidden md:flex justify-center items-center">
            <span className="text-white text-4xl">→</span>
          </div>
          <div className="text-center text-white">
            <div className="flex justify-center mb-4">
              <span className="inline-block w-12 h-12 bg-white text-rose-400 rounded-full flex items-center justify-center text-2xl balls">3</span>
            </div>
            <p>Os pedidos são entregues para as famílias mais vulneráveis e pessoas em situação de rua atendidas pelos nossos projetos.</p>
          </div>

          <div className="hidden md:flex justify-center items-center">
            <span className="text-white text-4xl">→</span>
          </div>
          <div className="text-center text-white">
            <div className="flex justify-center mb-4">
              <span className=" w-12 h-12 bg-white text-rose-400 rounded-full flex items-center justify-center text-2xl balls">4</span>
            </div>
            <p>Juntos, garantimos que milhares em situação de vulnerabilidade tenham acesso à sua ajuda.</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col space-y-12 max-w-7xl mx-auto my-12 justify-center py-12 px-4 md:px-8'>
        <h2 className='w-[12em] text-center text-roseOscuro text-[25px] md:text-5xl font-bold border-b-4 p-5 border-roseOscuro mx-auto'> Impacto Social </h2>
        <div className='flex flex-col md:flex-row justify-around w-full max-w-6xl mx-auto gap-4'>
          <img id='brasil' className='max-w-[95%] md:max-w-[60%] flex-1 mx-auto md:mx-0 ' src={brasil} />

          <div className='flex flex-col flex-1 mt-8 md:mt-0'>
            <img className='max-w-[60%] mb-6 mx-auto md:mx-0 balao' src={balao} />
            <div className='flex  flex-col items-center bg-white w-[20em] rounded-lg p-4 shadow-sm'>
              <p className='text-center max-w-[90%] md:max-w-[80%] mt-4'>Se cada brasileiro fizesse uma pequena contribuição, poderíamos alcançar uma mudança monumental em nosso país.</p>
              <p className='text-center max-w-[90%] md:max-w-[80%] mt-4'>Juntos, podemos construir um futuro mais justo e solidário para todos.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}