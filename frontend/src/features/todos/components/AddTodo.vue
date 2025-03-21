<script setup lang="ts">
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
</script>

<template>
	<div class="flex gap-4">
		<div class="grow">
			<Label for="todo" class="text-sm font-medium">New Todo</Label>
			<Input id="todo" placeholder="Enter a new task" class="w-full" />
		</div>
		<Button type="submit" class="py-4 mt-6">Add Todo</Button>
	</div>
</template>
