import { defineStore } from "pinia";
import type { ITodo } from "@/types";
import { ref } from "vue";
import { fetchTodos, createTodo, updateTodo, deleteTodo } from "@/services/todoService";

export const useTodoStore = defineStore("todo", () => {
	const todos = ref<ITodo[]>([]);
	const isLoading = ref(false);
	const isCreating = ref(false);
	const isUpdating = ref(false);
	const error = ref<string | null>(null);

	// Fetch all todos from the API
	const getTodos = async () => {
		isLoading.value = true;
		error.value = null;
		try {
			const response = await fetchTodos();
			todos.value = response;
		} catch (err) {
			error.value = "Failed to fetch todos";
			console.error(err);
		} finally {
			isLoading.value = false;
		}
	};

	// Add a new todo
	const addTodo = async (description: string) => {
		isCreating.value = true;
		error.value = null;
		try {
			const newTodo = await createTodo({
				description,
				completed: false,
			} as ITodo);
			todos.value.push(newTodo);
		} catch (err) {
			error.value = "Failed to add todo";
			console.error(err);
		} finally {
			isCreating.value = false;
		}
	};

	// Remove a todo
	const removeTodo = async (id: number) => {
		isLoading.value = true;
		error.value = null;
		try {
			await deleteTodo(id);
			todos.value = todos.value.filter((todo) => todo.id !== id);
		} catch (err) {
			error.value = "Failed to delete todo";
			console.error(err);
		} finally {
			isLoading.value = false;
		}
	};

	// Toggle a todo's completed status
	const toggleTodo = async (id: number) => {
		const todo = todos.value.find((todo) => todo.id === id);
		if (!todo) return;

		isUpdating.value = true;
		error.value = null;
		try {
			const updatedTodo = { ...todo, completed: !todo.completed };
			await updateTodo(updatedTodo);
			todo.completed = !todo.completed;
		} catch (err) {
			error.value = "Failed to update todo";
			console.error(err);
		} finally {
			isUpdating.value = false;
		}
	};

	return { todos, getTodos, addTodo, removeTodo, toggleTodo, isLoading, error, isCreating, isUpdating };
});
