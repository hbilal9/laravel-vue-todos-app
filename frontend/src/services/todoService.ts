import { http } from "@/services/http";
import type { ITodo } from "@/types";

export function fetchTodos(): Promise<ITodo[]> {
	return http().get("/todos");
}
export function createTodo(todo: ITodo): Promise<ITodo> {
	return http().post("/todos", todo);
}
export function updateTodo(todo: ITodo): Promise<ITodo> {
	return http().put(`/todos/${todo.id}`, todo);
}
export function deleteTodo(id: number): Promise<void> {
	return http().delete(`/todos/${id}`);
}
