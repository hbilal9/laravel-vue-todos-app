<!-- AddTodo.vue -->
<script setup lang="ts">
import { ref } from "vue";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTodoStore } from "@/stores/todoStore";

const { addTodo, isCreating } = useTodoStore();
const newTodo = ref("");

const handleAddTodo = async () => {
	if (newTodo.value.trim()) {
		await addTodo(newTodo.value);
		newTodo.value = "";
	}
};
</script>

<template>
	<div class="flex gap-4">
		<div class="grow">
			<Label for="todo" class="text-sm font-medium">New Todo</Label>
			<Input id="todo" v-model="newTodo" placeholder="Enter a new task" class="w-full" />
		</div>
		<Button type="submit" class="py-4 mt-6" @click="handleAddTodo" :disabled="isCreating">
			{{ isCreating ? "Creating..." : "Add Todo" }}
		</Button>
	</div>
</template>
