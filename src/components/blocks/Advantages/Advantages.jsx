import React from 'react';

const Advantages = () => {
  return (
    <div className="advantages_container px-5 max-w-7xl mx-auto overflow-x-scroll relative z-20">
      <section className="advantages px-5 md:mx-8 min-w-min">
        <ul className="advantages_list flex justify-between pb-0">
          <li className="advantages_item w-1/4 text-white flex items-center flex-col relative">
            <div className="pt-9 pb-5 font-semibold text-2xl z-30 text-center">
              ОПЫТНЫЙ<br />МАСТЕР
            </div>
            <span className="dec absolute font-normal text-8xl z-20">01</span>
            <p className="m-5 text-lg w-52 pr-5">
              Профессиональный мастер-художник, воплощающий ваши идеи в жизнь.
            </p>
          </li>
          <li className="advantages_item w-1/4 text-white flex items-center flex-col relative ">
            <div className="pt-9 pb-5 font-semibold text-2xl z-30 text-center">
              СТУДИЯ В<br />ЦЕНТРЕ ГОРОДА
            </div>
            <span className="dec absolute font-normal text-8xl z-20">02</span>
            <p className="m-5 text-lg w-52">
              Здание ТЦ "Пассаж" напротив белого пруда.<br />На территории есть открытая парковка.
            </p>
          </li>
          <li className="advantages_item w-1/4 text-white flex items-center flex-col relative">
            <div className="pt-9 pb-5 font-semibold text-2xl z-30 text-center">
              ОТКРЫТЫЕ<br />ЦЕНЫ
            </div>
            <span className="dec absolute font-normal text-8xl z-20">03</span>
            <p className="m-5 text-lg w-52">
              Мастер сразу скажет цену, в которую входит эскиз, работа, заживляющая плёнка.
            </p>
          </li>
          <li className="advantages_item w-1/4 text-white flex items-center flex-col relative">
            <div className="pt-9 pb-5 font-semibold text-2xl z-30 text-center">
              МАСТЕР ВСЕГДА<br />РЯДОМ
            </div>
            <span className="dec absolute font-normal text-8xl z-20">04</span>
            <p className="m-5 text-lg w-52">
              После сеанса мастер продолжит консультировать вас по заживлению и уходу за татуировкой.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Advantages;
