import './home.css';
import AboutMe from './aboutme';
import Projects from './projects';

export default function Home() {
    return (
        <div className="Home">
            <AboutMe/>
            <Projects/>
        </div>
    );
}