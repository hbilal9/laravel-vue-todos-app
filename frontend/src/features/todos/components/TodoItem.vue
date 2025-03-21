<script setup lang="ts">
import { Check, RotateCw } from "lucide-vue-next";
import { Button } from "@/components/ui/button";

const { todo } = defineProps({
	todo: {
		type: Object,
		required: true,
	},
});
</script>

<template>
	<li class="flex justify-between text-lg border rounded-lg p-2">
		<span :class="{ 'line-through': todo.completed }">{{ todo.description }}</span>

		<Button class="border" v-if="todo.completed"><Check /></Button>
		<Button class="border" v-else><RotateCw /></Button>
	</li>
</template>
