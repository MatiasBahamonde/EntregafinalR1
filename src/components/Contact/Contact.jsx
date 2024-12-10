import React from "react";

const Contact = () => {
return (
    <section className="bg-gray-100 py-12 px-6 sm:px-12 lg:px-24">
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contáctanos</h2>
        <p className="text-center text-gray-600 mb-8">
        Completa el formulario a continuación y te responderemos lo antes posible.
        </p>
        <form action="#" method="POST" className="space-y-6">
        {
        }
        <div>
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
        Nombre
        </label>
        <input
        type="text"
        id="name"
        name="name"
        placeholder="Ingresa tu nombre"
        className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
        />
        </div>

        {
        }
        <div>
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
        Correo electrónico
        </label>
        <input
        type="email"
        id="email"
        name="email"
        placeholder="Ingresa tu correo"
        className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
        />
        </div>

        {

        }
        <div>
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
        Mensaje
        </label>
        <textarea
        id="message"
        name="message"
        rows="5"
        placeholder="Escribe tu mensaje aquí"
        className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
        ></textarea>
        </div>

        {

        }
        <div className="text-center">
        <button
        type="submit"
        className="w-full sm:w-auto px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition"
        >
        Enviar mensaje
        </button>
        </div>
        </form>
    </div>
    </section>
);
};

export default Contact;
