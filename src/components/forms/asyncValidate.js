const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values /*, dispatch */) => {
  return sleep(1000).then(() => {
    // simulate server latency
    if (['mdp.webdeveloper@gmail.com'].includes(values.email)) {
      // eslint-disable-next-line no-throw-literal
      throw { email: 'This is my email address' }
    }
  })
}

export default asyncValidate