
const button = document.querySelector('button');
const userEntry = document.querySelector('#favchap');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
    if (userEntry.value !== "") {

        let listItem = document.createElement('li');
        let deleteButton = document.createElement('button');

        // set attributes
        listItem.classList.add('list');
        deleteButton.classList.add('delete');

        // asign values
        listItem.textContent = userEntry.value;
        deleteButton.textContent = "✖";

        // add to list element and the delete button
        list.appendChild(listItem);
        listItem.append(deleteButton);

        // delete button
        deleteButton.addEventListener('click', function () {

            listItem.remove();
            
        });
                
        document.querySelector('input').focus();
        userEntry.value = '';
    }
});
// Select the toggle switch and the body element
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

// Event listener to toggle dark mode class
darkModeToggle.addEventListener("change", () => {
    body.classList.toggle("dark-mode");
});
