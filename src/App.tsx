import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import { FaHeart, FaRing, FaDove, FaLeaf } from 'react-icons/fa';

const WEDDING_DATE = new Date('2025-08-23T15:30:00');

function App() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = WEDDING_DATE.getTime() - now;

      if (distance <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background-wrapper text-black font-serif bg-cover bg-fixed bg-center min-h-screen" style={{ backgroundImage: "url('/bg.jpg')" }}>

      {/* Видео и имена */}
      <section className="w-full px-8 py-12 text-center mb-8 bg-white/30" data-aos="zoom-in">
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-md">
          <video className="w-full h-[500px] object-cover" autoPlay muted loop playsInline>
            <source src="/wedding-preview.mp4" type="video/mp4" />
            Ваш браузер не поддерживает видео.
          </video>
        </div>
        <h2 className="text-4xl mt-6 flex items-center justify-center gap-2">
          <FaRing className="text-yellow-600" /> Анастасия и Данила
        </h2>
        <p className="text-2xl mt-2">23 августа 2025</p>
      </section>

      {/* Приветствие */}
        <section
            className="w-full px-8 py-20 text-center mb-12 bg-white/40 rounded-2xl shadow-xl border border-white/70 backdrop-blur-sm"
            data-aos="fade-up"
        >
            <h1 className="text-2xl md:text-4xl lg:text-6xl mb-6 italic">Дорогие гости!</h1>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-4 max-w-4xl mx-auto">
                В нашей жизни предстоит счастливое событие...
            </p>
        </section>


        {/* Когда и где + таймер */}
        <section className="w-full px-8 py-12 text-center mb-8 bg-white/30" data-aos="fade-up">
            <h2 className="text-xl md:text-2xl lg:text-3xl mb-4 italic">Когда и где?</h2>
            <p className="text-gray-800 mb-4 max-w-4xl mx-auto italic">
                Школьная улица, 39А, село Суромна,<br/>
                муниципальное образование Боголюбовское,<br/>
                Суздальский район, Владимирская область
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-center text-black text-2xl font-bold">
                {['ДНИ', 'ЧАСЫ', 'МИНУТЫ', 'СЕКУНДЫ'].map((label, index) => {
                    const value = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds][index];
                    return (
                        <div
                            key={label}
                            className="w-24 sm:w-28 md:w-32 flex flex-col items-center bg-white/80 px-4 py-4 rounded-lg shadow-lg border border-gray-300"
                        >
                            <div
                                className="text-4xl sm:text-5xl md:text-6xl font-mono">{String(value).padStart(2, '0')}</div>
                            <div className="text-xs sm:text-sm mt-2 uppercase text-gray-700">{label}</div>
                        </div>
                    );
                })}
            </div>
        </section>


        {/* Программа дня */}
        <section className="w-full px-8 py-12 text-center mb-8 bg-white/30" data-aos="fade-up">
            <h2 className="text-3xl mb-6 italic">Программа дня</h2>
            <div className="flex justify-center">
                <div className="space-y-4 text-left text-lg font-serif">
                    {[
                        {time: '15:30', icon: 'public/icons/quest.svg', text: 'Сбор гостей'},
                        {time: '16:00', icon: 'public/icons/rings.svg', text: 'Свадебная церемония'},
                        {time: '17:00', icon: 'public/icons/dinner.svg', text: 'Начало банкета'},
                        {time: '23:00', icon: 'public/icons/wine.svg', text: 'Завершение банкета'},
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 justify-start">
                            <img src={item.icon} alt="" className="w-6 h-6 sm:w-7 sm:h-7"/>
                            <p className="text-lg italic">
                                <span className="text-base font-semibold mr-2">{item.time}</span>
                                {item.text}
                            </p>
                        </div>
              ))}
            </div>
          </div>
        </section>




        {/* Дресс-код */}
        <section className="w-full px-8 py-12 text-center mb-8 bg-white/30" data-aos="fade-up">
            <h2 className="text-3xl mb-4">Дресс-код</h2>
            <p className="text-gray-800 mb-4 max-w-4xl mx-auto">
                Будем рады, если при выборе нарядов вы придержитесь следующей цветовой палитры.
                А вместо цветов — предпочтительнее подарки в конвертах 💌
            </p>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {[
                    'Шампань', 'Кофейный', 'Шоколадный', 'Кремовый', 'Бежевый',
                    'Золотистый', 'Оливковый светлый', 'Оливковый тёмный', 'Изумрудный',
                    'Пудровый розовый', 'Розово-бежевый', 'Розовый металлик',
                    'Голубой лёд', 'Серебристо-голубой', 'Серый шелк'
                ].map((label, i) => (
                    <div
                        key={i}
                        className="group relative w-20 h-20 sm:w-24 sm:h-24 rounded-md overflow-hidden border border-gray-300 shadow-sm transition duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        <div
                            className="w-full h-full bg-center bg-cover"
                            style={{backgroundImage: `url(public/palitra_parts/p${i + 1}.png)`}}
                        ></div>

                        <div
                            className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-[10px] sm:text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-1 text-center"
                        >
                            {label}
                        </div>
                    </div>
                ))}
            </div>

            <p className="text-sm italic text-gray-600 mt-6">Ваш наряд станет частью волшебства этого дня ✨</p>
        </section>


        {/* Место проведения на карте */}
        <section className="w-full px-8 py-12 text-center mb-8 bg-white/30" data-aos="fade-up">
            <h2 className="text-3xl mb-4">Место проведения</h2>
            <div className="aspect-video w-full max-w-4xl mx-auto rounded-md overflow-hidden shadow-md">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3139.7453255096057!2d40.492434388597474!3d56.18934069874313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414c7b35f519c25d%3A0x5b98bbfef0f8a6d8!2z0KjQutC-0LvRjNC90LDRjyDRg9C7Liwg0KHRg9GA0L7QvNC90LAsINCS0LvQsNC00LjQvNC40YDRgdC60LDRjyDQvtCx0LsuLCA2MDEyNzA!5e0!3m2!1sru!2sru!4v1743861943915!5m2!1sru!2sru"
                    width="100%" height="100%" style={{border: 0}}
                    allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>

        {/* Подтверждение участия */}
        <section
          className="w-full px-8 py-12 text-center mb-12 bg-white/40 rounded-2xl shadow-xl border border-white/70 backdrop-blur-sm"
          data-aos="fade-up"
        >
          <h2 className="text-3xl mb-4 italic relative inline-block">
            <div className="text-yellow-600 text-2xl mb-1 flex justify-center">
              <FaHeart />
            </div>
            Подтвердите участие
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-yellow-400 rounded-full animate-pulse" />
          </h2>

          <div className="mt-6">
            <button
              onClick={() => setShowForm(true)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full shadow-lg transition duration-300 ring-2 ring-yellow-300 hover:scale-105"
            >
              Я приду!
            </button>
          </div>

          {showForm && (
            <div className="mt-6 text-center animate-fade-in">
              <p className="text-lg mb-2 italic text-gray-700">Заполните форму для участия:</p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSch4H3V7ZDCjVgd114dzNcuJzEAN5rrsGQwtAp12hfwgnpDbg/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline text-lg hover:text-blue-800 transition"
              >
                Перейти к форме
              </a>
            </div>
          )}
        </section>





        {/* Контакты */}
        <section className="w-full px-8 py-12 text-center mb-8 bg-white/30" data-aos="fade-up">
            <h2 className="text-3xl mb-4 italic relative inline-block">
                <div className="text-yellow-600 text-2xl mb-1 flex justify-center">
                    <FaRing/>
                </div>
                Контакты
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-yellow-400 rounded-full animate-pulse"/>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <ContactItem icon={Phone} text="+7 (902) 883-14-26"/>
                <ContactItem icon={Mail} text="anastasiyavrd@gmail.com"/>
                <ContactItem icon={MessageSquare} text="@Lale296"/>
            </div>
        </section>

        {/* Символика */}
        <div className="flex justify-center gap-6 text-2xl text-rose-500 mb-8" data-aos="fade-up">
        <FaLeaf className="text-green-600" />
        <FaHeart className="text-purple-400" />
        <FaDove className="text-gray-600" />
        <FaRing className="text-yellow-600" />
      </div>
    </div>
  );
}

function ContactItem({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
      <Icon className="w-6 h-6 text-gray-800 mb-2" />
      <p className="text-gray-600">{text}</p>
    </div>
  );
}

export default App;
