
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const Habits = () => {
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
        <h1 className="text-4xl font-bold text-amber-900 mb-6">Лошадиные привычки</h1>
        
        <p className="text-lg text-amber-800 mb-8">
          Понимание привычек и поведения лошадей — ключ к установлению доверительных отношений с вашим 
          четвероногим другом. В этом разделе вы найдете информацию о психологии лошадей и эффективных 
          методах обучения.
        </p>
        
        <Tabs defaultValue="psychology" className="mb-10">
          <TabsList className="grid grid-cols-2 mb-8">
            <TabsTrigger value="psychology" className="text-amber-800 data-[state=active]:bg-amber-200">Психологическое состояние</TabsTrigger>
            <TabsTrigger value="training" className="text-amber-800 data-[state=active]:bg-amber-200">Обучение</TabsTrigger>
          </TabsList>
          
          <TabsContent value="psychology" className="bg-amber-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">Психологическое состояние лошади</h2>
            <p className="text-amber-700 mb-6">
              Лошади — социальные животные с развитой эмоциональной системой. Понимание их психологии помогает 
              обеспечить им комфортные условия и установить доверительные отношения.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-amber-800 mb-3">Распознавание стресса</h3>
                <p className="text-amber-700 mb-3">
                  Признаки стресса у лошади:
                </p>
                <ul className="list-disc pl-5 text-amber-700 space-y-2 mb-4">
                  <li>Повышенная нервозность, пугливость</li>
                  <li>Потеря аппетита</li>
                  <li>Чрезмерное потоотделение</li>
                  <li>Частое фырканье и храп</li>
                  <li>Агрессивное поведение</li>
                  <li>Повторяющиеся движения (кружение, переступание)</li>
                  <li>Повышенное сердцебиение и дыхание</li>
                </ul>
                <p className="text-amber-700">
                  Важно выявлять причины стресса и устранять их, а не просто бороться с симптомами.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-amber-800 mb-3">Поддержание эмоционального баланса</h3>
                <p className="text-amber-700 mb-3">
                  Для поддержания психологического благополучия лошади рекомендуется:
                </p>
                <ul className="list-disc pl-5 text-amber-700 space-y-2">
                  <li>Обеспечить социальные контакты с другими лошадьми</li>
                  <li>Создать стабильный распорядок дня</li>
                  <li>Предоставлять достаточно времени на свободный выпас</li>
                  <li>Обеспечить разнообразную физическую активность</li>
                  <li>Использовать позитивное подкрепление при обучении</li>
                  <li>Минимизировать стрессовые ситуации и резкие изменения</li>
                  <li>Регулярно общаться с лошадью, проявляя терпение и заботу</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold text-amber-800 mb-4">Вредные привычки и их коррекция</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="p-4 border-amber-300 bg-amber-50">
                  <h4 className="font-bold text-amber-800 mb-2">Прикуска</h4>
                  <p className="text-amber-700 text-sm">
                    Привычка захватывать предметы зубами и заглатывать воздух. 
                    Может быть вызвана стрессом или скукой. Для коррекции используйте 
                    специальные ошейники и обеспечьте достаточную физическую активность.
                  </p>
                </Card>
                
                <Card className="p-4 border-amber-300 bg-amber-50">
                  <h4 className="font-bold text-amber-800 mb-2">Качание</h4>
                  <p className="text-amber-700 text-sm">
                    Монотонное раскачивание из стороны в сторону. Обычно развивается 
                    при недостатке движения. Увеличьте время выпаса и тренировок, 
                    обеспечьте общение с другими лошадьми.
                  </p>
                </Card>
                
                <Card className="p-4 border-amber-300 bg-amber-50">
                  <h4 className="font-bold text-amber-800 mb-2">Копание</h4>
                  <p className="text-amber-700 text-sm">
                    Частое и сильное копание в деннике. Может быть признаком нетерпения, 
                    скуки или беспокойства. Увеличьте время активности и обогатите 
                    окружающую среду игрушками и общением.
                  </p>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="training" className="bg-amber-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">Обучение лошади</h2>
            <p className="text-amber-700 mb-6">
              Обучение лошади — процесс, требующий терпения, последовательности и понимания 
              психологии этих удивительных животных. Правильный подход к обучению помогает 
              сформировать прочную связь между человеком и лошадью.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold text-amber-800 mb-3">Основные принципы обучения</h3>
                <ul className="list-disc pl-5 text-amber-700 space-y-2">
                  <li>Последовательность и терпение</li>
                  <li>Использование позитивного подкрепления</li>
                  <li>Разделение навыков на простые шаги</li>
                  <li>Учет индивидуальных особенностей лошади</li>
                  <li>Систематические, но короткие занятия</li>
                  <li>Повторение и закрепление навыков</li>
                  <li>Постепенное усложнение задач</li>
                  <li>Умение вовремя завершить тренировку</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-amber-800 mb-3">Методы обучения</h3>
                <div className="space-y-4 text-amber-700">
                  <div>
                    <p className="font-bold">Положительное подкрепление:</p>
                    <p className="text-sm">
                      Награда (лакомство, похвала, поглаживание) за желаемое поведение, которая 
                      увеличивает вероятность его повторения.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold">Отрицательное подкрепление:</p>
                    <p className="text-sm">
                      Прекращение дискомфорта (например, давления) при выполнении желаемого действия. 
                      Не путать с наказанием!
                    </p>
                  </div>
                  <div>
                    <p className="font-bold">Кликер-тренинг:</p>
                    <p className="text-sm">
                      Использование звукового сигнала (кликера) для точного обозначения момента 
                      правильного выполнения команды с последующим вознаграждением.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold">Метод подражания:</p>
                    <p className="text-sm">
                      Использование примера других обученных лошадей для ускорения процесса обучения.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-amber-800 mb-4">Базовые навыки для обучения</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="p-4 border-amber-300 bg-amber-50">
                <h4 className="font-bold text-amber-800 mb-2">Хождение на поводу</h4>
                <p className="text-amber-700 text-sm">
                  Учите лошадь идти рядом с вами, останавливаться и поворачивать 
                  по вашей команде. Начинайте с коротких отрезков и постепенно увеличивайте 
                  расстояние и сложность маршрута.
                </p>
              </Card>
              
              <Card className="p-4 border-amber-300 bg-amber-50">
                <h4 className="font-bold text-amber-800 mb-2">Команда "Стой"</h4>
                <p className="text-amber-700 text-sm">
                  Важнейшая команда для безопасности. Лошадь должна останавливаться 
                  по голосовой команде или сигналу поводом. Поощряйте каждую удачную попытку.
                </p>
              </Card>
              
              <Card className="p-4 border-amber-300 bg-amber-50">
                <h4 className="font-bold text-amber-800 mb-2">Принятие амуниции</h4>
                <p className="text-amber-700 text-sm">
                  Обучите лошадь спокойно стоять при надевании уздечки, седла и других 
                  элементов амуниции. Действуйте постепенно, с частыми поощрениями.
                </p>
              </Card>
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

export default Habits;
