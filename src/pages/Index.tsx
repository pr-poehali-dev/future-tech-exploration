
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
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

      {/* Главный контент */}
      <main className="container mx-auto py-10 px-4">
        {/* Герой-секция */}
        <section className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="md:w-1/2">
            <img 
              src="/placeholder.svg" 
              alt="Красивая лошадь" 
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Добро пожаловать в мир лошадей</h2>
            <p className="text-lg text-amber-800 mb-6">
              Наш сайт создан для того, чтобы помочь владельцам лошадей обеспечить наилучший уход 
              за своими четвероногими друзьями. Здесь вы найдете полезную информацию о кормлении, 
              уходе, здоровье и привычках лошадей.
            </p>
            <div className="flex gap-4">
              <Button className="bg-amber-700 hover:bg-amber-800 text-amber-50">
                Узнать больше
              </Button>
              <Button variant="outline" className="border-amber-700 text-amber-700 hover:bg-amber-100">
                О нас
              </Button>
            </div>
          </div>
        </section>

        {/* Разделы сайта */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Основные разделы</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-amber-100 border-amber-200">
              <h3 className="text-2xl font-bold text-amber-800 mb-4">Уход за лошадью</h3>
              <p className="text-amber-700 mb-6">
                Узнайте о правильной чистке, кормлении и физической активности вашей лошади.
              </p>
              <Link to="/care">
                <Button className="bg-amber-700 hover:bg-amber-800 text-amber-50 w-full">
                  Перейти
                </Button>
              </Link>
            </Card>
            
            <Card className="p-6 bg-amber-100 border-amber-200">
              <h3 className="text-2xl font-bold text-amber-800 mb-4">Забота о здоровье</h3>
              <p className="text-amber-700 mb-6">
                Информация о профилактических осмотрах, вакцинации и важных аспектах здоровья лошади.
              </p>
              <Link to="/health">
                <Button className="bg-amber-700 hover:bg-amber-800 text-amber-50 w-full">
                  Перейти
                </Button>
              </Link>
            </Card>
            
            <Card className="p-6 bg-amber-100 border-amber-200">
              <h3 className="text-2xl font-bold text-amber-800 mb-4">Лошадиные привычки</h3>
              <p className="text-amber-700 mb-6">
                Советы по поддержанию психологического состояния и обучению вашей лошади.
              </p>
              <Link to="/habits">
                <Button className="bg-amber-700 hover:bg-amber-800 text-amber-50 w-full">
                  Перейти
                </Button>
              </Link>
            </Card>
          </div>
        </section>

        {/* Дополнительная информация */}
        <section className="bg-amber-100 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-amber-900 mb-4 text-center">Знаете ли вы?</h2>
          <p className="text-lg text-amber-800 text-center">
            Лошади могут спать как стоя, так и лежа, но обычно они спят стоя благодаря 
            особому механизму фиксации суставов, который позволяет им отдыхать, не теряя равновесия.
          </p>
        </section>
      </main>

      {/* Подвал */}
      <footer className="bg-amber-800 text-amber-100 p-6">
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

export default Index;
