const express = require('express')
const app = express()
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.static('image'))
app.get('/',(req,res)=>{
    let itemInfo = {item: ['Головна', 'Акції', 'Про нас'],
        option: ['/user.png', '/loupe.png', '/cart.png'],
        slides: ['/tenergy.png', 'ldkhsakjdhkjdhakdh.jpg', 'slide2.png']
    }
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
    res.render('index', itemInfo, swiper)
})
const PORT = 3000
app.listen(PORT,()=>{
    console.log(`Server started: http://localhost:${PORT}`)
})