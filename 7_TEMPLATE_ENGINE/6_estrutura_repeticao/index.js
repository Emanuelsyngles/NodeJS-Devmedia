const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashbord', (req, res) => {

    const items = ['Item a', 'Item b', 'Item c', 'Item d', 'Item e']

    res.render('dashbord', {items})
})

app.get('/', (req, res) =>{

    const user = { 
        name: 'Emanuel',
        surname: 'Leal',
        age: 21,
    }

    const palavra = 'Teste'

    const auth = true

    const approved = true

    res.render('home', {user: user, palavra, auth, approved})
})

app.listen(3000, ()=> {
    console.log('App funcionando!')
})