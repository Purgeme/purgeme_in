import './aboutme.css';
// import { FaGithub } from 'react-icons/fa';

export default function AboutMe() {
    return (
        <div className="AboutMe">
            <Profile/>
            <Resume/>
            <Description/>
        </div>
    );
}

function Links() {
    return (
        <div className='LinksBackground'>
            <a href='https://www.github.com/purgeme'>
                <img className='LinkLogo' src={'github.svg'} alt='Github'/>
            </a>
            <a href='https://www.linkedin.com/in/parvesh-kumar-3b7389217/'>
                <img className='LinkLogo' src={'linkedin.svg'} alt='LinkedIn'/>
            </a>
        </div>
    );
}

function Profile() {
    return (
        <div className='ProfilePicSection'>
            <img className='ProfilePic' src={'profile.jpg'} alt='Profile'></img>
            <Links/>
        </div>
    );
}

function Resume() {
    return (
        <a className='ResumeButton' href='https://drive.google.com/file/d/1dXBmSRCKBoXNSJCmy6CpHcLvwHgOlkl5/view?usp=sharing'>
            RESUME
        </a>
    );
}

function Description() {
    return (
        <div className='ProfileDescription'>
            Hi, I am Parvesh.
            <p>
                I am a software developer that is enthusiastic about tinkering with software and hardware.
            </p>
            P.S. I am not really a front end developer.
            <a className='MailTo' href='mailto:parveshkumarbaloda@gmail.com'>
                <img className='MailToLogo' src={'email.svg'} alt='github'/>
            </a>
        </div>
    );
}
