const header = require('../components/header')
const footer = require('../components/footer');
const head = require('../components/head')

const main = `
${head('Главная страница')}
<body>
    ${header}
    <main>
        <div class="leg">
            <h1>Для чего сайт>?</h1>
            <p>Этот сайт предназначен для продажи различных по систем ,продажа аккаунтов , и различных товаров лично от создателей этого товара!</p>
        </div>
    </main>
    ${footer}
</body>
</html>
`
module.exports = main