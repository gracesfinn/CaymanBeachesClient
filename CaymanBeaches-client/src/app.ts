import { RouterConfiguration, Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      {
        route: ['', 'checkIn'],
        name: 'CheckIn',
        moduleId: PLATFORM.moduleName('views/check-in'),
        nav: true,
        title: 'CheckIn'
      },
      {
        route: 'beaches',
        name: 'beaches',
        moduleId: PLATFORM.moduleName('views/beaches'),
        nav: true,
        title: 'Beach'
      }
    ]);
    this.router = router;
  }
}
