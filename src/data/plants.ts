/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PlantItem {
  id: string;
  name: string;
  botanicalName: string;
  category: 'low-light' | 'tall' | 'easy-care' | 'walls';
  height: string;
  lightNeed: string;
  watering: string;
  price: number;
  description: string;
  popular?: boolean;
}

export const CATALOG_PLANTS: PlantItem[] = [
  {
    id: 'calathea-orbifolia',
    name: 'Калатея Орбифолия',
    botanicalName: 'Calathea Orbifolia',
    category: 'easy-care',
    height: '60–75 см',
    lightNeed: 'Полутень / Рассеянный свет',
    watering: 'Автополив 1 раз в 14 дней',
    price: 8900,
    description: 'Пышные круглые листья с серебристыми полосами. Эффективно насыщает воздух влагой.',
    popular: true,
  },
  {
    id: 'ficus-lyrata',
    name: 'Фикус Лирата',
    botanicalName: 'Ficus Lyrata',
    category: 'tall',
    height: '180–220 см',
    lightNeed: 'Яркий рассеянный свет',
    watering: 'Автополив 1 раз в 10 дней',
    price: 24500,
    description: 'Статусный крупномер со скрипичными глянцевыми листьями. Идеален для входных групп и переговорных.',
    popular: true,
  },
  {
    id: 'zamioculcas',
    name: 'Замиокулькас Зензи',
    botanicalName: 'Zamioculcas Zamiifolia',
    category: 'low-light',
    height: '70–90 см',
    lightNeed: 'Любое освещение, включая тень',
    watering: 'Редкий (раз в 3-4 недели)',
    price: 9800,
    description: 'Самое живучее растение для современных опенспейсов. Плотные восковые изумрудные побеги.',
    popular: true,
  },
  {
    id: 'sansevieria',
    name: 'Сансевиерия Лауренти',
    botanicalName: 'Sansevieria Trifasciata',
    category: 'easy-care',
    height: '90–110 см',
    lightNeed: 'Теневыносливое / Яркий свет',
    watering: 'Раз в 20 дней',
    price: 7600,
    description: 'Вертикальные мечевидные листья с золотой каймой. Лидер по выработке кислорода в ночное время.',
  },
  {
    id: 'monstera-deliciosa',
    name: 'Монстера Делициоза',
    botanicalName: 'Monstera Deliciosa',
    category: 'tall',
    height: '140–170 см',
    lightNeed: 'Рассеянный свет',
    watering: 'Автополив раз в 10-12 дней',
    price: 18400,
    description: 'Культовое архитектурное растение с глубоко резными листьями для лаунж-пространств.',
    popular: true,
  },
  {
    id: 'spathiphyllum',
    name: 'Спатифиллум Сенсация',
    botanicalName: 'Spathiphyllum Sensation',
    category: 'low-light',
    height: '100–120 см',
    lightNeed: 'Тень и полутень',
    watering: 'Регулярный влаголюбивый',
    price: 12900,
    description: 'Огромные рельефные темно-зеленые листья и благородные белые паруса цветов. Отличный очиститель воздуха.',
  },
  {
    id: 'moss-wall',
    name: 'Фитопанель из мха',
    botanicalName: 'Stabilized Moss Panel',
    category: 'walls',
    height: '100 × 50 см',
    lightNeed: 'Не требует освещения',
    watering: '0 полива (стабилизирован)',
    price: 19500,
    description: 'Натуральный скандинавский мох ягель и кочки. Не выцветает, поглощает акустический шум в офисе.',
    popular: true,
  },
  {
    id: 'dracaena-marginata',
    name: 'Драцена Маргината',
    botanicalName: 'Dracaena Reflexa',
    category: 'tall',
    height: '150–190 см',
    lightNeed: 'Умеренное освещение',
    watering: 'Раз в 14 дней',
    price: 14200,
    description: 'Многоствольное пальмовидное растение, создающее ощущение тропического оазиса.',
  },
];
