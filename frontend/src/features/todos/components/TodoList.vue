<script setup lang="ts">
import { Label } from "@/components/ui/label";
import TodoItem from "./TodoItem.vue";
import { useTodoStore } from "@/stores/todoStore";

const { todos, toggleTodo } = useTodoStore();
</script>

<template>
	<div class="mt-4">
		<Label class="text-md font-semibold">Todo List</Label>
		<ul class="pl-5 mt-2 space-y-2">
			<TodoItem v-for="(todo, index) in todos" :key="index" :todo="todo" @toggle="toggleTodo($event)" />
		</ul>
	</div>
</template>
