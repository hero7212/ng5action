//import './polyfills.ts'   //导入这个是为了兼容一些ie浏览器 

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; //导入使用哪个模块来启动应用

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {   //判断生产环境
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)   //启动应用
  .catch(err => console.log(err));    
