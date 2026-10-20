
let allProjects = [];

fetch("HW2Projects.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Could not load project data.");
        }
        return response.json();
    })
    .then(projects => {
        allProjects = projects;
        displayProjects(allProjects);
    })
    .catch(error => {
        document.getElementById("projectContainer").innerHTML =
            "<p>Unable to load projects. Please check the JSON file and run the site using a local web server.</p>";
        console.error(error);
    });

function displayProjects(projects) {
    const container = document.getElementById("projectContainer");

    container.innerHTML = "";

    projects.forEach(project => {
        const cardColumn = document.createElement("div");
        cardColumn.className = "col-md-6 col-lg-4";

        cardColumn.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <h2 class="card-title h5">${project.title}</h2>
                    <p class="badge bg-primary">${project.category}</p>
                    <p class="card-text">${project.description}</p>
                </div>
            </div>
        `;

        container.appendChild(cardColumn);
    });
}

document.getElementById("categoryFilter").addEventListener("change", function () {
    const selectedCategory = this.value;

    if (selectedCategory === "All") {
        displayProjects(allProjects);
    } else {
        const filteredProjects = allProjects.filter(project =>
            project.category === selectedCategory
        );

        displayProjects(filteredProjects);
    }
});