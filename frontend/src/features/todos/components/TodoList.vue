<script setup lang="ts">
import { Label } from "@/components/ui/label";
import TodoItem from "./TodoItem.vue";
import { useTodoStore } from "@/stores/todoStore";

const todoStore = useTodoStore();
</script>

<template>
	<div class="mt-4">
		<Label class="text-md font-semibold">Todo List</Label>
		<div v-if="todoStore.isLoading" class="text-center py-4">Loading todos...</div>
		<div v-else-if="todoStore.error" class="text-red-500 py-4">{{ todoStore.error }}</div>
		<ul v-else class="pl-5 mt-2 space-y-2">
			<TodoItem
				v-for="(todo, index) in todoStore.todos"
				:key="index"
				:todo="todo"
				@toggle="todoStore.toggleTodo($event)"
			/>
			<li v-if="todoStore.todos.length === 0" class="text-gray-500">No todos yet. Add one!</li>
		</ul>
	</div>
</template>
