const burger = document.querySelector('#burger')
const menu = document.querySelector('#menu')
const header = document.querySelector('#header')
const menuLink = document.querySelectorAll('.menu__link')
const btnsStartTesting = document.querySelectorAll('.start-test')
const main = document.querySelector('.main')
const mainWrapper = document.querySelector('.main__wrapper')
const footer = document.querySelector('.footer')
const headerImg = document.querySelector('.header__img')
const headerText = document.querySelector('.header__text')
const btnHome = document.querySelector('#btnHome')

// бургер и меню
burger.addEventListener('click', () => {
  header.classList.toggle('active')
})

menu.addEventListener('click', () => {
  header.classList.toggle('active')
  mainWrapper.style.display = 'block'
  footer.style.display = 'block'
})

btnHome.addEventListener('click', () => {
  mainWrapper.style.display = 'block'
  footer.style.display = 'block'
})


// Отрисовка страницы, после клика на Далее
btnsStartTesting.forEach (btn => {
  btn.addEventListener('click', () => {
    mainWrapper.style.display = 'none'
    footer.style.display = 'none'
    headerImg.style.display = 'block'
    headerText.style.display = 'block'

    createTestingWrapper()
    createTestingPage()
    clickTestingBtn()
    chekStatusTestingBtn()
    createEndingPage()
  })
})


// Создание обертки для вопросов
const createTestingWrapper = () => {
  const testingWrapper = document.createElement('div')
  testingWrapper.className = 'testing container'
  main.appendChild(testingWrapper)
  testingWrapper.innerHTML = `
  <div class="progressbar">
    <div class="progressbar__line"></div>
  </div>
  
  <div class="testing__info">
    <h2 class="testing__title"></h2>
    <form id="questions" action="#"></form>
  </div>

  <button class="testing__btn btn" type="button" disabled>далее</button>
  `
}

// Создание вопросов
const createTestingPage = (index = 0, width) => {
  const progressbarLine = document.querySelector('.progressbar__line')
  const testingIinfo = document.querySelector('.testing__info')
  const questionsItems = document.querySelector('#questions')
  const testingTitle = document.querySelector('.testing__title')
  const testingBtn = document.querySelector('.testing__btn')

  if(index < questions.length) {
    progressbarLine.style.width = `${width}%`
    const answers = questions[index].answers
    const type = questions[index].type
    testingTitle.innerHTML = questions[index].title
    questionsItems.innerHTML = ''
    
    // Создание вопросов, если текстовые
    if(type === 'text') {
      questionsItems.classList = 'questions questions-text'

      answers.forEach(item => {
        const newQuestion = document.createElement('div')
        newQuestion.classList = 'questions__item'
        newQuestion.innerHTML = `
        <input class="testing__input" type="radio" placeholder="${item.text}" id="${item.id}" name="radio">
        <label class="testing__label" for="${item.id}">${item.text}</label>
        `
        questionsItems.appendChild(newQuestion)
        if(item.text.length > 20) {
          const questionsItem = document.querySelectorAll('.questions__item')
          questionsItem.forEach(item => {
            item.style.height = '78px'
          })
        }
      })

    }
    
    // Создание вопросов, если выбор цвета
     else if(type === 'color') {
      questionsItems.classList = 'questions questions-color'

      answers.forEach(item => {
      const newQuestion = document.createElement('div')
      newQuestion.classList = 'questions__item'
      newQuestion.innerHTML = `
      <input class="testing__input" type="radio" placeholder="" id="${item.id}" name="radio">
      <label class="testing__label" for="${item.id}" style="background-color: #${item.text};"></label>
      `
      questionsItems.appendChild(newQuestion)
      })
      
    }

    // Создание вопросов, если картинка с номерами
    else if(type === 'imageNumber') {
      questionsItems.classList = 'questions questions-image questions-image-number'
      const imgQuestion = document.createElement('img')
      const url = questions[index].url
      imgQuestion.classList = 'questions__img'
      imgQuestion.src = `images/${url}`
      const newQuestionWrapper = document.createElement('div')
      newQuestionWrapper.classList = 'questions__wrapper'
      questionsItems.appendChild(imgQuestion)
      questionsItems.appendChild(newQuestionWrapper)

      answers.forEach(item => {
      const newQuestion = document.createElement('div')
      newQuestion.classList = 'questions__item'
      newQuestion.innerHTML = `
      <input class="testing__input" type="radio" placeholder="" id="${item.id}" name="radio">
      <label class="testing__label" for="${item.id}">${item.text}</label>
      `
      newQuestionWrapper.appendChild(newQuestion)
      })
    }

    // Создание вопросов, если картинка с текстом
    else if(type === 'imagetext') {
      questionsItems.classList = 'questions questions-image questions-image-text'
      const imgQuestion = document.createElement('img')
      const url = questions[index].url
      imgQuestion.classList = 'questions__img'
      imgQuestion.src = `images/${url}`
      const newQuestionWrapper = document.createElement('div')
      newQuestionWrapper.classList = 'questions__wrapper'
      questionsItems.appendChild(imgQuestion)
      questionsItems.appendChild(newQuestionWrapper)

      testingTitle.style.fontSize = '16px'
      answers.forEach(item => {
      const newQuestion = document.createElement('div')
      newQuestion.classList = 'questions__item'
      newQuestion.innerHTML = `
      <input class="testing__input" type="radio" placeholder="" id="${item.id}" name="radio">
      <label class="testing__label" for="${item.id}">${item.text}</label>
      `
      newQuestionWrapper.appendChild(newQuestion)
      })
      
    }
  } else {
    testingBtn.style.display = 'none'
    testingTitle.innerHTML = 'обработка результатов'
    testingTitle.style.paddingTop = '49px'
    progressbarLine.style.width = `100%`

    questionsItems.classList = 'end'
    questionsItems.innerHTML = `<img class="end__img" src="images/load.svg" alt="загрузка">
    <p class="end__text">Определение стиля мышления...........
      .......................................................</p>`

    function endTest () {
      const testingWrapper = document.querySelector('.testing')
      testingIinfo.style.flex = '0 0 auto'
      headerText.innerHTML = 'Готово'
      headerText.style.fontSize = '20px'
      headerText.style.paddingLeft = '10px'
      testingWrapper.classList.add('end-page')
      testingWrapper.innerHTML = `
      <h2 class="end-page__tltle">Ваш результат рассчитан:</h2>
      <p class="end-page__subtltle">
        <span>Вы относитесь к 3%</span> респондентов, чей уровень интеллекта более чем на 15 пунктов отличается от среднего в большую или меньшую сторону!
      </p>
      <h3 class="end-page__motivation">Скорее получите свой результат!</h3>
      <p class="end-page__info">
        В целях защиты персональных данных результат теста, их подробная интерпретация и рекомендации доступны в виде голосового сообщения по звонку с вашего мобильного телефона
      </p>
      <p class="end-page__call">
        Звоните скорее, запись доступна всего
      </p>
      <div class="end-page__time">
        <span class="end-page__minutes">10</span>:<span class="end-page__seconds">00</span> минут
      </div>
      <a class="end-page__link" href="tel:+79119999999">Позвонить и прослушать
      результат</a>`

      const declaration = document.createElement('div')
      declaration.classList = 'declaration'
      declaration.innerHTML = 'TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, repellendus accusamus minima iure fugiat quos ea laborum quam tenetur dicta possimus assumenda ut! Ut, voluptate soluta minima nesciunt aspernatur magni!'

      main.insertAdjacentElement('beforeend', declaration)
      runTimer()
      test()


    }
    setTimeout(endTest, 0)
  }
}

const test = () => {
  const endPageLink = document.querySelector('.end-page__link')
  const endPage = document.querySelector('.end-page')

  const test2 = (name, height, weight, eyes, color) => {
    const createData = document.createElement('div')
    createData.classList = 'data'
    createData.innerHTML = `
    <h3 class="data__title">Поздравляю Вы умны как: ${name}</h3>
    <p>Можете сравнить его параметры с Вашими:</p>
    <ul class="data__list">
      <li class="data__item data__item--height">Рост: ${height}</li>
      <li class="data__item data__item--weight">Вес: ${weight}</li>
      <li class="data__item data__item--eyes">Глаза: ${eyes}</li>
      <li class="data__item data__item--color">Цвет волос: ${color}</li>
    </ul>`
    endPage.append(createData)
  }
  
  

  endPageLink.addEventListener('click', (e) => {
    e.preventDefault()
    const URL_PEOPLE = 'https://swapi.dev/api/people/1'
    const result = fetch(URL_PEOPLE)

    result
      .then(response => {
        if(!response.ok) {
          throw new Error('Ошибка в запросе')
        }
        return response.json()
      })

      .then(people => {
        test2(people.name, people.height, people.mass, people.eye_color, people.hair_color)
        endPage.style.height = '100%'
      })

      .catch(error => {
        console.log(error);
      })
  })
}

const runTimer = () => {
  const minutesItem = document.querySelector('.end-page__minutes')
  const secondsItem = document.querySelector('.end-page__seconds')

  const newTime = Date.now () + 600000
  function timer() {
    const nowTime = Date.now ()
    let time = newTime - nowTime
  
    const minutes = Math.floor(time /1000 / 60 % 60)
    const seconds = Math.floor(time /1000 % 60)

    if(seconds >= 10) {
      secondsItem.innerHTML = seconds
    } else {
      secondsItem.innerHTML = `0${seconds}`
    }
    if(minutes >= 10) {
      minutesItem.innerHTML = minutes
    } else {
      minutesItem.innerHTML = `0${minutes}`
    }
  }
  
  timer()
  setInterval(timer, 1000)
}


// счетчики при клике на кнопку Далее
const clickTestingBtn = () => {
  const testingBtn = document.querySelector('.testing__btn')
  
  let i = 0
  let progressbarLineWidth = 5
  testingBtn.addEventListener('click', () => {
    i++
    const changePercent = 100 / (questions.length + 1)
    progressbarLineWidth +=changePercent
    createTestingPage(i, progressbarLineWidth)
  })
}

// Проверка на checked
const chekStatusTestingBtn = () => {
  const testingBtn = document.querySelector('.testing__btn')
  const testingQuestions = document.querySelector('.questions')
  const testingInputs = document.querySelectorAll('.testing__input')
  const questionsImg = document.querySelectorAll('.questions__img')
  
  testingQuestions.addEventListener('click', (e) => {
    const isImg = e.target === questionsImg[0]
    if(!isImg) {
      testingInputs.forEach(item => {
        if(item.checked) {
          testingBtn.removeAttribute("disabled");
        }
      })
    }
  })
}




