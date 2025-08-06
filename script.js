const input = document.getElementById('task-input');
const addButton = document.getElementById('add-task-btn');
const activeTasks = document.getElementById('active-tasks');
const completedTasks = document.getElementById('completed-tasks');

addButton.addEventListener('click', addTask);
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});

function addTask() {
  const taskText = input.value.trim();
  if (taskText === '') return;

  const taskItem = makeTaskItem(taskText, false);
  activeTasks.appendChild(taskItem);
  input.value = '';
}
function makeTaskItem(text, done) {
  const item = document.createElement('li');
  item.className = 'task-item';
  if (done) item.classList.add('completed');

  const label = document.createElement('span');
  label.textContent = text;

  label.addEventListener('click', () => {
    item.remove();
    const movedItem = makeTaskItem(text, !done);
    if (done) {
      activeTasks.appendChild(movedItem);
    } else {
      completedTasks.appendChild(movedItem);
    }
  });

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', () => item.remove());

  item.appendChild(label);
  item.appendChild(removeBtn);
  return item;
}
