import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private url = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  deleteTask(task: Task): Observable<Task[]> {
    const deleteUrl = `${this.url}/${task.id}`;
    return this.http.delete<Task[]>(deleteUrl);
  }

  updateTaskReminder(task: Task): Observable<Task[]> {
    const updateUrl = `${this.url}/${task.id}`;
    return this.http.put<Task[]>(updateUrl, task, httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.url, task, httpOptions);
  }
}
