module.exports = {
  apps : [{
    name   : "app1",
    exec_mode: 'cluster',
    instances: 'max',
    script : "./app.js",
    args: 'start',
    env_development: {
	APP_ENV: 'dev'
    },
    env_production: {
	APP_ENV: 'prod'
    }
  }]
}
