import './style.css';


document.getElementById('todo').addEventListener('click', () => {
    document.getElementById('projectform').style.display = 'flex';
});

document.getElementById('projectclose').addEventListener('click', () => {
    document.getElementById('projectform').style.display = 'none';
});




document.getElementById('projectf').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents page reload

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
        projectDiv.id =`${name}`
        projectDiv.innerHTML = `
            <div class="projectlayout">
                <div>${name}</div> 
                <button class="deleteproject">Delete</button>
            </div>
            `;
        projectDiv.classList.add('project-entry');

        container.appendChild(projectDiv);

        const deleteButton = projectDiv.querySelector('.deleteproject');
        deleteButton.addEventListener('click', () => {
            container.removeChild(projectDiv);
        });
    }
    else{
        alert("you can only have 5 projects at a time");
    }

    // populateDropdown(); // Update dropdown after adding

}


//add tasks to projects

document.getElementById('projects').addEventListener('click', () => {
    document.getElementById('todoform').style.display = 'flex';
});

document.getElementById('todoclose').addEventListener('click', () => {
    document.getElementById('todoform').style.display = 'none';
});



function populateDropdown() {
    const container = document.getElementById('project-container');
    const dropdown = document.getElementById('tododropdown');
    
    dropdown.innerHTML = '';
    dropdown.add(new Option('-- Select Project --', ''));
    
    const projects = container.querySelectorAll('.projectnamecontainer');
    
    projects.forEach(project => {
        dropdown.add(new Option(project.id, project.id));
    })
    
  }

document.getElementById('projects').addEventListener('click', () => {
    populateDropdown();
    document.getElementById('todoform').style.display = 'flex';
});






document.getElementById('todof').addEventListener('submit', function (event){
    event.preventDefault();

    const duedate = document.getElementById('tododate').value.trim();
    const todotaskitem = document.getElementById('todolabel').value.trim();
    const projectName = document.getElementById('tododropdown').value.trim();

    if (duedate === "" || todotaskitem === "" || projectName === "") return;

    addtaskunderproject(duedate, todotaskitem, projectName);


    document.getElementById('todoform').style.display = 'none';
    document.getElementById('tododate').value = '';
    document.getElementById('todolabel').value = '';
    document.getElementById('tododropdown').selectedIndex = 0;  
})

// Add task under project
function addtaskunderproject(duedate, todotaskitem, projectname){
    const specificProject = document.getElementById(projectname);

    if (!specificProject){return;}

    const taskCount = specificProject.querySelectorAll('.tasktnamecontainer').length;

    if (taskCount>=5){
        alert("You can only have 5 tasks at a time in a project");
        return;
    }

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('tasktnamecontainer');
    taskDiv.id = `task-${todotaskitem}`;
    taskDiv.innerHTML = `
            <div>${todotaskitem}</div>
            <div>${duedate}</div>
            <button class="deletetask">Delete</button>
    `;

    taskDiv.classList.add('project-entry');

    specificProject.appendChild(taskDiv);

    const deleteButton = taskDiv.querySelector('.deletetask');
    deleteButton.addEventListener('click', () => {
        specificProject.removeChild(taskDiv);
    });
}