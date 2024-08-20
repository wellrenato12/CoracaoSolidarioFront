import donate from '../../assets/donate.jpg'
import home from '../../assets/home.svg'
import brasil from '../../assets/brasilB.svg'
import balao from '../../assets/balao.svg'

export function Home() {
  return (
    <>
      <img src={donate} className="rounded-sm mt-12 h-[200px] md:h-[300px] xl:h-[500px] w-full object-cover" alt="" />
      <div className="space-y-12 max-w-7xl mx-auto my-12 px-4 md:px-8">
        <h2 className="text-center text-rose-700 text-2xl font-medium">ODS 1 ONU - Erradicação da pobreza</h2>
        <p className="text-center text-rose-800 text-4xl md:text-5xl font-bold">Doações transformam o mundo!</p>

        <div className="flex flex-col md:flex-row items-center justify-around py-12 text-rose-700 space-y-8 md:space-y-0">
            <div className="max-w-[90%] md:max-w-[50%]">
              <strong className='text-2xl'>Qual é a importancia da doação?</strong>
              <p>Doar não é apenas um ato de generosidade; é uma ferramenta poderosa para transformar o mundo. Com cada doação, você ajuda a criar oportunidades para quem mais precisa e contribui para erradicar a pobreza.</p><br></br>
              <p>🌍 <strong>Apoie o ODS 1: </strong>A pobreza extrema afeta milhões de pessoas, mas juntos podemos mudar essa realidade. O ODS 1 da ONU foca em erradicar a pobreza em todas as suas formas até 2030. Sua doação é um passo concreto em direção a esse objetivo.</p><br></br>
              <p>💪 <strong>Faça sua Doação Valer: </strong>Cada contribuição faz a diferença, proporcionando acesso à educação, saúde e recursos essenciais. Você está ajudando a quebrar o ciclo da pobreza e a construir um futuro mais justo.</p>           
            </div>
          <img className='max-w-[90%] md:max-w-[50%]' src={home} alt="" />
        </div>
      </div>

      <div className="bg-rose-400 py-12">
      <h2 className="text-center text-white text-3xl font-bold mb-8">O caminho da sua doação</h2>
      <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-8 max-w-4xl mx-auto px-4">
       
        <div className="text-center text-white">
          <div className="flex justify-center mb-4">
            <span className="inline-block w-12 h-12 bg-white text-rose-400 rounded-full flex items-center justify-center text-2xl">1</span>
          </div>
          <p>Primeiro crie seu perfil e depois selecione o tipo de doação que deseja realizar.</p>
        </div>
        
        <div className="hidden md:flex justify-center items-center">
          <span className="text-white text-4xl">→</span>
        </div>

        <div className="text-center text-white">
          <div className="flex justify-center mb-4">
            <span className="inline-block w-12 h-12 bg-white text-rose-400 rounded-full flex items-center justify-center text-2xl">2</span>
          </div>
          <p>Nós juntamos todas essas doações, compramos os mantimentos e preparamos todos os pedidos.</p>
        </div>
        
        <div className="hidden md:flex justify-center items-center">
          <span className="text-white text-4xl">→</span>
        </div>

        <div className="text-center text-white">
          <div className="flex justify-center mb-4">
            <span className="inline-block w-12 h-12 bg-white text-rose-400 rounded-full flex items-center justify-center text-2xl">3</span>
          </div>
          <p>Os pedidos são entregues para as famílias mais vulneráveis e pessoas em situação de rua atendidas pelos nossos projetos.</p>
        </div>
        
        <div className="hidden md:flex justify-center items-center">
          <span className="text-white text-4xl">→</span>
        </div>

        <div className="text-center text-white">
          <div className="flex justify-center mb-4">
            <span className=" w-12 h-12 bg-white text-rose-400 rounded-full flex items-center justify-center text-2xl">4</span>
          </div>
          <p>Juntos, garantimos que milhares em situação de vulnerabilidade tenham acesso à sua ajuda.</p>
        </div>
      </div>
    </div>

    <div className='space-y-12 max-w-7xl mx-auto my-12 flex justify-center py-12 px-4 md:px-8'>
        <div className='flex flex-col md:flex-row justify-around w-full max-w-6xl mx-auto'>
          <img className='max-w-[80%] md:max-w-[50%] flex-1 mx-auto md:mx-0' src={brasil} />
          
          <div className='flex flex-col text-rose-700 flex-1 mt-8 md:mt-0'>
          <img className='max-w-[40%] mb-6 mx-auto md:mx-0' src={balao} />
            <div className='flex  flex-col items-center'>
              <p className='text-center max-w-[90%] md:max-w-[80%] mt-4'>Se cada brasileiro fizesse uma pequena contribuição, poderíamos alcançar uma mudança monumental em nosso país.</p>
              <p className='text-center max-w-[90%] md:max-w-[80%] mt-4'>Juntos, podemos construir um futuro mais justo e solidário para todos.</p>
            </div>
          </div>
        </div>
      </div>

    </>    
  )
}