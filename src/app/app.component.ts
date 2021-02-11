import { Component } from '@angular/core';

interface IToggleProps { id: number; isCompleted: boolean; }
interface IGetSelectedItemProps { item: { id: number; isCompleted: boolean; }; operation: string; }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  todoTasks = [];

  getTodoFromChild = (data: string): void => {
    if (data !== '') {
      this.todoTasks.push({ id: Date.now(), task: data, isCompleted: false });
    }
  }

  toggleTodo = (item: IToggleProps): void => {
    const { id, isCompleted } = item;
    const newTodo = this.todoTasks.map(todo => {
      if (todo.id === id) {
        todo = { ...todo, isCompleted: !isCompleted };
        return todo;
      } else {
        return todo;
      }
    });

    this.todoTasks = [...newTodo];
  }

  deleteTodo = (item: IToggleProps): void => {
    const { id, isCompleted } = item;
    const newData = this.todoTasks.filter(todo => todo.id !== id);
    this.todoTasks = [...newData];
  }

  getSelectedItem = ({ item, operation }: IGetSelectedItemProps): void => {
    if (operation === 'toggle') {
      this.toggleTodo(item);
    } else if (operation === 'delete') {
      this.deleteTodo(item);
    }
  }
}
