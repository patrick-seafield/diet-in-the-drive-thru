import { resolve } from 'path'
import { Nuxt, Builder } from 'nuxt'
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
  await new Builder(nuxt).build()
  await nuxt.listen(3000, 'localhost')
}, 30000)

// Example of testing only generated html
test('Route / exits and render header', async t => {
  const context = {}
  const { html } = await nuxt.renderRoute('/', context)
  t.true(html.includes('<div id="__nuxt">'))
})

// Example of testing via DOM checking
// test('Route / exits and render HTML with CSS applied', async t => {
//   const window = await nuxt.renderAndGetWindow('http://localhost:3000/')
// })

// Close server and ask nuxt to stop listening to file changes
test.after('Closing server and nuxt.js', t => {
  nuxt.close()
})


