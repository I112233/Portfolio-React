// const Navbar = ({ onNavigate }) => {
//     return (
//         <nav classNameName="navbar">
//             <ul classNameName="navbar-list">
//                 <li onClick={() => onNavigate('about')} classNameName="navbar-link">About</li>
//                 <li onClick={() => onNavigate('resume')} classNameName="navbar-link">Resume</li>
//                 <li onClick={() => onNavigate('portfolio')} classNameName="navbar-link">Portfolio</li>
//                 <li onClick={() => onNavigate('blog')} classNameName="navbar-link">Blog</li>
//                 <li onClick={() => onNavigate('contact')} classNameName="navbar-link">Contact</li>
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;

import './Navbar.css';

const Navbar = ({ onNavigate }) => {
    return (
        <main> <nav className="navbar">
            <ul className="navbar-list">
                <li onClick={() => onNavigate('about')} className="navbar-item"><button className="navbar-link active" data-nav-link>About</button></li>
                {/* <li onClick={() => onNavigate('resume')} className="navbar-item"><button className="navbar-link" data-nav-link>Resume</button></li> */}
                <li onClick={() => onNavigate('portfolio')} className="navbar-item"><button className="navbar-link" data-nav-link>Portfolio</button></li>
                <li onClick={() => onNavigate('contact')} className="navbar-item"><button className="navbar-link" data-nav-link>Contact</button></li>
            </ul>
        </nav ></main>

    );
};

export default Navbar;