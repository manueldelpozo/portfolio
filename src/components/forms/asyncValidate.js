import { change } from 'redux-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
let introduction = ''
let farewell = ''

const asyncValidate = (values, dispatch) => {
  return sleep(1000).then(() => {
    // simulate server latency
    if (['mdp.webdeveloper@gmail.com'].includes(values.email)) {
      // eslint-disable-next-line no-throw-literal
      throw { email: 'This is my email address' }
    }

    if (values.fullName) {
      introduction = `\n\nThis is ${values.fullName}`
      farewell = `\n\nRegards\n\n${values.fullName}`

      if (values.companyName) {
        introduction += ` from ${values.companyName}` 
      }

      if (values.email) {
        farewell += `\n${values.email}` 
      }
    }

    dispatch(change('ContactForm', 'comment', `Hi Manuel,${introduction}${farewell}`));
  })
}

export default asyncValidate