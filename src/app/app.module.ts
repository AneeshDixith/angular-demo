import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularDemoComponent } from './MyComponent/angular-demo/angular-demo.component';
import { TodoItemComponent } from './MyComponent/todo-item/todo-item.component';
import { AddTodoComponent } from './MyComponent/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DeletedTodosComponent } from './MyComponent/deleted-todos/deleted-todos.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularDemoComponent,
    TodoItemComponent,
    AddTodoComponent,
    DeletedTodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'current-todo', component: AngularDemoComponent},
      {path: 'deleted-todo', component: DeletedTodosComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
