import React from 'react';


import SectionTitle from '../../ui/SectionTitle/SectionTitle'
import Slider from '../../Slider/Slider';

import './feedback.scss';

import feed_1 from '../../../assets/images/feedback/feed_1.jpg';
import feed_2 from '../../../assets/images/feedback/feed_2.jpg';
import feed_3 from '../../../assets/images/feedback/feed_3.jpg';
import feed_4 from '../../../assets/images/feedback/feed_4.jpg';
import feed_5 from '../../../assets/images/feedback/feed_5.jpg';

const feedbackData = [
  {
    source: 'yandex',
    comment: 'Отличная студия. Прекрасная атмосфера, есть всё для комфортного нахождения на сеансе. Огромное спасибо мастеру Насте, за индивидуальный подход и профессионализм.',
    img: feed_1,
    name: 'Александр Панов'
  },
  {
    source: 'yandex',
    comment: 'Анастасия, спасибо Вам большое за самую быструю запись,за приятно проведённое время и отличные татушки👍💯💣',
    img: feed_2,
    name: 'Алёна Полякова'
  },
  {
    source: 'yandex',
    comment: 'Быстро качественно доволен как удав, атмосфера в помещение приятная, результат радует глаз пока-что получилось, жду следующего сеанса))',
    img: feed_3,
    name: 'Борис Бадаев'
  },
  {
    source: 'yandex',
    comment: 'Отличное место, если надоел олдскул в прокуренных салонах, добро пожаловать в достойное место. Насть, тебе огромное спасибо за счастливую жену.',
    img: feed_4,
    name: 'Сергей Демидов'
  },
  {
    source: 'yandex',
    comment: 'Посетила салон по рекомендации подруги, спасибо огромное Насте за работу. Это стоило того, чтобы приехать из Москвы❤',
    img: feed_5,
    name: 'Екатерина Белова'
  },
];

const Feedback = () => {
  return (
    <section className="feedback">
      <div className="container">
        <SectionTitle title="Отзывы"/>
        <Slider data={feedbackData} />
      </div>
    </section>
  );
};

export default Feedback;
