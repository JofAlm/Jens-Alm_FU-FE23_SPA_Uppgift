// Importera useState och useEffect från React-biblioteket
import { useState, useEffect } from "react";
// Skapa funktionell komponent för Projekt
const Projekt = () => {
  // Hantera state för projektlistan
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Hämta projekt från GitHub API
    fetch("https://api.github.com/users/JofAlm/repos")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  // Rendera lista över projekt med länkar
  return (
    <div>
      <h2>Projekt</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projekt;
