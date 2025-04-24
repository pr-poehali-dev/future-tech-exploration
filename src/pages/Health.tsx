
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Health = () => {
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
        <h1 className="text-4xl font-bold text-amber-900 mb-6">Забота о здоровье</h1>
        
        <p className="text-lg text-amber-800 mb-8">
          Здоровье лошади требует постоянного внимания и профилактических мер. В этом разделе 
          вы найдете важную информацию о регулярных осмотрах и вакцинации, необходимых для 
          поддержания здоровья вашей лошади.
        </p>
        
        <Tabs defaultValue="checkups" className="mb-10">
          <TabsList className="grid grid-cols-2 mb-8">
            <TabsTrigger value="checkups" className="text-amber-800 data-[state=active]:bg-amber-200">Профилактические осмотры</TabsTrigger>
            <TabsTrigger value="vaccination" className="text-amber-800 data-[state=active]:bg-amber-200">Вакцинация</TabsTrigger>
          </TabsList>
          
          <TabsContent value="checkups" className="bg-amber-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">Профилактические осмотры</h2>
            <p className="text-amber-700 mb-6">
              Регулярные осмотры ветеринаром помогают выявить проблемы со здоровьем на ранних стадиях, 
              когда их лечение наиболее эффективно. Рекомендуется проводить комплексный осмотр не реже 
              одного раза в год, а также специализированные проверки по графику.
            </p>
            
            <h3 className="text-xl font-bold text-amber-800 mb-4">График регулярных осмотров</h3>
            
            <div className="overflow-x-auto">
              <Table className="border-collapse border border-amber-300">
                <TableHeader>
                  <TableRow className="bg-amber-200">
                    <TableHead className="border border-amber-300 p-2 text-amber-900">Тип осмотра</TableHead>
                    <TableHead className="border border-amber-300 p-2 text-amber-900">Специалист</TableHead>
                    <TableHead className="border border-amber-300 p-2 text-amber-900">Частота</TableHead>
                    <TableHead className="border border-amber-300 p-2 text-amber-900">Описание</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">Общий осмотр</TableCell>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">Ветеринар общего профиля</TableCell>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">1 раз в год</TableCell>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">Оценка общего состояния здоровья, проверка жизненных показателей</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">Проверка зубов</TableCell>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">Ветеринарный стоматолог</TableCell>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">1 раз в год</TableCell>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">Осмотр и обработка зубов (сточка острых краев, проверка прикуса)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">Проверка копыт</TableCell>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">Коваль</TableCell>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">Каждые 6-8 недель</TableCell>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">Расчистка копыт, при необходимости подковывание</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">Анализ крови</TableCell>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">Ветеринар-лаборант</TableCell>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">1 раз в год</TableCell>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">Проверка показателей крови, выявление скрытых заболеваний</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">Проверка на паразитов</TableCell>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">Ветеринар-паразитолог</TableCell>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">2 раза в год</TableCell>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">Анализ на наличие внутренних паразитов, дегельминтизация</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <p className="text-amber-700 mt-6">
              Важно вести журнал всех осмотров и процедур, чтобы отслеживать состояние здоровья 
              вашей лошади в динамике и не пропускать запланированные визиты специалистов.
            </p>
          </TabsContent>
          
          <TabsContent value="vaccination" className="bg-amber-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">Вакцинация</h2>
            <p className="text-amber-700 mb-6">
              Вакцинация является важнейшим элементом профилактической заботы о здоровье лошади. 
              Своевременные прививки помогают защитить животное от опасных инфекционных заболеваний.
            </p>
            
            <h3 className="text-xl font-bold text-amber-800 mb-4">Основные вакцины для лошадей</h3>
            
            <div className="overflow-x-auto">
              <Table className="border-collapse border border-amber-300">
                <TableHeader>
                  <TableRow className="bg-amber-200">
                    <TableHead className="border border-amber-300 p-2 text-amber-900">Заболевание</TableHead>
                    <TableHead className="border border-amber-300 p-2 text-amber-900">Первичная вакцинация</TableHead>
                    <TableHead className="border border-amber-300 p-2 text-amber-900">Ревакцинация</TableHead>
                    <TableHead className="border border-amber-300 p-2 text-amber-900">Примечания</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">Столбняк</TableCell>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">В 3-4 месяца, повтор через 4-6 недель</TableCell>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">Ежегодно</TableCell>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">Обязательная вакцина для всех лошадей</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">Грипп лошадей</TableCell>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">В 5-6 месяцев, повтор через 4-6 недель</TableCell>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">Каждые 6-12 месяцев</TableCell>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">Особенно важно для лошадей, контактирующих с другими животными</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">Ринопневмония</TableCell>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">В 5-6 месяцев, повтор через 4-6 недель</TableCell>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">Каждые 6 месяцев</TableCell>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">Особенно важно для племенных кобыл</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">Западнонильский вирус</TableCell>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">В 4-6 месяцев, повтор через 4-6 недель</TableCell>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">Ежегодно</TableCell>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">Рекомендуется в регионах с высоким риском</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">Бешенство</TableCell>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">В 6 месяцев</TableCell>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">Ежегодно</TableCell>
                    <TableCell className="border border-amber-300 p-2 text-amber-700">Рекомендуется в эндемичных районах</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <p className="text-amber-700 mt-6">
              График вакцинации может различаться в зависимости от региона, возраста лошади, ее использования 
              и индивидуальных потребностей. Всегда консультируйтесь с вашим ветеринаром для составления 
              оптимального плана вакцинации.
            </p>
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

export default Health;
