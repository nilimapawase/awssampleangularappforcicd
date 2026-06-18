import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';


// import { CommonClass } from './Routing/CommonComponent';
// import { provideRouter, provideRoutes } from '@angular/router';
// import { CustomeRoutes } from './Routing/MyRoutes';
// import { GuardServiceClass } from './Routing/GuardService';
// import { ChildGuardService } from './Routing/ChildGuardService';


// import { CustomPipeClass } from './CustomPipesTask/CustomComponent';
// import { SampleClass } from './Pipes/SampleComponent';
// import { ArithmeticClass } from './DI/Arithmetic';
// import { ProductClass } from './ProductOperation/ProductComponent';
// import { StudentClass } from './StudentOperation/StudentComponent';
// import { AddClass } from './Binding/Addition';
// import { TestClass } from './Binding/TestComponent';
// import { Sample } from './SampleComponent';
// import { Simple } from './SimpleComponent';
// import { App } from './app/app';


// bootstrapApplication(CommonClass, appConfig)
//   .catch((err) => console.error(err));

// bootstrapApplication(CommonClass,
//   {
//     providers:[provideRouter(CustomeRoutes),GuardServiceClass]
//   })
//   .catch((err) => console.error(err));

// bootstrapApplication(CommonClass,
//   {
//     providers:[provideRouter(CustomeRoutes),ChildGuardService]
//   })
//   .catch((err) => console.error(err));

// import { CommonClass } from './LazyLoading/CommonComponent';
// import { MyRoutes } from './LazyLoading/MyRoutes';
// import { provideRouter } from '@angular/router';

// bootstrapApplication(CommonClass,
//   {
//     providers:[provideRouter(MyRoutes)]
//   })
//   .catch((err) => console.error(err));



// import { CommonClass } from './BootstrapPractice/CommonComponent';
// import { MyRoutes } from './BootstrapPractice/MyRoutes';
// import { provideRouter } from '@angular/router';

// bootstrapApplication(CommonClass,
//   {
//     providers:[provideRouter(MyRoutes)]
//   })
//   .catch((err) => console.error(err));


// import { EmployeeClass } from './ReactiveForms/EmployeeComponent';
// bootstrapApplication(EmployeeClass).catch((err) => console.error(err));


// import { InvoiceClass } from './InvoiceReactiveFormTask/InvoiceComponent';
// bootstrapApplication(InvoiceClass).catch((err) => console.error(err));


// import { LoginFormClass } from './TemplateDrivenForms/LoginComponent';
// bootstrapApplication(LoginFormClass).catch((err) => console.error(err));


import { CommonClass } from './RoutingTask/CommonComponent';
import { provideRouter } from '@angular/router';
import { CustomeRoutes } from './RoutingTask/MyRoutes';
bootstrapApplication(CommonClass,{
    providers:[provideRouter(CustomeRoutes)]
}).catch((err) => console.error(err));


// import { InputParentClass } from './InputOutputDecorator/InputParentComponent';
// bootstrapApplication(InputParentClass,appConfig).catch((err) => console.error(err));

// import { OutputParentClass } from './InputOutputDecorator/OutputParentComponent';
// bootstrapApplication(OutputParentClass,appConfig).catch((err) => console.error(err));

// import { ViewParentClass } from './InputOutputDecorator/ViewParentComponent';
// bootstrapApplication(ViewParentClass,appConfig).catch((err) => console.error(err));

// import { StudentClass } from './ConsumeApi\'s/StudentComponent';
// bootstrapApplication(StudentClass,appConfig).catch((err) => console.error(err));

// import { ProductClass } from './ConsumeProductApi\'s/ProductComponent';
// bootstrapApplication(ProductClass,appConfig).catch((err) => console.error(err));


// import { provideRouter } from '@angular/router';
// import { CustomeRoutes } from './InvoiceTask/MyRoutes';
// import { CommonClass } from './InvoiceTask/CommonComponent';
// bootstrapApplication(CommonClass,{
//     providers:[provideRouter(CustomeRoutes)]
// }).catch((err) => console.error(err));