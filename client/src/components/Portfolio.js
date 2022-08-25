import Project from './Project';
import projects from './data/projects'

function Portfolio() {
    return (
        <main id="main" class="work">
        <h2>Projects</h2>
        
        <div class="icons">
            {projects.map((project, i) => {<div key={i}><Project title={project.title} placeholder={project.placeholder} image_path={project.image_path} url={project.url}/> </div>})}
        </div>
    </main>
    )
}

export default Portfolio;