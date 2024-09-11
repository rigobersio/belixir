import React from "react";

const NavBar = () => {
  return (
    <nav id="menu" className="bg-white shadow-md fixed w-full z-10 top-0 transition-all duration-800">
      <div className="container mx-auto flex justify-between items-center py-3">
        
        {/* Contenedor para el ícono y el título */}
        <div className="flex items-center">
          {/* Icono */}
          <img
            src="https://res.cloudinary.com/dqh2illb5/image/upload/v1728086782/belixir/icon_belixir_1_lugubl.png"
            alt="logo"
            className="w-10 mr-4"
          />
          {/* Título */}
          <a className="text-lg font-serif font-medium italic text-gray-800" href="#page-top">
            Belixir
          </a>
        </div>

        {/* Botón de navegación colapsable (para pantallas pequeñas) */}
        <button
          type="button"
          className="block lg:hidden text-gray-800 focus:outline-none"
          data-toggle="collapse"
          data-target="#navbar"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="block w-6 h-1 bg-gray-800 mb-1"></span>
          <span className="block w-6 h-1 bg-gray-800 mb-1"></span>
          <span className="block w-6 h-1 bg-gray-800"></span>
        </button>

        {/* Lista de links */}
        <div className="hidden lg:flex space-x-6">
          <ul className="flex space-x-6 text-gray-700 font-serif">
            <li>
              <a href="#features" className="hover:text-indigo-500 transition-all">Inicio</a>
            </li>
            <li>
              <a href="#about" className="hover:text-indigo-500 transition-all">Orígenes</a>
            </li>
            <li>
              <a href="#services" className="hover:text-indigo-500 transition-all">Enfermedades</a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-indigo-500 transition-all">Galería</a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-indigo-500 transition-all">Testimonios</a>
            </li>
            <li>
              <a href="#team" className="hover:text-indigo-500 transition-all">Equipo</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-indigo-500 transition-all">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;