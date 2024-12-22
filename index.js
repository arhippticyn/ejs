const { log } = require('console');
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    let sales = {
        infoSales: [
            {
                photo: 'https://s.032.ua/section/catalognewsintext/upload/images/catalog/intext/000/051/733/6pierrecardin50off_5e3ac00f5435b.jpg',
                title: 'Знижка 50% на весь асортимент',
                description: 'Скористайтесь шансом! Лише до кінця місяця діє знижка на всі товари.'
            },
            {
                photo: 'https://catorange.ua/content/uploads/images/bez-imeni-224.jpg',
                title: '1+1 = 3',
                description: 'Купуючи два товари, отримайте третій у подарунок! Пропозиція діє лише цього тижня.'
            },
            {
                photo: 'https://images.avrora.ua/images/thumbnails/1180/648/promo/45/dostavka-ipost-landing-24-07-23__1_.webp?t=24122000',
                title: 'Безкоштовна доставка',
                description: 'Оформіть замовлення на суму від 1000 грн і отримайте доставку безкоштовно.'
            }
        ]
    };
    res.render('index', sales)
});

app.get('/about', (req, res) => {
    let userDate = {
        info: [
            {
                title: "Смартфон Apple iPhone 14",
                description: "Новітній смартфон від Apple з потужним процесором A16 Bionic, OLED-дисплеєм і якісною камерою.",
                price: 34999,
                photo: "https://via.placeholder.com/150"
            },
            {
                title: "Ноутбук ASUS ROG Strix",
                description: "Ігровий ноутбук з високопродуктивною графікою NVIDIA GeForce RTX 4060 та 16 ГБ оперативної пам'яті.",
                price: 45999,
                photo: "https://via.placeholder.com/150"
            },
            {
                title: "Бездротові навушники Sony WH-1000XM5",
                description: "Преміальні навушники з шумозаглушенням та якісним звуком.",
                price: 12999,
                photo: "https://via.placeholder.com/150"
            }
        ]
    };
    res.render('About', userDate)
});

app.get('/user/:username/', (req, res) => {
    let data = {
        username: req.params.username,
        hobbies: ['Table tennis', 'FrontEnd', 'Movie']
    };
    res.render('user', data)
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is start: http://localhost:${PORT}`)
});
