import React from "react";

export default function Sidebar({ style }) {
  let pastProjects = ["Project 1", "Project 2", "Project 3"];
  return (
    <div
      className={style + " bg-surface-low flex flex-col h-full min-h-0 pb-2"}
    >
      <div>
        <h1 className="heading-primary mx-2 p-4">Prompt Genie</h1>
        <div className="hover:bg-primary-highlight flex justify-center items-center gap-1 p-2 bg-primary mx-2 mt-2 rounded-md">
          <h2 className="heading-secondary">+</h2>
          <h2 className="heading-secondary">New Project</h2>
        </div>
      </div>

      <div className="border-b-1 m-2 pb-2 border-b-outline flex-1 overflow-y-auto">
        <h3 className="subheading-variant">Recent Projects</h3>
        <div>
          <ul>
            {pastProjects.map((project, index) => {
              return (
                <li key={index} className="px-2">
                  <h3 className="subheading">{project}</h3>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="mx-2 mb-2">
        <div>
          <h3 className="subheading">Privacy Policy</h3>
        </div>
        <div>
          <h3 className="subheading">Cookies</h3>
        </div>
        <div>
          <h3 className="subheading">Terms and Conditions</h3>
        </div>
      </div>
    </div>
  );
}
