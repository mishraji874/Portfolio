// Import Assets
import profile from '../assets/PHOTO.jpg';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Aditya Mishra" />

            <div className='header__content'>
                <h1>Hi, I'm Aditya Mishra</h1>
                <p>Full Stack Web Developer and Blockchain Developer</p>
                <a href="mailto: adityam874@gmail.com" className="button">Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;