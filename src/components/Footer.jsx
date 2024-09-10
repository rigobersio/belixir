import React from "react";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa"; // Importamos los íconos de react-icons

const Footer = () => {
  return (
    <div>
      <div id="contact" className="bg-gray-100 py-16">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between">
          {/* Sección de contacto */}
          <div className="w-full lg:w-2/3">
            <div className="section-title mb-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Contacto</h2>
              <p className="text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac venenatis erat. Fusce tincidunt, mi nec elementum sodales, sapien risus convallis elit, in vehicula purus turpis in metus.
              </p>
              {/* Reemplazamos el formulario por un rectángulo */}
              <div className="bg-indigo-100 h-64 w-full mt-8 shadow-lg border border-gray-300">
                {/* El rectángulo con fondo sólido */}
              </div>
            </div>
          </div>

          {/* Información de contacto */}
          <div className="w-full lg:w-1/3 lg:pl-8 mt-10 lg:mt-0">
            <div className="contact-info mb-8">
              <h3 className="text-2xl font-bold text-pink-600 mb-4">Info. de contacto</h3>
              <p className="text-gray-700 flex items-center">
                <span className="block mb-2">
                  <i className="fa fa-whatsapp text-pink-600"></i> 
                </span>
                <a
                  href="https://wa.link/omiuvb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-green-600 flex items-center space-x-2"
                >
                  +1 (210) 6988-222 <FaWhatsapp className="ml-2 text-green-500 text-xl" />
                </a>
              </p>
            </div>

            {/* Redes sociales */}
            <div className="social mb-8">
              <h3 className="text-2xl font-bold text-pink-600 mb-4">Redes Sociales</h3>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in faucibus justo. Proin elementum augue ut elit pretium venenatis.
              </p>
              <a
                href="https://www.linkedin.com/in/rigoberto-martinez/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-600 hover:text-blue-800"
              >
                <div className="flex items-center gap-2 px-4 py-2 border border-blue-500 rounded-full">
                  <FaLinkedin className="text-xl" />
                  <span>LinkedIn</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div id="footer" className="bg-gray-100 py-6 text-center">
        <div className="container mx-auto">
          <p className="text-lg text-gray-700 font-semibold flex justify-center items-center">
            <img
              src="https://res.cloudinary.com/dqh2illb5/image/upload/v1728086782/belixir/icon_belixir_1_lugubl.png"
              alt="Belixir Logo"
              className="w-6 h-6 mr-2"
            />
            Belixir
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis viverra orci, non scelerisque quam vestibulum ut. Fusce elementum dolor ac ipsum luctus, sit amet feugiat mi hendrerit.
          </p>
        </div>
      </div>
    </div>
  );
};


export default Footer;