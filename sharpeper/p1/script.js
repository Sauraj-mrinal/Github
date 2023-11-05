document.addEventListener('DOMContentLoaded', function() {
    const expenseForm = document.getElementById('expenseForm');
    const expenseList = document.getElementById('expenseList');

    expenseForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const editIndex = document.getElementById('editIndex').value;
        const amount = parseFloat(document.getElementById('expense-amount').value);
        const name = document.getElementById('expense-name').value;
        const category = document.getElementById('expense-category').value;

        if (!name || isNaN(amount)) {
            alert('Please enter a valid description and amount.');
            return;
        }

        if (editIndex === '') {
            addExpense(name, amount, category);
        } else {
            editExpense(editIndex, name, amount, category);
        }
        expenseForm.reset();
    });

    function addExpense(name, amount, category) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${name}</span>
            <span>${amount.toFixed(2)}</span>
            <span>${category}</span>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        `;
        
        expenseList.appendChild(li);

        li.querySelector('.delete').addEventListener('click', function() {
            li.remove();
        });

        li.querySelector('.edit').addEventListener('click', function() {
            document.getElementById('editIndex').value = li.dataset.index;
            document.getElementById('expense-amount').value = parseFloat(li.children[1].textContent);
            document.getElementById('expense-name').value = li.children[0].textContent;
            document.getElementById('expense-category').value = li.children[2].textContent;
        });
    }

    function editExpense(index, name, amount, category) {
        const li = expenseList.children[index];
        li.children[0].textContent = name;
        li.children[1].textContent = amount.toFixed(2);
        li.children[2].textContent = category;

        document.getElementById('editIndex').value = '';
    }
});
