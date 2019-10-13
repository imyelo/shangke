const cron = require('node-cron')
const got = require('got')
const config = require('config')

const notify = ({ course }) => got(`/${config.get('server_chan.key')}.send`, {
  baseUrl: config.get('server_chan.endpoint'),
  query: {
    text: config.get('message.title'),
    desp: config.get('message.content')({ course }),
  },
})

const jobs = config.get('courses').map((course) =>
  cron.schedule(course.cron, async () => {
    let response
    console.log('Job running with course', course)
    try {
      response = await notify({ course })
    } catch (error) {
      console.error(error)
    }
    console.log('Job done', course, response.body)
  })
)

console.log('Jobs registered', jobs)
