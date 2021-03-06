'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api', controller.api.index);

  const apiV2Router = app.router.namespace('/api/v2');
  // api 版本前缀
  apiV2Router.post('/login/register', controller.login.register);
  apiV2Router.post('/login', controller.login.loginIn);
  apiV2Router.get('/login/signout', controller.login.signOut);
  apiV2Router.get('/user/info', controller.user.userInfo);

  // topic
  apiV2Router.post('/topic/add', controller.topic.addTopic);
};
