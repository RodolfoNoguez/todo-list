import './style.css';


document.getElementById('todo').addEventListener('click', () => {
    document.getElementById('projectform').style.display = 'flex';
});

document.getElementById('projectclose').addEventListener('click', () => {
    document.getElementById('projectform').style.display = 'none';
});




document.getElementById('projectf').addEventListener('submit', function (event) {
    event.preventDefault(); // ✅ Prevents page reload

    const projectNameInput = document.getElementById('projectlabel');
    const projectName = projectNameInput.value.trim();

    if (projectName === "") return;

    // add to display
    addProject(projectName);

    // Clear input and hide form
    projectNameInput.value = "";
    document.getElementById('projectform').style.display = 'none';
});

// Append project name to the container
function addProject(name) {
    const container = document.getElementById('project-container');
    const currentCount = container.children.length;

    const projectDiv = document.createElement('div');
    if (currentCount < 5){
        projectDiv.classList.add('projectnamecontainer');
        projectDiv.innerHTML = `<div>${name}</div> <button id="deleteproject">Delete</button>`;
        projectDiv.classList.add('project-entry');

        container.appendChild(projectDiv);

        const deleteButton = projectDiv.querySelector('#deleteproject');
        deleteButton.addEventListener('click', () => {
            container.removeChild(projectDiv);
        });
    }
    else{
        alert("you can only have 5 projects at a time");
    }



}

