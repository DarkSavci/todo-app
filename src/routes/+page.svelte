<script lang="ts">
    import { tasks } from '$lib/tasks';
    import Task from '$components/Task.svelte';

    let input: HTMLInputElement;
    let inputValue: string = "";

    let handleInput = (event: KeyboardEvent) => {
         if (event.key === 'Enter') {
             tasks.update(tasks => [...tasks, {
                 id: tasks.length,
                 name: inputValue,
                 isCompleted: false
             }]);
             inputValue = ""
         }
    }

    $: inputValue = inputValue.length > 40 ? inputValue.slice(0, 40) : inputValue;

</script>

<div class="w-screen h-screen flex justify-center items-center bg-slate-700">

    <div class="w-[25%] bg-white p-4 rounded-lg">
        
        <h1 class="text-xl text-center items-center mb-3">
            Worst todo app ever
        </h1>

        <input on:keydown={handleInput} bind:value={inputValue} bind:this={input} type="text" placeholder="Add a new task" class="w-full h-12 border-gray-500 rounded font-semibold placeholder-gray-500">  

        <div class="my-2 w-full h-[1px] bg-gray-400"></div>

        <div class="py-2 divide-y">
            {#each $tasks as task}
                <Task {task} />
            {/each}
        </div>
        
    </div>

</div>