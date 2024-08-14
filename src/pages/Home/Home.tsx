import logo from '../../assets/logo.png'
import donate from '../../assets/donate.jpg'

export function Home() {
  return (
    <>
      <img src={donate} className="rounded-sm mt-12 h-[200px] md:h-[300px] xl:h-[500px] w-full object-cover" alt="" />
      <div className="space-y-12 max-w-7xl mx-auto my-12">
        <h2 className="text-center text-2xl font-medium">ODS 1 ONU - Erradicação da pobreza</h2>
        <p className="text-center text-5xl font-bold">Doações transforma o mundo</p>

        <div className="flex items-center justify-around py-12">
          <p className="max-w-[50%]"><strong>Importancia da doação</strong>Erradicar a pobreza é essencial para alcançar o desenvolvimento sustentável e promover uma vida digna para todos. A pobreza afeta não apenas a qualidade de vida, mas também limita o potencial de desenvolvimento econômico e social. Portanto, alcançar o ODS 1 é fundamental para a construção de uma sociedade mais justa e equitativa.</p>
          <img className='' src={logo} alt="" />
        </div>

        <div className="flex items-center justify-around py-12">
          <img className='' src={logo} alt="" />
          <p className="max-w-[50%]">Erradicar a pobreza é essencial para alcançar o desenvolvimento sustentável e promover uma vida digna para todos. A pobreza afeta não apenas a qualidade de vida, mas também limita o potencial de desenvolvimento econômico e social. Portanto, alcançar o ODS 1 é fundamental para a construção de uma sociedade mais justa e equitativa.</p>
        </div>
      </div>
    </>
  )
}