import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export default function Index() {
  const services = [
    {
      category: "Уход за кузовом и стеклами",
      icon: "Car",
      items: [
        { name: "Полировка кузова", price: "от 10 000 ₽" },
        { name: "Полировка фар", price: "от 3 000 ₽" },
        { name: "Полировка боковых стекол", price: "от 3 000 ₽" },
        { name: "Керамическое покрытие", price: "от 5 000 ₽" },
        { name: "Тонировка авто", price: "от 6 000 ₽" },
        { name: "Бронирование лобового стекла", price: "от 20 000 ₽" },
      ]
    },
    {
      category: "Детейлинг салона",
      icon: "Sparkles",
      items: [
        { name: "Химчистка салона", price: "от 5 000 ₽" },
        { name: "Химчистка салона с разбором", price: "от 9 000 ₽" },
        { name: "Реставрация салона", price: "по запросу" },
      ]
    },
    {
      category: "Комплексные работы",
      icon: "Package",
      items: [
        { 
          name: "Предпродажная подготовка (мойка, полировка, уборка, воск)", 
          price: "от 25 000 ₽" 
        },
        { 
          name: "Комплекс \"Новое авто\" (мойка, полировка, химчистка, керамика, бронепленка фар)", 
          price: "от 50 000 ₽" 
        },
      ]
    },
    {
      category: "Пленки",
      icon: "Shield",
      items: [
        { name: "Оклейка зон риска (защитная)", price: "от 70 000 ₽" },
        { name: "Антихром", price: "от 3 000 ₽" },
        { name: "Оклейка фар (бронепленка)", price: "от 7 000 ₽" },
        { name: "Оклейка цветной пленкой", price: "от 120 000 ₽" },
        { name: "Оклейка защитной пленкой", price: "от 4 000 ₽" },
      ]
    },
    {
      category: "Дополнительные услуги",
      icon: "Settings",
      items: [
        { name: "Шумоизоляция / Виброизоляция", price: "от 3 000 ₽" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-secondary via-secondary to-primary py-20 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="font-montserrat text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              ChecPoint СЕРВИС
            </h1>
            <p className="font-roboto text-xl md:text-2xl font-light max-w-2xl mx-auto mb-8 opacity-90">
              Профессиональный уход за вашим автомобилем
            </p>
            <div className="flex justify-center items-center gap-4">
              <Icon name="Star" size={24} className="text-accent" />
              <span className="font-roboto text-lg">Качество • Надежность • Опыт</span>
              <Icon name="Star" size={24} className="text-accent" />
            </div>
          </div>
        </div>
      </section>

      {/* Price List Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-montserrat text-4xl font-bold text-foreground mb-4">
              Прайс-лист на услуги
            </h2>
            <p className="font-roboto text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы предлагаем полный спектр услуг по уходу за автомобилем с использованием современного оборудования и качественных материалов
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-scale-in border-0 shadow-md">
                <CardHeader className="bg-gradient-to-r from-muted to-muted/50 rounded-t-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary rounded-lg text-primary-foreground">
                      <Icon name={service.icon as any} size={24} />
                    </div>
                    <div>
                      <CardTitle className="font-montserrat text-lg font-semibold text-foreground">
                        {service.category}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {service.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="group/item">
                        <div className="flex justify-between items-start gap-3">
                          <span className="font-roboto text-sm text-foreground/80 leading-relaxed flex-1">
                            {item.name}
                          </span>
                          <span className="font-montserrat font-semibold text-primary whitespace-nowrap">
                            {item.price}
                          </span>
                        </div>
                        {itemIndex < service.items.length - 1 && (
                          <Separator className="mt-3 opacity-30" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Important Notice */}
          <div className="mt-12 text-center animate-fade-in">
            <Card className="max-w-2xl mx-auto bg-accent/5 border-accent/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Icon name="AlertCircle" size={20} className="text-accent" />
                  <span className="font-montserrat font-semibold text-foreground">
                    Важная информация
                  </span>
                </div>
                <p className="font-roboto text-foreground/80 text-sm leading-relaxed">
                  Цены являются ориентировочными. Уточняйте стоимость у менеджера.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center animate-fade-in">
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-secondary to-primary text-white border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="font-montserrat text-2xl font-bold mb-6">
                  Свяжитесь с нами
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <Icon name="Phone" size={32} className="text-accent" />
                    <span className="font-roboto font-medium">Ваш Телефон</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Icon name="Globe" size={32} className="text-accent" />
                    <span className="font-roboto font-medium">Ваш Сайт</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Icon name="MapPin" size={32} className="text-accent" />
                    <span className="font-roboto font-medium">Ваш Адрес</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-montserrat font-semibold">
                    Записаться на консультацию
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}