const header = require('../components/header')
const footer = require('../components/footer');
const head = require('../components/head')

const pageContacts = `
${head('Контакты')}
<body>
    ${header}
    <h1>Контакты</h1>
    <ul>
        <li>Вася = +8918203914</li>
        <li>Петя = +7982405696</li>
        <li>Макс = +87920284213</li>
        <li>Вк создателя- https://vk.com/vov4ik_legenda</li>
    </ul>
    ${footer}
</body>
</html>
`
module.exports = pageContacts;