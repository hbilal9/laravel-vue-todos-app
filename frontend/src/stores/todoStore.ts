import { defineStore } from "pinia";
import type { ITodo } from "@/types";
import { ref } from "vue";

export const useTodoStore = defineStore("todo", () => {
	const todos = ref<ITodo[]>([
		{
			id: 1,
			description: "Create laravel backend",
			completed: false,
		},
		{
			id: 2,
			description: "Create vue frontend",
			completed: true,
		},
		{
			id: 3,
			description: "Create tailwind components",
			completed: false,
		},
	]);

	const addTodo = (todo: ITodo) => {
		todos.value.push(todo);
	};

	const removeTodo = (id: number) => {
		todos.value = todos.value.filter((todo) => todo.id !== id);
	};

	const toggleTodo = (id: number) => {
		const todo = todos.value.find((todo) => todo.id === id);
		if (todo) {
			todo.completed = !todo.completed;
		}
	};

	return { todos, addTodo, removeTodo, toggleTodo };
});
