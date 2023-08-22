import { useState, useRef, useEffect } from 'react'
import './projects.css';

export default function Projects() {
    var numberOfProjects = 3;
    var [currentProject, setCurrentProject] = useState(0);
    var projectImages: string[];
    var projectTitles: string[];
    var projectDescriptions: string[];
    var projectLinks: string[];

    projectImages = [
        "./GL_Paint.png",
        "./mediapipe_cpp_icon.png",
        "./mediapipe_godot_icon.png"
    ]
    projectTitles = [
        "GL Paint",
        // "Mediapipe C++ library",
        "Mediapipe",
        "Godot Mediapipe Module"
    ]
    projectDescriptions = [
        `A simple paint application written in C++ using OpenGL.

It provides basic functionalities like different shaped cursors and erasers, ability to select different colors as well as to save the image with keyboard shortcuts.

To draw, click the left mouse button and move the mouse, release to stop drawing.

Multiple brush shapes are accessible with right click menu.

The current brush color is displayed on the left side.`,

//////////////////////////////////////////////////////////////

        `Mediapipe is a project by Google, it provides solutions for different types of tracking. This is basically a c++ library which exposes functions to utilize that library.

The main purpose is to simplify the usage of mediapipe by abstracting a lot of stuff and to be able to use mediapipe in other projects which may use different build systems. With this it is also possible to build plugins/modules for game engines easily allowing use of tracking features inside games/applications built using them.

For now, this has only been built and tested in Linux, more specifically Manjaro KDE ( Though the build and usage process is same for every distribution). Windows should also work and a lot of things should directly translate with the only major difference being the file extension from .so ( Linux ) to .dll ( Windows ) but it hasn’t yet been tested in it.`,

//////////////////////////////////////////////////////////////

        `This is a module for the Godot game engine which allows using mediapipe solutions inside the game engine.

With this module it is possible to use mediapipe solutions inside Godot. Currently only tracking solutions which return a NormalizedLandmarksList, like Holistic tracking.

Currently only Linux is supported and tested, it can be built for windows if you have the required knowledge.
`
    ]
    projectLinks = [
        "https://github.com/purgeme/GL_Paint",
        "",
        ""
    ]

    return (
        <div className="Projects">
            <Header/>
            <ProjectGrid numberOfProjects={numberOfProjects} projectImages={projectImages} currentProject={currentProject} setCurrentProject={setCurrentProject}/>
            <ProjectDescription title={projectTitles[currentProject]} description={projectDescriptions[currentProject]} links={projectLinks[currentProject]}/>
        </div>
    );
}

function Header() {
    return (
        <div className='ProjectsHeader'>
            PROJECTS
        </div>
    );
}

function ProjectImage(props: {index: number, url: string, setCurrentProject: Function, isSelected: boolean} ){

    const selected = props.isSelected ? "PISelected" : "";

    return (
        <div className={'ProjectImage ' + selected} onClick={() => {props.setCurrentProject(props.index);}}>
            <img src={props.url} alt={props.url}/>
        </div>
    );
}

function ProjectDescription(props: {title:string, description:string, links:string}) {
    return (
        <div className='ProjectBox'>
            <a className='ProjectTitle' href={props.links}>{props.title}</a>
            <div className='ProjectDescription'>{props.description}</div>
        </div>
    );
}

function ProjectGrid(props: {numberOfProjects: number, projectImages: string[], currentProject: number, setCurrentProject: Function}) {
    var projects: any = [];

    for (let i = 0; i < props.numberOfProjects; i++) {
        const image = props.projectImages[i];
        if(i===props.currentProject){
            projects.push(
                <ProjectImage key={i} index={i} url={image} setCurrentProject={props.setCurrentProject} isSelected={true}/>
            )
        }
        else {
            projects.push(
                <ProjectImage key={i} index={i} url={image} setCurrentProject={props.setCurrentProject} isSelected={false}/>
            )
        }
    }

    return (
        <div className='ProjectGrid'>
            {projects}
        </div>
    );
}
