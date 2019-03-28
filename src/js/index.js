import 'popper.js'
import 'jquery'
import 'bootstrap'

import log from './log.js'

if (process.env.NODE_ENV !== 'production') {
    console.log('We are in development mode !')
}

log('salut')

/* Lazy Loading

document.getElementById('button').addEventListener('click', function() {
    import('jquery').then((module) => {
        let $ = module.default
        $('body').css('backgroundColor', 'red')
    })
})
*/
