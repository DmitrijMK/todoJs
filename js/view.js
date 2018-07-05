function view(task) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const buttonEdit = document.createElement('button');
  const buttonDelete = document.createElement('button');
  const checkbox = document.createElement('input');

  li.id = task.id;
  task.editNow = false;
  li.classList.add('mdc-list-item');
  span.classList.add('mdc-list-item__secondary-text');

  buttonEdit.classList.add('mdc-icon-button');
  buttonEdit.classList.add('material-icons');
  buttonEdit.classList.add('edit');

  buttonDelete.classList.add('mdc-icon-button');
  buttonDelete.classList.add('material-icons');
  buttonDelete.classList.add('delete');

  checkbox.checked = task.completed;
  checkbox.classList.add('checkbox');
  checkbox.setAttribute('type','checkbox');

  span.innerHTML = task.title;
  buttonEdit.innerHTML = 'edit';
  buttonDelete.innerHTML = 'delete';

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(buttonEdit);
  li.appendChild(buttonDelete);
  document.getElementById('wrapper').appendChild(li);
}