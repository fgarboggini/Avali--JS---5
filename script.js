function addMember() {
    const newMemberInput = document.getElementById('newMemberInput');
    const memberSelect = document.getElementById('memberSelect');
    if (newMemberInput.value.trim() !== '') {
        const option = document.createElement('option');
        option.value = newMemberInput.value;
        option.text = newMemberInput.value;
        memberSelect.appendChild(option);
        newMemberInput.value = ''; // Limpa o campo após adicionar
    } else {
        alert('Por favor, insira um nome de membro.');
    }
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDate = document.getElementById('taskDate');
    const taskTime = document.getElementById('taskTime');
    const memberSelect = document.getElementById('memberSelect');
    if (taskInput.value.trim() !== '' && memberSelect.value !== '' && taskDate.value !== '' && taskTime.value !== '') {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.onclick = function() {
            if (this.checked) {
                li.classList.add('completed');
            } else {
                li.classList.remove('completed');
            }
        };

        const taskText = `${taskInput.value} - ${memberSelect.value} - ${taskDate.value} ${taskTime.value}`;
        const textNode = document.createTextNode(taskText);
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remover';
        removeBtn.onclick = function() {
            taskList.removeChild(li);
        };

        li.appendChild(checkBox);
        li.appendChild(textNode);
        li.appendChild(removeBtn);
        taskList.appendChild(li);
        taskInput.value = '';
        taskDate.value = '';
        taskTime.value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}
