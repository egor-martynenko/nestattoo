// import React from 'react';

import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import { Maps } from "../../ui/YMaps/Maps";

const Footer = () => {
  return (
    <footer className="lg:mt-0" id="contacts">
      <div className="container">
      <SectionTitle title="Контакты" />
        <div className="contacts flex text-white flex-col gap-10 mb-10 px-5 max-w-7xl mx-auto">
          <p><span className="text-accent">Адрес:</span> Сергиев Посад, пр. Красной Армии, 142 Persona by D&I</p>
          <p>
            <span className="text-accent">Телефон:</span>
            <a className="w-12 h-12 fill-white" href="tel:+79912243818" target="_blank">
              +7 (991) 224 38-18
            </a>
          </p>
          <p><span className="text-accent">График работы:</span> Работаем без выходных с 11:00 до 19:00</p>
          <p><span className="text-accent">Почта:</span> persona.anastasia@yandex.ru</p>
        </div>
      </div>

      <Maps/>

    </footer>
  );
};

export default Footer;
