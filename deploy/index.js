module.exports = (cluster, tag='latest') => {
   try {
    console.log('ENV_LOGIN: ', process.env.ENV_LOGIN)
    console.log('ENV_KEY: ', process.env.ENV_KEY)
    console.log('Deploying to ', cluster, ' tag ', tag)
   } catch (error) {
    console.error('Error deploying to ', cluster)
    process.exit(1)
  }
}