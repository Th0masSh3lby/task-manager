"use client";
import AddTask from "./components/AddTask";
import ToDoListView from "./components/ToDoListView";
import toDoStore, { RootStore, toDo } from "./components/ToDoStore";
import { useEffect, useState } from "react";

export default function Home() {
  //setting local storage and changing initial state if local storage exists

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("ToDoStoreList")) {
        const json = JSON.parse(localStorage.getItem("ToDoStoreList") || "");
        console.log(json);
        if (RootStore.is(json)) {
          let storedState: any = json.todos;
          toDoStore.changeStore(storedState);
        }
      }
    }
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      {/*--------Heading------*/}
      <h1 className="mb-6 text-4xl font-bold mr-5 pt-3">Task Manager</h1>
      <div className="flex flex-row sm:flex-row justify-start items-center w-5/6 sm:w-full sm:px-20">
        <h2 className="mb-2 text-3xl font-semibold ml-2 sm:ml-7 mr-5 pt-3">
          All Tasks
        </h2>
        {/*--------Button for adding task------*/}
        <AddTask />
      </div>
      <div className="bg-black h-0.5 w-5/6"></div>
      {/*-------Current List Grid View-------*/}
      <ToDoListView store={toDoStore} />
    </main>
  );
}
