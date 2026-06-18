// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';


// // import { CommonClass } from './Routing/CommonComponent';
// // import { provideRouter, provideRoutes } from '@angular/router';
// // import { CustomeRoutes } from './Routing/MyRoutes';
// // import { GuardServiceClass } from './Routing/GuardService';
// // import { ChildGuardService } from './Routing/ChildGuardService';


// // import { CustomPipeClass } from './CustomPipesTask/CustomComponent';
// // import { SampleClass } from './Pipes/SampleComponent';
// // import { ArithmeticClass } from './DI/Arithmetic';
// // import { ProductClass } from './ProductOperation/ProductComponent';
// // import { StudentClass } from './StudentOperation/StudentComponent';
// // import { AddClass } from './Binding/Addition';
// // import { TestClass } from './Binding/TestComponent';
// // import { Sample } from './SampleComponent';
// // import { Simple } from './SimpleComponent';
// // import { App } from './app/app';


// // bootstrapApplication(CommonClass, appConfig)
// //   .catch((err) => console.error(err));

// // bootstrapApplication(CommonClass,
// //   {
// //     providers:[provideRouter(CustomeRoutes),GuardServiceClass]
// //   })
// //   .catch((err) => console.error(err));

// // bootstrapApplication(CommonClass,
// //   {
// //     providers:[provideRouter(CustomeRoutes),ChildGuardService]
// //   })
// //   .catch((err) => console.error(err));

// // import { CommonClass } from './LazyLoading/CommonComponent';
// // import { MyRoutes } from './LazyLoading/MyRoutes';
// // import { provideRouter } from '@angular/router';

// // bootstrapApplication(CommonClass,
// //   {
// //     providers:[provideRouter(MyRoutes)]
// //   })
// //   .catch((err) => console.error(err));



// // import { CommonClass } from './BootstrapPractice/CommonComponent';
// // import { MyRoutes } from './BootstrapPractice/MyRoutes';
// // import { provideRouter } from '@angular/router';

// // bootstrapApplication(CommonClass,
// //   {
// //     providers:[provideRouter(MyRoutes)]
// //   })
// //   .catch((err) => console.error(err));


// // import { EmployeeClass } from './ReactiveForms/EmployeeComponent';
// // bootstrapApplication(EmployeeClass).catch((err) => console.error(err));


// // import { InvoiceClass } from './InvoiceReactiveFormTask/InvoiceComponent';
// // bootstrapApplication(InvoiceClass).catch((err) => console.error(err));


// // import { LoginFormClass } from './TemplateDrivenForms/LoginComponent';
// // bootstrapApplication(LoginFormClass).catch((err) => console.error(err));


// import { CommonClass } from './RoutingTask/CommonComponent';
// import { provideRouter } from '@angular/router';
// import { CustomeRoutes } from './RoutingTask/MyRoutes';
// bootstrapApplication(CommonClass,{
//     providers:[provideRouter(CustomeRoutes)]
// }).catch((err) => console.error(err));


// // import { InputParentClass } from './InputOutputDecorator/InputParentComponent';
// // bootstrapApplication(InputParentClass,appConfig).catch((err) => console.error(err));

// // import { OutputParentClass } from './InputOutputDecorator/OutputParentComponent';
// // bootstrapApplication(OutputParentClass,appConfig).catch((err) => console.error(err));

// // import { ViewParentClass } from './InputOutputDecorator/ViewParentComponent';
// // bootstrapApplication(ViewParentClass,appConfig).catch((err) => console.error(err));

// // import { StudentClass } from './ConsumeApi\'s/StudentComponent';
// // bootstrapApplication(StudentClass,appConfig).catch((err) => console.error(err));

// // import { ProductClass } from './ConsumeProductApi\'s/ProductComponent';
// // bootstrapApplication(ProductClass,appConfig).catch((err) => console.error(err));


// // import { provideRouter } from '@angular/router';
// // import { CustomeRoutes } from './InvoiceTask/MyRoutes';
// // import { CommonClass } from './InvoiceTask/CommonComponent';
// // bootstrapApplication(CommonClass,{
// //     providers:[provideRouter(CustomeRoutes)]
// // }).catch((err) => console.error(err));





import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet, Routes } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`
})
export class AppRoot {}

const routes: Routes = [
  {
    path: 'Binding',
    loadComponent: () =>
      import('./Binding/Addition').then(m => m.AddClass)
  },
  {
    path: 'BootstrapPractice',
    loadChildren: () =>
      import('./BootstrapPractice/MyRoutes').then(m => m.MyRoutes)
  },
  {
    path: 'ConsumeApis',
    loadComponent: () =>
      import('./ConsumeApi\'s/StudentComponent').then(m => m.StudentClass)
  },
  {
    path: 'ConsumeProductApis',
    loadComponent: () =>
      import('./ConsumeProductApi\'s/ProductComponent').then(m => m.ProductClass)
  },
  {
    path: 'CustomPipesTask',
    loadComponent: () =>
      import('./CustomPipesTask/CustomComponent').then(m => m.CustomPipeClass)
  },
  {
    path: 'DI',
    loadComponent: () =>
      import('./DI/Arithmetic').then(m => m.ArithmeticClass)
  },
  {
    path: 'InputOutputDecorator',
    loadComponent: () =>
      import('./InputOutputDecorator/InputParentComponent').then(m => m.InputParentClass)
  },
  {
    path: 'InvoiceReactiveFormTask',
    loadComponent: () =>
      import('./InvoiceReactiveFormTask/InvoiceComponent').then(m => m.InvoiceClass)
  },
  {
    path: 'InvoiceTask',
    loadChildren: () =>
      import('./InvoiceTask/MyRoutes').then(m => m.CustomeRoutes)
  },
  {
    path: 'LazyLoading',
    loadChildren: () =>
      import('./LazyLoading/MyRoutes').then(m => m.MyRoutes)
  },
  {
    path: 'Pipes',
    loadComponent: () =>
      import('./Pipes/SampleComponent').then(m => m.SampleClass)
  },
  {
    path: 'ProductOperation',
    loadComponent: () =>
      import('./ProductOperation/ProductComponent').then(m => m.ProductClass)
  },
  {
    path: 'ReactiveForms',
    loadComponent: () =>
      import('./ReactiveForms/EmployeeComponent').then(m => m.EmployeeClass)
  },
  {
    path: 'Routing',
    loadChildren: () =>
      import('./Routing/MyRoutes').then(m => m.CustomeRoutes)
  },
  {
    path: 'RoutingTask',
    loadChildren: () =>
      import('./RoutingTask/MyRoutes').then(m => m.CustomeRoutes)
  },
  {
    path: 'StudentOperation',
    loadComponent: () =>
      import('./StudentOperation/StudentComponent').then(m => m.StudentClass)
  },
  {
    path: 'TemplateDrivenForms',
    loadComponent: () =>
      import('./TemplateDrivenForms/LoginComponent').then(m => m.LoginFormClass)
  },
  {
    path: '',
    redirectTo: 'RoutingTask',
    pathMatch: 'full'
  }
];

bootstrapApplication(AppRoot, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));