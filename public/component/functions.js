function createProjectCard(project){
    return `    
        <div class="card col s6 m4">
            <div class="card-image">
                <img src="${project.img ? project.img :'assets/HP.jpg'}">
                <span class="card-title">${project.title}</span>
            </div>
            <div class="card-content">
                <p>${project.des}</p>  
            </div>
        </div>
    `;
}