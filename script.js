document.addEventListener("DOMContentLoaded", function () {
	const taskForm = document.querySelector("#taskForm");
	const taskInput = document.querySelector("#taskInput");
	const taskList = document.querySelector("#taskList");
  
	taskForm.addEventListener('submit', (e) => {
	  e.preventDefault();
  
	  const taskDescription = taskInput.value;
  
	  if (taskDescription.trim() !== "") {
		const taskElement = document.createElement('div');
		taskElement.classList.add('task');
  
		const taskContentElement = document.createElement('div');
		taskContentElement.classList.add('task-content');
  
		const taskTextInput = document.createElement('input');
		taskTextInput.classList.add('task-text');
		taskTextInput.type = 'text';
		taskTextInput.value = taskDescription;
		taskTextInput.setAttribute('readonly', 'readonly');
  
		taskContentElement.appendChild(taskTextInput);
  
		const taskActionsElement = document.createElement('div');
		taskActionsElement.classList.add('task-actions');
  
		const taskEditButton = document.createElement('button');
		taskEditButton.classList.add('task-edit');
		taskEditButton.innerText = 'Edit';
  
		const taskDeleteButton = document.createElement('button');
		taskDeleteButton.classList.add('task-delete');
		taskDeleteButton.innerText = 'X';
  
		taskActionsElement.appendChild(taskEditButton);
		taskActionsElement.appendChild(taskDeleteButton);
  
		taskElement.appendChild(taskContentElement);
		taskElement.appendChild(taskActionsElement);
  
		taskList.appendChild(taskElement);
  
		taskInput.value = '';
  
		taskEditButton.addEventListener('click', (e) => {
		  if (taskEditButton.innerText.toLowerCase() == "edit") {
			taskEditButton.innerText = "Save";
			taskTextInput.removeAttribute("readonly");
			taskTextInput.focus();
		  } else {
			taskEditButton.innerText = "Edit";
			taskTextInput.setAttribute("readonly", "readonly");
		  }
		});
  
		taskDeleteButton.addEventListener('click', (e) => {
		  taskList.removeChild(taskElement);
		});
	  }
	});
  });
  
  