<script setup lang="ts">
import { Label } from "@/components/ui/label";
import { ref } from "vue";
import TodoItem from "./TodoItem.vue";
import type { ITodo } from "@/types";

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
</script>

<template>
	<div class="mt-4">
		<Label class="text-md font-semibold">Todo List</Label>
		<ul class="pl-5 mt-2 space-y-2">
			<TodoItem v-for="(todo, index) in todos" :key="index" :todo="todo" />
		</ul>
	</div>
</template>
