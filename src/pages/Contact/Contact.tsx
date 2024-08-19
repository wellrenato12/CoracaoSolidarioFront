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
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log('Formulário enviado:', formData);
    // Limpar o formulário após o envio
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className='flex items-center flex-col'>
      <div className="flex flex-col items-center  w-[600px]  md:w-[500px]   bg-white py-6 my-12 mx-auto rounded-3xl shadow-custom">
        <h1 className="text-[16px] text-center md:text-[25px] font-bold border-b-8 pb-1 border-b-[#F43F5E] rounded-lg w-[400px]">Alguma dúvida ou sugestão? Entre em contato conosco!</h1>

        <form className='mt-[40px] space-y-6 flex flex-col items-center' onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-[16px] md:text-[18px] font-bold">Nome:</label>
            <input className="bg-[#e5e5e5] w-[300px] h-10 text-[16px] md:text-[18px] px-2 rounded-2xl"
              type="text"
              id="name"
              name="name"
              placeholder='Nome'
              value={formData.name}
              onChange={handleChange}
              // className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-[16px] md:text-[18px] font-bold">Email:</label>
            <input className="bg-[#e5e5e5] w-[300px] h-10 text-[16px] md:text-[18px] px-2 rounded-2xl"
              type="email"
              id="email"
              name="email"
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              // className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-[16px] md:text-[18px] font-bold">Mensagem:</label>
            <textarea className="bg-[#e5e5e5] w-[300px] text-[16px] md:text-[18px] px-2 rounded-2xl"
              id="message"
              name="message"
              placeholder='Digite aqui sua mensagem...'
              value={formData.message}
              onChange={handleChange}
              // className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            ></textarea>
          </div>

          <button className="flex justify-center items-center w-[120px] h-10 bg-rose-500 text-[16px] md:text-[18px] font-bold rounded-3xl text-rose-50 hover:bg-red-700 hover:scale-110 transition-all" type="submit">
            <span>ENVIAR</span>
          </button>

        </form>
      </div>

      <div className='flex items-center flex-col gap-2'>
        <div className='flex gap-4'>
          <LinkedinLogo className='hover:text-rose-500  transition-all cursor-pointer' size={32} weight='bold' />
          <InstagramLogo className='hover:text-rose-500 transition-all cursor-pointer' size={32} weight='bold' />
          <FacebookLogo className='hover:text-rose-500 transition-all cursor-pointer' size={32} weight='bold' />
        </div>

        <hr className="border-slate-800 w-full" />

        <p className='text-lg font-medium'>Redes Sociais</p>
      </div>
    </div>
  );
}