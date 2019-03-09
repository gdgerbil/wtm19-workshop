const todoText = document.querySelector('input')

const ul = document.querySelector('ul')

document.querySelector('#btn').addEventListener('click', () => {
    const text = todoText.value;

    todoText.value = '';

    const li = document.createElement('li')
    li.innerText = text;

    li.classList.add('list-group-item');

    const btn = document.createElement('button')

    btn.innerHTML = 'X'
    btn.className = 'btn btn-danger';

    btn.addEventListener('click', () => {
        li.remove();
    })

    li.append(btn)

    ul.append(li);
})