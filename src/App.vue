<script>
// import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';

var numProjects = 3;
var selectedProject = ref(0);
var projects = [
    {
        index: 0,
        image: "/src/assets/gl_paint.png",
        link: "https://github.com/purgeme/GL_Paint",
        title: "GL Paint",
        description: `
            A simple paint application written in C++ using OpenGL.
            It provides basic functionalities like different shaped cursors and erasers, ability to select different colors as well as to save the image with keyboard shortcuts.
            To draw, click the left mouse button and move the mouse, release to stop drawing.
            Multiple brush shapes are accessible with right click menu.
            The current brush color is displayed on the left side. 
        `
    },
    {
        index: 1,
        image: "/src/assets/mediapipe_cpp_icon.png",
        title: "Mediapipe Library",
        link: "https://github.com/purgeme/mediapipe_cpp_lib",
        description: `
        Mediapipe is a project by Google, it provides solutions for different types of tracking.
        This is basically a c++ library which exposes functions to utilize that library.
        The main purpose is to simplify the usage of mediapipe by abstracting a lot of stuff and to be able to use mediapipe in other projects which may use different build systems.
        With this it is also possible to build plugins/modules for game engines easily allowing use of tracking features inside games/applications built using them.
        For now, this has only been built and tested in Linux, more specifically Manjaro KDE ( Though the build and usage process is same for every distribution).
        Windows should also work and a lot of things should directly translate with the only major difference being the file extension from .so ( Linux ) to .dll ( Windows ) but it hasn’t yet been tested in it.
        `
    },
    {
        index: 2,
        image: "/src/assets/mediapipe_godot_icon.png",
        title: "Godot Mediapipe Extension",
        link: "https://github.com/purgeme/godot_mediapipe_module",
        description: `
        This is a module for the Godot game engine which allows using mediapipe solutions inside the game engine.
        With this module it is possible to use mediapipe solutions inside Godot.
        Currently only tracking solutions which return a NormalizedLandmarksList, like Holistic tracking.
        Currently only Linux is supported and tested, it can be built for windows if you have the required knowledge.

        `
    }
];

export default {
    setup() {
        selectedProject = ref(0)
        return {
            selectedProject
        }
    },
    data() {
        return {
            projects
        }
    },
    methods: {
        selectProject(index) {
            selectedProject.value = index;
        },
        openInNewTab(url) {
            window.open(url, '_blank');
        }
    }
}
</script>

<template>
    <img id="testimg" src="@/assets/bg0.jpg"/>
    <div id="home">
        <div id="profile">
            <div id="profile-top">
                <div id="profile-image">
                    <img src="@/assets/profile.jpg" alt="logo.svg">
                </div>
                <div id="profile-links">
                    <img class="profile-links-logo" v-on:click="openInNewTab('https://www.github.com/purgeme')" src="@/assets/github.svg"/>
                    <img class="profile-links-logo" v-on:click="openInNewTab('https://www.linkedin.com/in/parvesh-kumar-3b7389217/')" src="@/assets/linkedin.svg"/>
                </div>
            </div>
            <button id="profile-resume-button" v-on:click="openInNewTab('https://drive.google.com/file/d/1dXBmSRCKBoXNSJCmy6CpHcLvwHgOlkl5/view?usp=sharing')" v-on:mouseover="()=>{}">
                Hire Me!
            </button>
            <div id="profile-description">
                <p>
                    Hi, I am Parvesh.
                </p>
                <br/>
                <p>
                    I am a software developer that is enthusiastic about tinkering with software and hardware.
                </p>
                <br/>
                <p>
                    I love making things and finding solutions to problems no one has.
                </p>
            </div>
        </div>

        <div id="projects">
            <div id="projects-title">
                Projects
            </div>
            <div id="projects-selector">
                <button v-for="project in projects" class="projects-project" v-on:click="selectProject(project.index)">
                    <div>
                        <img v-bind:src="project.image" alt="test"/>
                    </div>
                    <div class="projects-project-title">
                        {{ project.title }}
                    </div>
                </button>
            </div>
            <div id="projects-description">
                <button id="project-title" v-on:click="openInNewTab(projects[selectedProject].link)">{{ projects[selectedProject].title }}</button>
                <div id="project-description">{{  projects[selectedProject].description }}</div>
            </div>
        </div>
    </div>
</template>

<style>
    #testimg {
        position: absolute;
        visibility: hidden;
        width: 100%;
        height: 100%;
    }
    #home {
        height: 100%;
        width: 100%;
        padding: 20px;

        display: flex;
        align-content: stretch;
        flex-direction: row;
    }

    #profile {
        flex: 1;

        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);

        border: 8px var(--border-type);

        border-color: var(--border-color);

        display: flex;
        flex-direction: column;
    }
    #profile-top {
        flex: 3;

        border: var(--border-type);
        border-width: 0 0 0 0;

        border-color: var(--border-color);

        display: flex;
        flex-direction: row;
    }
    #profile-image {
        flex: 4;
        aspect-ratio: 1;
        max-height: 512px;
        max-width: 512px;

        background-color: var(--bg-color);
        overflow: hidden;
        background-size: contain;
    }
    #profile-image img {
        max-width: 100%;
        /* max-height: 100%; */
        background-repeat: no-repeat;
        overflow: hidden;
    }
    #profile-links {
        flex: 1;

        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);

        border: var(--border-type);
        border-width: 0 0 0 8px;

        color: var(--fg-color);
        background-color: var(--bg-color);
        border-color: var(--border-color);

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .profile-links-logo {
        max-width: 100%;
        cursor: pointer;
    }
    #profile-resume-button {
        flex: 1;
        padding: 10px;

        border: var(--border-type);
        border-width: 8px 0px 8px 0px;

        color: var(--fg-color);
        background-color: var(--bg-color-alt);
        border-color: var(--border-color);

        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        font-size: 3rem;
        text-decoration: none;
        cursor: pointer;
    }
    #profile-resume-button:hover {
        color: var(--fg-color-alt);
        background-color: var(--border-color);
    }
    #profile-description {
        flex: 4;
        padding: 10px;

        border: var(--border-type);
        border-width: 0 0 0 0;

        color: var(--fg-color);
        background-color: var(--bg-color);
        border-color: var(--border-color);

        font-size: 1.2rem;
    }

    #projects {
        flex: 3;

        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);

        border: var(--border-type);
        border-width: 8px 8px 8px 0px;

        border-color: var(--border-color);

        display: flex;
        flex-direction: column;
    }
    #projects-title {
        flex: 1;

        border: var(--border-type);
        border-width: 0 0 0 0;

        color: var(--fg-color);
        background-color: var(--bg-color-alt);
        border-color: var(--border-color);

        display: flex;
        flex-direction: column;
        font-size: 3rem;
        text-align: center;
        justify-content: center;
    }
    #projects-selector {
        flex: 3;
        height: 250px;

        border: var(--border-type);
        border-width: 8px 0px 8px 0px;

        color: var(--fg-color);
        background-color: var(--bg-color);
        border-color: var(--border-color);

        display: flex;
        flex-direction: row;
        align-items: center;
        text-align: center;
        justify-content: center;
        overflow: auto;
    }
    .projects-project {
        min-width: 25%;
        width: 25%;
        height: 100%;
        padding: 5px;

        border: var(--border-type);
        border-width: 0px 8px 0px 8px;

        color: var(--fg-color);
        background-color: var(--bg-color);
        border-color: var(--border-color);

        display: flex;
        flex-direction: column;
        align-content: stretch;
        text-align: center;
        justify-content: center;
    }
    .projects-project img {
        width: 100%;
    }
    .projects-project div {
        margin-top: auto;
    }
    .projects-project:hover {
        color: var(--fg-color-alt);
        background-color: var(--border-color);
    }
    .projects-project-title {
        padding: 10px 0 0 0;

        color: var(--fg-color);
        border-color: var(--border-color);

        font-size: 1.5rem;
    }
    #projects-description {
        flex: 3;
        padding: 10px;

        border: var(--border-type);
        border-width: 0px 0px 0px 0px;

        color: var(--fg-color);
        background-color: var(--bg-color);
        border-color: var(--border-color);
    }
    #project-title {
        width: 100%;
        padding: 10px;

        border: 4px var(--border-type);

        color: var(--fg-color);
        background-color: var(--bg-color-alt);
        border-color: var(--border-color);

        text-align: center;
        font-size: 1.5rem;
        cursor: pointer;
    }
    #project-title:hover {
        color: var(--fg-color-alt);
        background-color: var(--border-color);
    }
    #project-description {
        padding: 10px;

        color: var(--fg-color);

        font-size: 1.3rem;
    }
</style>
