const express = require('express')
const app = express()
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.static('image'))
app.get('/',(req,res)=>{
    let itemInfo = {item: ['Головна', 'Акції', 'Про нас'],
        option: ['/user.png', '/loupe.png', '/cart.png'],
        infoCard: [
          {
            name: "Накладка Butterfly Dignics 05",
            price: "3800 грн",
            image: "/rubber_dignics_05_cover_enl.jpg" // Замініть на реальне посилання на фото
          },
          {
            name: "Накладка Butterfly Dignics 09C",
            price: "3800 грн",
            image: "/rubber_dignics_09c_05_enl.jpg" // Замініть на реальне посилання на фото
          },
          {
            name: "Накладка Butterfly Tenergy 05",
            price: "3000 грн",
            image: "/rubber_tenergy_05_cover_1.jpg" // Замініть на реальне посилання на фото
          },
        ],
        footerOption: ["Про нас", "Контакти", "Політика конфіденційності"]
    }
    res.render('index', itemInfo)
})
const PORT = 3000
app.listen(PORT,()=>{
    console.log(`Server started: http://localhost:${PORT}`)
})