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

    populateDropdown(); // Update dropdown after adding

}


//add tasks to projects

document.getElementById('projects').addEventListener('click', () => {
    document.getElementById('todoform').style.display = 'flex';
});

document.getElementById('todoclose').addEventListener('click', () => {
    document.getElementById('todoform').style.display = 'none';
});



function populateDropdown() {
    // 1. Get the container and dropdown elements
    const container = document.getElementById('projectnamecontainer') || document.getElementById('project-container');
    const dropdown = document.getElementById('tododropdown');
    
    dropdown.innerHTML = '';
    
    // 3. Add default option
    const defaultOption = new Option('-- Select Project --', '');
    dropdown.add(defaultOption);
    
    // 4. Find ALL elements with IDs inside container (including nested ones)
    const elementsWithIds = container.querySelectorAll('[id]');
    
    // 5. Add each ID to dropdown
    elementsWithIds.forEach(element => {
      // Skip the container's own ID and any duplicates
      if (element.id !== 'project-container' && 
          !Array.from(dropdown.options).some(opt => opt.value === element.id)) {
        const option = new Option(element.id, element.id);
        dropdown.add(option);
      }
    });
    
    console.log('Dropdown populated with:', Array.from(elementsWithIds).map(el => el.id));
  }

  // Example usage:
document.getElementById('todoform').addEventListener('click', populateDropdown);






//submit task form
document.getElementById('todof').addEventListener('submit', function (event){
    event.preventDefault();

    const duedate = document.getElementById('tododate').value.trim();
    const todotaskitem = document.getElementById('todolabel').value.trim();
    const projectName = document.getElementById('tododropdown').value.trim();

    //add task to display // not functional as of now
    addtaskunderproject(duedate, todotaskitem, projectName);

    //clear input and hide form
    if (duedate === "" || todotaskitem === "" || projectName === "") return;
    document.getElementById('todof').style.display = 'none';

})

// Add task under project
function addtaskunderproject(duedate, todotaskitem, projectname){
    const container = document.getElementById('project-container');
    const currentCount = container.children.length;

    const taskDiv = document.createElement('div');
    if (currentCount < 5){
        taskDiv.classList.add('projectnamecontainer');
        taskDiv.id =`${name}`
        taskDiv.innerHTML = `
            <div class="tasklayout">
                <div>${name}</div> 
                <button class="deletetask">Delete</button>
            </div>
            `;
        taskDiv.classList.add('project-entry');

        container.appendChild(projectDiv);

        const deleteButton = projectDiv.querySelector('.deletetask');
        deleteButton.addEventListener('click', () => {
            container.removeChild(projectDiv);
        });
    }
    else{ 
        alert("you can only have 5 projects at a time");
    }

    // populateDropdown(); // Update dropdown after adding
}