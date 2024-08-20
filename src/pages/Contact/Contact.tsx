import { ChangeEvent, FormEvent, useState } from 'react';
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className='flex items-center flex-col px-4'>
      <div className="flex flex-col items-center w-full max-w-lg bg-white py-6 my-12 mx-auto rounded-3xl shadow-custom">
        <h1 className="text-lg md:text-xl lg:text-2xl text-center font-bold border-b-8 pb-1 border-b-[#F43F5E] rounded-lg w-full max-w-md">
          Alguma dúvida ou sugestão? Entre em contato conosco!
        </h1>

        <form className='mt-10 space-y-6 flex flex-col items-center w-full px-4' onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1 w-full max-w-xs md:max-w-sm">
            <label htmlFor="name" className="text-sm md:text-base lg:text-lg font-bold">Nome:</label>
            <input className="bg-[#e5e5e5] w-full h-10 text-sm md:text-base lg:text-lg px-2 rounded-2xl"
              type="text"
              id="name"
              name="name"
              placeholder='Nome'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col gap-1 w-full max-w-xs md:max-w-sm">
            <label htmlFor="email" className="text-sm md:text-base lg:text-lg font-bold">Email:</label>
            <input className="bg-[#e5e5e5] w-full h-10 text-sm md:text-base lg:text-lg px-2 rounded-2xl"
              type="email"
              id="email"
              name="email"
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col gap-1 w-full max-w-xs md:max-w-sm">
            <label htmlFor="message" className="text-sm md:text-base lg:text-lg font-bold">Mensagem:</label>
            <textarea className="bg-[#e5e5e5] w-full h-32 md:h-40 text-sm md:text-base lg:text-lg px-2 rounded-2xl"
              id="message"
              name="message"
              placeholder='Digite aqui sua mensagem...'
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button className="flex justify-center items-center w-32 h-10 bg-rose-500 text-sm md:text-base lg:text-lg font-bold rounded-3xl text-rose-50 hover:bg-red-700 hover:scale-110 transition-all" type="submit">
            <span>ENVIAR</span>
          </button>
        </form>
      </div>

      <div className='flex flex-col items-center gap-4 w-full px-4'>
        <div className='flex gap-4'>
          <LinkedinLogo className='hover:text-rose-500 transition-all cursor-pointer' size={32} weight='bold' />
          <InstagramLogo className='hover:text-rose-500 transition-all cursor-pointer' size={32} weight='bold' />
          <FacebookLogo className='hover:text-rose-500 transition-all cursor-pointer' size={32} weight='bold' />
        </div>

        <hr className="border-slate-800 w-full max-w-lg" />

        <p className='text-lg font-medium'>Redes Sociais</p>
      </div>
    </div>
  );
}
