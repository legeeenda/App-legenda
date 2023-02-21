const header = require('../components/header')
const footer = require('../components/footer');
const head = require('../components/head')

const aboutme = `
${head('Обо мне?')}
<body>
    ${header}
    <h1>Информация</h1>
    <b>Всем привет, меня зовут Владимир , я создатель этого сайта!</b>
    ${footer}
</body>
</html>
`
module.exports = aboutme;