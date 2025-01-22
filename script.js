document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addButton = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
  
    const addTodo = () => {
      const taskText = input.value.trim();
  
      if (taskText === '') {
        alert('Please enter a task!');
        return;
      }
  
      // Create list item
      const listItem = document.createElement('li');
  
      // Add task text
      const taskSpan = document.createElement('span');
      taskSpan.textContent = taskText;
      listItem.appendChild(taskSpan);
  
      // Add delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        listItem.remove();
      });
      listItem.appendChild(deleteButton);
  
      // Add to list
      todoList.appendChild(listItem);
  
      // Clear input
      input.value = '';
    };
  
    addButton.addEventListener('click', addTodo);
  
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addTodo();
      }
    });
  });
  