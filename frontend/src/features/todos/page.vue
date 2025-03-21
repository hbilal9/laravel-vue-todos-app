<script setup lang="ts">
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AddTodo from "./components/AddTodo.vue";
import TodoList from "./components/TodoList.vue";
import { useTodoStore } from "@/stores/todoStore";
import { onMounted } from "vue";

const todoStore = useTodoStore();

onMounted(() => {
	todoStore.getTodos();
});
</script>

<template>
	<div class="flex justify-center w-full px-6 min-h-[500px]">
		<Card class="w-full">
			<CardHeader>
				<CardTitle>Todos</CardTitle>
				<CardDescription>Manage your tasks efficiently.</CardDescription>
			</CardHeader>
			<CardContent>
				<AddTodo />
				<TodoList />
			</CardContent>
		</Card>
	</div>
</template>
