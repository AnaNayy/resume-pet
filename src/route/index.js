// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

//======================

var header = {
  name: {
    firstname: 'Dmytro',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '$1600',
  address: 'Silicone valley',
}

var footer = {
  social: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytroivanov@mail.com',
    },

    phone: {
       text: '+380670000123',
       href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

page: {
  title: 'Resume | Summary',
},

    header,

    main: {
      summary: {
        title: 'Summary',
        text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
      },
  
      experience: {
        title: 'Other experience',
        text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics ( tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
      },
    },

    footer,
})
}),

// ================================================================
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

page: {
  title: 'Resume | Skills',
},
  header,

    main: {
      skills: [
        {name:'HTML', point: 10, isTop: true,},
        {name: 'Handlebars', point: 10, isTop: false,},
        {name: 'VS Code', point: 10, isTop: false, },
        {name: 'Git', point: 10, isTop: true,},
        {name: 'Terminal', point: 10, isTop: true,},
        {name: 'NPM',point: 10,isTop: null,},
        {name: 'React.js', point: 0, },
        {name: 'PHP', point: null,},
      ],
      hobbies: [
        {name: 'Reading', isMain: true,},
        {name: 'Watching movies', isMain: true, },
        {name: 'Jogging', isMain: false,},
      ],
    },

    footer,
})
}),

router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

page: {
  title: 'Resume | Education',
},
  header,

    main: {
     
      certificates: [
        {name: 'Bachelor degree', id: 567,},
        {name: 'Diploma', id: 11003,},
        {name: 'Master degree', id: 891,},
      ],

      educations: [
        {name:'Kindergarten', isEnd: false,},
        {name: 'School', isEnd: true,},
        {name: 'University', isEnd: true,},
        {name: 'University#2', isEnd: false,},
      ],
    },
    footer,
  })
}),

    router.get('/works', function (req, res) {
      //             ↙ cюди вводимо назву файлу з сontainer
      res.render('works', {
        // ↙ сюди вводимо JSON дані
    
    layout: 'big',

    page: {
      title: 'Resume | Work',
    },
    
      header,
    
      main: {},
      footer,

})
})
// Підключаємо роутер до бек-енду
module.exports = router
