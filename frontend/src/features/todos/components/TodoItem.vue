<script setup lang="ts">
import { Check, RotateCw } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import type { ITodo } from "@/types";

const { todo } = defineProps<{ todo: ITodo }>();

const emit = defineEmits(["toggle"]);

const handleToggle = () => {
	emit("toggle", todo.id);
};
</script>

<template>
	<li class="flex justify-between text-lg border rounded-lg p-2">
		<span :class="{ 'line-through': todo.completed }">{{ todo.description }}</span>

		<Button class="border" @click="handleToggle">
			<Check v-if="todo.completed" />
			<RotateCw v-else />
		</Button>
	</li>
</template>
