
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Care = () => {
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
        <h1 className="text-4xl font-bold text-amber-900 mb-6">Уход за лошадью</h1>
        
        <p className="text-lg text-amber-800 mb-8">
          Правильный уход за лошадью включает не только кормление, но и чистку, физические нагрузки 
          и многое другое. В этом разделе вы найдете полезную информацию о том, как обеспечить вашей 
          лошади надлежащий уход.
        </p>
        
        <Tabs defaultValue="cleaning" className="mb-10">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="cleaning" className="text-amber-800 data-[state=active]:bg-amber-200">Чистка</TabsTrigger>
            <TabsTrigger value="feeding" className="text-amber-800 data-[state=active]:bg-amber-200">Кормление</TabsTrigger>
            <TabsTrigger value="activity" className="text-amber-800 data-[state=active]:bg-amber-200">Физическая активность</TabsTrigger>
          </TabsList>
          
          <TabsContent value="cleaning" className="bg-amber-100 p-6 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-amber-800 mb-4">Чистка лошади</h2>
                <p className="text-amber-700 mb-4">
                  Регулярная чистка не только поддерживает красивый внешний вид лошади, 
                  но и является важной частью ухода за её здоровьем. Чистка помогает:
                </p>
                <ul className="list-disc pl-5 text-amber-700 mb-4 space-y-2">
                  <li>Улучшить кровообращение</li>
                  <li>Удалить грязь и паразитов</li>
                  <li>Проверить общее состояние кожи и шерсти</li>
                  <li>Укрепить связь между вами и вашей лошадью</li>
                </ul>
                <p className="text-amber-700">
                  Рекомендуется чистить лошадь ежедневно, особенно если она активно используется.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-800 mb-4">Инструменты для чистки</h3>
                <ul className="text-amber-700 space-y-3">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">Скребница:</span> 
                    Металлическая щетка для удаления грязи и пыли
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">Щетка для шерсти:</span> 
                    Удаляет пыль и придает блеск шерсти
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">Копытный крючок:</span> 
                    Для очистки копыт от грязи и камней
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">Гребень для гривы и хвоста:</span> 
                    Распутывает волосы и удаляет грязь
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">Губка:</span> 
                    Для очистки глаз, ноздрей и чувствительных участков
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="feeding" className="bg-amber-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">Кормление лошади</h2>
            <p className="text-amber-700 mb-6">
              Правильное питание — одна из основ здоровья лошади. Рацион должен быть сбалансированным 
              и соответствовать физической нагрузке, возрасту и особенностям конкретной лошади.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-amber-800 mb-3">Основные компоненты рациона</h3>
                <ul className="text-amber-700 space-y-3">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">Сено и трава:</span> 
                    Основа рациона, источник клетчатки
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">Зерно:</span> 
                    Дополнительный источник энергии (овес, ячмень, кукуруза)
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">Отруби:</span> 
                    Богаты витаминами и минералами
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">Минеральные добавки:</span> 
                    Соль, кальций, фосфор и другие микроэлементы
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">Вода:</span> 
                    Постоянный доступ к чистой воде обязателен
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-amber-800 mb-3">Режим кормления</h3>
                <p className="text-amber-700 mb-4">
                  Лошади — травоядные животные, которые в природе едят почти постоянно, 
                  поэтому их пищеварительная система лучше всего работает при частом 
                  поступлении небольших порций корма.
                </p>
                <p className="text-amber-700">
                  Рекомендуемый режим кормления:
                </p>
                <ul className="list-disc pl-5 text-amber-700 mt-2">
                  <li>Сено должно быть доступно почти постоянно</li>
                  <li>Зерно давать 2-3 раза в день небольшими порциями</li>
                  <li>После интенсивных тренировок давать корм не раньше чем через час</li>
                  <li>Избегать резких изменений в рационе</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="activity" className="bg-amber-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">Физическая активность</h2>
            <p className="text-amber-700 mb-6">
              Лошади нуждаются в регулярной физической активности для поддержания здоровья, 
              правильного развития мышц и психологического благополучия.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-amber-800 mb-3">Типы активности</h3>
                <ul className="text-amber-700 space-y-3">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">Свободный выпас:</span> 
                    Идеальный вариант для ежедневной активности
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">Прогулки под седлом:</span> 
                    Регулярные прогулки шагом, рысью и галопом
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">Тренировки:</span> 
                    Специальные упражнения для развития мышц и улучшения координации
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">Работа на корде:</span> 
                    Хороший способ обеспечить контролируемую нагрузку
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-amber-800 mb-3">Рекомендации по активности</h3>
                <p className="text-amber-700 mb-3">
                  Для поддержания оптимальной формы лошади рекомендуется:
                </p>
                <ul className="list-disc pl-5 text-amber-700 space-y-2">
                  <li>Обеспечить не менее 1-2 часов активности ежедневно</li>
                  <li>Чередовать различные типы нагрузки</li>
                  <li>Правильно разминать лошадь перед интенсивными тренировками</li>
                  <li>Постепенно увеличивать нагрузку, избегая резких изменений</li>
                  <li>Давать время на восстановление после интенсивных тренировок</li>
                  <li>Учитывать индивидуальные особенности и уровень подготовки лошади</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-center mt-8">
          <Link to="/">
            <Button variant="outline" className="bg-amber-700 text-amber-50 hover:bg-amber-800">
              Вернуться на главную
            </Button>
          </Link>
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

export default Care;
