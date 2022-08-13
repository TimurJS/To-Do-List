# To Do List (application)
---
The project was created to improve practical skills of working with browser's local storage __“Local Storage”__. The application provides the ability to create personal tasks, and  a to-do list in a _browser_. A user can create and delete tasks. Additionally, a user is able to  mark completed tasks. The application launches in a default browser window. Adding a task to the page is done via typing text in the input element, and clicking _"Add a task"_ button. If the task is completed, it can be marked with a tick, after which it will be lowered to the bottom of the list. Task is deleted by pressing the _"Done"_ button.

### Technical part of the application
---
All created tasks are stored in the local storage of the browser window "Local Storage" under the key named __“tasks”__. Each task is an object with property names __“description”__ and __“completed”__. The description property stores the text information of the task, completed - whether the task is completed or not.

On startup, an application checks for the presence of tasks in the Local Storage.  If tasks are absent, an empty array is placed in the “tasks” variable. If there are tasks in the Local Storage, they will be converted from __JSON format__ to a regular __object__ and will be placed in the _“tasks”_ array. When a new task is added, the data will be placed in the constructor function which will form the task as an object, after which it will be added to the tasks array. Next, the tasks are updated in the local storage.

After performing the above described actions, the program proceeds to the stage of displaying tasks on the page. This is done by calling the __“fillHtmlList” function__, which first clears the task blocks on the page. After that, if there are tasks in the tasks array, the function loops through each task separately and passes them to the __“createTemplate” function__. “createTemplate” function _returns a pre-prepared template with a task and buttons_ for interacting with it. The indexes of each task are also passed in a loop, so that when the template is formed, events can be attached to the interaction buttons, upon occurrence of which the tasks will either be deleted or marked as completed. It is also worth noting that in order to correctly display tasks on the page before they are formed in templates, the __“filterTasks” function__ filters the array for active and completed tasks (first active tasks are added to the array, and then the completed ones).

The application implements animation of individual components depending on various events.
Application is able to be used on different devices; an adaptive layout is provided for screen sizes of various mobile and tablet gadgets (the most used gadgets).
***

__Repository link:__ https://github.com/TimurJS/To-Do-List.git
__GitHub profile:__ https://github.com/TimurJS



