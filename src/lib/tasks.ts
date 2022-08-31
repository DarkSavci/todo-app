import { browser } from "$app/environment";
import { writable, type Writable } from "svelte/store";


export type Task = {
    id: number;
    name: string;
    isCompleted: boolean;
};

const getLocalStorage = (): Task[] => {
    if(browser) {
        return JSON.parse(localStorage.getItem("tasks") as string);
    }
    return [];
}

export let tasks: Writable<Task[]> = writable(getLocalStorage());


tasks.subscribe(tasks => {
    if(browser) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
});