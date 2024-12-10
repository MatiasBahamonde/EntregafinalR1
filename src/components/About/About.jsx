import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {
        }
        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Sobre Nosotros
        </h2>
        <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
      Vamos a descubrir en Matias Store nuestro Objetivo, Garantia y la historia de como empezo todo.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {
        }
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
          <img
            className="w-24 h-24 rounded-full object-cover mb-4"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQ5yrCi0Hl2tkuV79wWYAdrLyFIgILxYmQA&s"
            alt="Miembro del equipo"
          />
          <h3 className="text-xl font-semibold text-gray-800">Matias Bahamonde</h3>
          <p className="mt-2 text-gray-600">Estudiante de Tecnico Informatica</p>
          <p className="mt-4 text-gray-500">
          Nuestra empresa fue creada el 16 de noviembre de 2024 con el propósito de ofrecer camisetas únicas y de alta calidad.
          </p>
        </div>

        {
        }
        <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-gray-900">Nuestro Objetivo es:</h3>
          <p className="mt-4 text-gray-600">
          El objetivo de nuestra empresa es ofrecer camisetas de fútbol de alta calidad,que muestren el amor por el futbol de cada uno.
          </p>
        </div>

        {
        }
        <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-gray-900"> Garantia</h3>
          <p className="mt-4 text-gray-600">
          En nuestra empresa, nos comprometemos a ofrecer productos de la más alta calidad.Todas nuestras camisetas de fútbol cuentan con una garantía de satisfacción del cliente. Si no estás completamente satisfecho con tu compra, te ofrecemos un plazo de 30 días para realizar un cambio o devolución.
          </p>
        </div>
      </div>

      {
      }
      <div className="mt-16 text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-12 rounded-lg shadow-xl">
        <h3 className="text-3xl font-bold">Nuestra Historia</h3>
        <p className="mt-6 text-lg max-w-2xl mx-auto">
          Matias Store comenzó con una pasión por el futbol y logramos diseñar camisetas de futbol de tus equipos favoritos.
        </p>
      </div>
    </section>
  );
};

export default About;
