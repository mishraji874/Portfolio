import solana from '../assets/solana-log-app.png';
import timeless from '../assets/timeless-nft.gif';
import dsocial from '../assets/dsocial.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Solana Blog App</h3>
                    <img src={solana} alt="Solana Blog App" />
                    <p>Solana Blog App is just a blog app which is based
                        on the decentralized way in which the user first have to 
                        connect the metamask and then the user can post their blog.
                    </p>
                    <a href="https://github.com/mishraji874/Solana-Blog-App/tree/master" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Timeless NFT Marketplace</h3>
                    <img src={timeless} alt="Timeless NFT Marketplace" />
                    <p>Timeless NFT Marketplace is a NFT marketplace in which the user
                        can create, buy and sell NFT's. 
                    </p>
                    <a href="https://github.com/mishraji874/Timeless-NFT-Marketplace/tree/master" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Dsocial Web App</h3>
                    <img src={dsocial} alt="Dinosaur Game" />
                    <p>Dsocial is a social media website where people can post whatever they wants.
                    </p>
                    <a href="https://github.com/mishraji874/Dsocial" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;