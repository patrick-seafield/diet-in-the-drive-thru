import { resolve } from 'path'
import { Nuxt } from 'nuxt'
import { JSDOM } from 'jsdom'
import test from 'ava'

// So we can close them at the end of the test
let nuxt = null


// Init Nuxt.js and create a server listening on localhost:4000
test.before(async () => {
  const config = {
    dev: false,
    rootDir: resolve(__dirname, '..')
  }
  nuxt = new Nuxt(config)
  await nuxt.listen(3000, 'localhost')
}, 30000)

// basic tests using only main page
test('Web Server is working', async t => {
  const context = {}
  const { html } = await nuxt.renderRoute('/', context)
  t.true(html.includes('<!DOCTYPE html>'))
})

test('Header shows up', async t => {
  const context = {}
  const { html } = await nuxt.renderRoute('/', context)
  t.true(html.includes('<header'))
})

test('Footer shows up', async t => {
  const context = {}
  const { html } = await nuxt.renderRoute('/', context)
  t.true(html.includes('<footer'))
})

// test('Map displays correctly', async t => {
//   const context = {}
//   const { html } = await nuxt.renderRoute('/map', context)
//   t.true(html.includes('<!DOCTYPE html>'))
//   // t.true(html.includes('<div class="restaurant-map">'))
// })

// test('Restaurants page displays correctly', async t => {
//   const context = {}
//   const { html } = await nuxt.renderRoute('/restaurants', context)
//   t.true(html.includes('class="title"'))
// })

// test('Menu Item headers display', async t => {
//   const window = await nuxt.renderAndGetWindow('/menuItems')
//   t.is(window.document.getElementsByClassName("title")[0].color, '#e53737')
// })

test('FAQ page displays correctly', async t => {
  const context = {}
  const { html } = await nuxt.renderRoute('/faq', context)
  t.true(html.includes('class="title"'))
})

// Close server and ask nuxt to stop listening to file changes
test.after('Closing server and nuxt.js', t => {
  nuxt.close()
})


