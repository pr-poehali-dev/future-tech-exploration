
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Верхняя навигация */}
      <header className="bg-amber-100 p-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-amber-900">Мир лошадей</h1>
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="text-amber-800 hover:text-amber-600 font-medium">Главная</Link>
            <Link to="/about" className="text-amber-800 hover:text-amber-600 font-medium">О сайте</Link>
            <Link to="/care" className="text-amber-800 hover:text-amber-600 font-medium">Уход за лошадью</Link>
            <Link to="/health" className="text-amber-800 hover:text-amber-600 font-medium">Забота о здоровье</Link>
            <Link to="/habits" className="text-amber-800 hover:text-amber-600 font-medium">Лошадиные привычки</Link>
          </nav>
          <Button variant="outline" className="md:hidden bg-amber-700 text-amber-50">
            Меню
          </Button>
        </div>
      </header>

      {/* Контент */}
      <main className="container mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold text-amber-900 mb-6">О сайте</h1>
        
        <div className="bg-amber-100 p-8 rounded-lg mb-10">
          <h2 className="text-2xl font-bold text-amber-800 mb-4">Наша миссия</h2>
          <p className="text-lg text-amber-700 mb-4">
            Наш сайт "Мир лошадей" создан с целью предоставления владельцам лошадей и всем интересующимся
            качественной и полезной информации о содержании, уходе и воспитании этих прекрасных животных.
          </p>
          <p className="text-lg text-amber-700">
            Мы стремимся помочь владельцам лошадей обеспечить наилучший уход за своими четвероногими друзьями,
            делясь знаниями, основанными на опыте и научных исследованиях.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-10">
          <div className="bg-amber-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">Команда авторов</h2>
            <p className="text-amber-700 mb-4">
              Наша команда состоит из опытных коневодов, ветеринаров и любителей лошадей, 
              которые объединились, чтобы создать информативный ресурс для всех, кто интересуется
              этими величественными животными.
            </p>
            <p className="text-amber-700">
              Мы постоянно обновляем и дополняем наш сайт новой полезной информацией, основываясь 
              на последних исследованиях и практиках в сфере ухода за лошадьми.
            </p>
          </div>
          
          <div className="bg-amber-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">Контактная информация</h2>
            <p className="text-amber-700 mb-4">
              Если у вас есть вопросы, предложения или комментарии, не стесняйтесь связаться с нами. 
              Мы всегда открыты для общения и обмена опытом.
            </p>
            <ul className="text-amber-700 space-y-2">
              <li>📧 Email: contact@mirloshadey.ru</li>
              <li>📱 Телефон: +7 (XXX) XXX-XX-XX</li>
              <li>📍 Адрес: г. Москва, ул. Конная, д. 10</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-amber-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-amber-800 mb-4">Ответственность за контент</h2>
          <p className="text-lg text-amber-700">
            За весь контент, представленный на данном сайте, отвечает студент Янчук Н.Е.
          </p>
        </div>
      </main>

      {/* Подвал */}
      <footer className="bg-amber-800 text-amber-100 p-6 mt-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Мир лошадей</h3>
              <p>© 2023 Все права защищены</p>
            </div>
            <div>
              <p>Ответственный за контент: студент Янчук Н.Е.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
