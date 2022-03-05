const questions = [
  {
    type: 'text',
    title: 'Ваш пол:',
    answers: [
      {
        id: 'male',
        text: 'Мужчина'
      },
      {
        id: 'female',
        text: 'Женщина'
      }
    ]
  },
  {
    type: 'text',
    title: 'Укажите ваш возраст:',
    answers: [
      {
        id: 'before18',
        text: 'До 18'
      },
      {
        id: '18to28',
        text: 'От 18 до 28'
      },
      {
        id: '29to35',
        text: 'от 29 до 35'
      },
      {
        id: 'after36',
        text: 'От 36'
      },
    ]
  },
  {
    type: 'text',
    title: 'Выберите лишнее:',
    answers: [
      {
        id: 'house',
        text: 'Дом'
      },
      {
        id: 'hut',
        text: 'Шалаш'
      },
      {
        id: 'bungalow',
        text: 'Бунгало'
      },
      {
        id: 'bench',
        text: 'Скамейка'
      },
      {
        id: 'shack',
        text: 'Хижина'
      },
    ]
  },
  {
    type: 'text',
    title: 'Продолжите числовой ряд: 18  20  24  32',
    answers: [
      {
        id: '62',
        text: '62'
      },
      {
        id: '48',
        text: '48'
      },
      {
        id: '74',
        text: '74'
      },
      {
        id: '57',
        text: '57'
      },
      {
        id: '60',
        text: '60'
      },
      {
        id: '77',
        text: '77'
      },
    ]
  },

  {
    type: 'color',
    title: 'Выберите цвет, который сейчас наиболее Вам приятен:',
    answers: [
      {
        id: 'A8A8A8',
        text: 'A8A8A8'
      },
      {
        id: '0000A9',
        text: '0000A9'
      },
      {
        id: '00A701',
        text: '00A701'
      },
      {
        id: 'F60100',
        text: 'F60100'
      },
      {
        id: 'FDFF19',
        text: 'FDFF19'
      },
      {
        id: 'A95403',
        text: 'A95403'
      },
      {
        id: '000000',
        text: '000000'
      },
      {
        id: '850068',
        text: '850068'
      },
      {
        id: '46B2AC',
        text: '46B2AC'
      },
    ]
  },

  {
    type: 'color',
    title: 'Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:',
    answers: [
      {
        id: 'A8A8A8',
        text: 'A8A8A8'
      },
      {
        id: '46B2AC',
        text: '46B2AC'
      },
      {
        id: 'A95403',
        text: 'A95403'
      },
      {
        id: '00A701',
        text: '00A701'
      },
      {
        id: '000000',
        text: '000000'
      },
      {
        id: 'F60100',
        text: 'F60100'
      },
      {
        id: 'F60100',
        text: 'F60100'
      },
      {
        id: 'FDFF19',
        text: 'FDFF19'
      },
      {
        id: '0000A9',
        text: '0000A9'
      },
    ]
  },
  {
    type: 'text',
    title: 'Какой из городов лишний?',
    answers: [
      {
        id: 'washington',
        text: 'Вашингтон'
      },
      {
        id: 'london',
        text: 'Лондон'
      },
      {
        id: 'paris',
        text: 'Париж'
      },
      {
        id: 'newyork',
        text: 'Нью-Йорк'
      },
      {
        id: 'moscow',
        text: 'Москва'
      },
      {
        id: 'ottawa',
        text: 'Оттава'
      },
    ]
  },
  {
    type: 'imageNumber',
    title: 'Выберите правильную фигуру из четырёх пронумерованных.',
    url: 'image-1.jpg',
    answers: [
      {
        id: '1',
        text: '1'
      },
      {
        id: '2',
        text: '2'
      },
      {
        id: '3',
        text: '3'
      },
      {
        id: '4',
        text: '4'
      },
    ]
  },
  {
    type: 'text',
    title: 'Вам привычнее и важнее:',
    answers: [
      {
        id: 'answers1',
        text: 'Наслаждаться каждой минутой проведенного времени'
      },
      {
        id: 'answers2',
        text: 'Быть устремленными мыслями в будущее'
      },
      {
        id: 'answers3',
        text: 'Учитывать в ежедневной практике прошлый опыт'
      },
    ]
  },

  {
    type: 'imagetext',
    title: 'Какое определение, по-Вашему, больше подходит к этому геометрическому изображению: ',
    url: 'image-2.jpg',
    answers: [
      {
        id: 'answers1',
        text: 'Оно остроконечное'
      },
      {
        id: 'answers2',
        text: 'Оно устойчиво'
      },
      {
        id: 'answers3',
        text: 'Оно находится в состоянии равновесия'
      },
    ]
  },
  {
    type: 'imageNumber',
    title: 'Вставьте подходящее число',
    url: 'image-1.jpg',
    answers: [
      {
        id: '34',
        text: '34'
      },
      {
        id: '36',
        text: '36'
      },
      {
        id: '53',
        text: '53'
      },
      {
        id: '44',
        text: '44'
      },
      {
        id: '66',
        text: '66'
      },
      {
        id: '42',
        text: '42'
      },
    ]
  },
  
]
