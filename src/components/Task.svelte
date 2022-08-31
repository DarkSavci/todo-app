<script lang="ts">
	import type { Task } from '$lib/tasks';
    import { tasks } from '$lib/tasks';
    export let task: Task;

    let isChecked: boolean;
    $: task.isCompleted = isChecked
    

    const removeTask = () => {
        tasks.update(tasks => tasks.filter(fTask => fTask.id !== task.id));
    }
</script>

<div class="flex justify-between items-center gap-2 py-2">
    <input bind:checked={isChecked} type="checkbox" class="focus:ring-0" id={String(task.id)}>
    <span class="text-left w-full break-words" class:line-through={isChecked}>{task.name}</span>

    <svg on:click|preventDefault={removeTask} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hover:stroke-red-600 cursor-pointer">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
      
</div>