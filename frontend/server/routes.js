/**
 * Routes for the app, this is the only file used by both server and client
 */
const nextRoutes = require('next-routes')

const routes = nextRoutes()
const { Link, Router } = routes

routes.add('home', '/', '/')

module.exports = {
  Link,
  Router,
  default: routes
}
