This is a ToDo List App created using next.js, typescript, and tailwind.css.

Demo: "https://task-manager-black-beta.vercel.app/"

## To run application locally

First, fork and clone the github repository locally

Second, install the dependencies
**npm install**

Third, run the development server:
**npm run dev**

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

Steps followed in creating the app.

1. Create Heading and basic Add task button(popping a modal)
   Modal popsup on clicking AddTask button.

2. Create store using mobx state tree
   Created Todo(task) model and RootStore(list of tasks) model.
   Also added necessary functions to each.

3. Implement Addtasks functionality
   Adding new task to the store on clicking the submit button.
   Adding task to the store automatically updates the local storage as a new snapshot of store is generated.

4. Implement change status functionality for each task
   Change status of the task by clicking on the status of the Task. This is done with the help of togglestatus functionality of Todo model

5. Insert update functionality for each task
   Similar to AddTask button. Except the initial inputs of the boxes are replaced by current data rather than being empty making sure that clicking update and submitting without changing the data will not change the task.

6. Implement delete functionality
   Clicking delete button popsup a modal confirming the delete task. Clicking Yes in the modal will trigger delete functionality from the store and resulting in deletion of task.

7. Final CSS touches

8. Deploy on Vercel
