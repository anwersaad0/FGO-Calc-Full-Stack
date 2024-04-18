import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { useEffect } from "react";



function ProjectsPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <main className="site-projects">

            <div className="container-projects">

                <div>
                    Our Projects
                    <h3>A list of of what we've been working on?</h3>
                </div>

                <div className="project-options">

                    <div>
                        <NavLink exact to="/media/monhos">Monster Hospital</NavLink>
                    </div>

                    <div>
                        <NavLink exact to="/media/flyuni">Flynville University</NavLink>
                    </div>

                </div>

            </div>

        </main>
    )
}

export default ProjectsPage;