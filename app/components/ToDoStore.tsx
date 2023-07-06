"use client";
import { types, onSnapshot } from "mobx-state-tree";
//Todo -- task with name, description and status
export const toDo = types
  .model({
    title: types.optional(types.string, ""),
    description: types.optional(types.string, ""),
    status: types.optional(types.boolean, false),
  })
  .actions((self) => {
    //function for changing the status
    function toggleStatus() {
      self.status = !self.status;
    }
    return { toggleStatus };
  });

//RootStore --- Store for all Todos(tasks)
export const RootStore = types
  .model({
    todos: types.optional(types.array(toDo), []),
  })
  .actions((self) => {
    //function for adding tasks
    function addTodo(title: string, description: string, status: boolean) {
      let temp = toDo.create({ title, description, status });
      self.todos.push(temp);
    }
    //function for updating tasks
    function updateTodo(
      index: number,
      title: string,
      description: string,
      status: boolean
    ) {
      let temp = toDo.create({ title, description, status });
      self.todos.splice(index, 1, temp);
    }

    //function for deleting tasks
    function deleteTodo(index: number) {
      self.todos.splice(index, 1);
    }
    //function for updating storage
    function changeStore(array: Array<typeof toDo>) {
      self.todos.splice(0, self.todos.length, ...array);
    }

    return { addTodo, updateTodo, deleteTodo, changeStore };
  });

const initialState: any = {
  todos: [],
};

const toDoStore = RootStore.create(initialState);
onSnapshot(toDoStore, (snapshot) => {
  globalThis.window.localStorage.setItem(
    "ToDoStoreList",
    JSON.stringify(snapshot)
  );
});

export default toDoStore;
