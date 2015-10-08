/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    controller: 'IndexController',
    action: 'home'
  },
  'get /login': {
    view: 'login'
  },
  'post /login': {
    controller: 'AuthController',
    action: 'login'
  },
  'get /device': {
    controller: 'DeviceController',
    action: 'view'
  },
  'get /device/read/:id': {
    controller: 'DeviceController',
    action: 'read'
  },
  'get /device/edit/:id': {
    controller: 'DeviceController',
    action: 'edit'
  },
  'post /device': {
    controller: 'DeviceController',
    action: 'create'
  },
  'post /device/:id': {
    controller: 'DeviceController',
    action: 'update'
  },
  'post /device/destroy/:id': {
    controller: 'DeviceController',
    action: 'delete'
  },
  'get /device/new': {
    controller: 'DeviceController',
    action: 'new'
  },
  'get /advertisement': {
    controller: 'AdvertisementController',
    action: 'view'
  },
  'get /advertisement/read/:id': {
    controller: 'AdvertisementController',
    action: 'read'
  },
  'get /advertisement/edit/:id': {
    controller: 'AdvertisementController',
    action: 'edit'
  },
  'post /advertisement': {
    controller: 'AdvertisementController',
    action: 'create'
  },
  'post /advertisement/:id': {
    controller: 'AdvertisementController',
    action: 'update'
  },
  'post /advertisement/destroy/:id': {
    controller: 'AdvertisementController',
    action: 'delete'
  },
  'get /advertisement/new': {
    view: 'advertisement-new'
  },
  'get /app': {
    controller: 'AppController',
    action: 'view'
  },
  'get /app/read/:id': {
    controller: 'AppController',
    action: 'read'
  },
  'get /app/edit/:id': {
    controller: 'AppController',
    action: 'edit'
  },
  'post /app': {
    controller: 'AppController',
    action: 'create'
  },
  'post /app/:id': {
    controller: 'AppController',
    action: 'update'
  },
  'post /app/destroy/:id': {
    controller: 'AppController',
    action: 'delete'
  },
  'get /app/new': {
    view: 'app-new'
  },
  'get /app-advertisement/new': {
    controller: 'AppController',
    action: 'newAdvertisement'
    },
  'post /app-advertisement': {
    controller: 'AppController',
    action: 'createAdvertisement'
  },
  'get /user-menu': {
    view: 'user-menu'
  },
  'get /app-advertisement/edit/:id': {
    controller: 'AppController',
    action: 'editAdvertisement'
  },
  'get /advertisement/deploy/:id': {
    controller: 'AdvertisementController',
    action: 'deploy'
  },
  'post /advertisement/deploy/:id': {
    controller: 'AdvertisementController',
    action: 'deployToDevices'
  },
  'post /deployment/destroy/:id': {
    controller: 'DeploymentController',
    action: 'delete'  
  },
  'get /register': {
    view: 'register'
  },
  'get /location': {
    controller: 'LocationController',
    action: 'view'
  },
  'get /location/read/:id': {
    controller: 'LocationController',
    action: 'read'
  },
  'get /location/edit/:id': {
    controller: 'LocationController',
    action: 'edit'
  },
  'post /location': {
    controller: 'LocationController',
    action: 'create'
  },
  'post /location/:id': {
    controller: 'LocationController',
    action: 'update'
  },
  'post /location/destroy/:id': {
    controller: 'LocationController',
    action: 'delete'
  },
  'get /location/new': {
    view: 'location-new'
  },
  
  'get /user': {
    controller: 'UserController',
    action: 'view'
  },
  'get /user/read/:id': {
    controller: 'UserController',
    action: 'read'
  },
  'get /user/edit/:id': {
    controller: 'UserController',
    action: 'edit'
  },
  'post /user': {
    controller: 'UserController',
    action: 'create'
  },
  'post /user/:id': {
    controller: 'UserController',
    action: 'update'
  },
  'post /user/destroy/:id': {
    controller:  'UserController',
    action: 'delete'
  },
  'get /user/new': {
    view: 'user-new'
  },


  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
