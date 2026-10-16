const taskForm = document.querySelector('#taskForm');
const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#taskList');
const emptyNotice = document.querySelector('#emptyNotice');
const taskCounter = document.querySelector('#taskCounter');
const clearAllBtn = document.querySelector('#clearAllBtn');

const updateUIState =() => {
    const totalItems = taskList.children.length;
    taskCounter.textContent = `Total Items: ${totalItems}`;
    if (totalItems === 0) {
        emptyNotice.classList.remove("d-none");
    } else {
        emptyNotice.classList.add("d-none");
    }
}

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    const li=document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    const textSpan=document.createElement('span');
    textSpan.textContent=taskText;

    const deleteBtn=document.createElement('button');
    deleteBtn.className='btn btn-outline-danger btn-sm border-0';
    deleteBtn.innerHTML='<i class="bi bi-trash"></i>';

    deleteBtn.addEventListener('click', () => {
        li.remove();
        updateUIState();
    });

    li.append(textSpan, deleteBtn);
    taskList.append(li);

    taskInput.value = "";
    updateUIState();
})

clearAllBtn.addEventListener("click", () => {
    taskList.innerHTML = "";
    updateUIState();
})
