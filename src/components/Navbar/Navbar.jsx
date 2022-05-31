import './navbar.css';
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import NavToggle from "../NavToggle/NavToggle";

export default function Navbar() {
    return (
        <>
            {/* Menu btn to toggle navbar on mobile */}
            <NavToggle />

            <header className="primary-header" data-visible="false">
                <div className="logo">
                    <svg id="logo-svg" xmlns="http://www.w3.org/2000/svg" width="931.31" height="715.26" viewBox="0 0 931.31 715.26">
                        <g id="letters">
                            <path d="M559.24,398.12c0,29.37,0,65.9,11.93,94.21,12.53,31.28,39.49,47.24,80.11,47.24,38.77,0,66.05-17.26,81.06-51.28l0-.11.06-.13c8.2-20.11,11.16-42.84,12.24-63.15a9.61,9.61,0,0,1,9.62-9.09H921.69a9.61,9.61,0,0,1,9.62,9.79c-2,88-15.53,141.56-75,208-67,73.69-164.3,81.67-207,81.67-86.65,0-148.1-27.83-201-82.69-46.51-48.31-75.34-104.37-75.34-234.45l31.88-159.67" />
                            <path d="M559.24,606.65V317.14c0-29.37,0-65.9,11.93-94.21,12.53-31.29,39.49-47.24,80.11-47.24,38.77,0,66.05,17.26,81.06,51.28l0,.11.06.13c8.2,20.11,11.16,42.84,12.24,63.15a9.6,9.6,0,0,0,9.62,9.08H921.69a9.6,9.6,0,0,0,9.62-9.78c-2-88-15.53-141.56-75-208C789.26,8,692,0,649.25,0c-86.65,0-148.1,27.82-201,82.69-46.51,48.3-75.34,104.37-75.34,234.45V543.08" />
                            <path d="M558.89,416.32c0,130.08-29.34,167.94-75.85,216.25-52.88,54.86-114.33,82.69-201,82.69-42.71,0-140-8-207-81.67-59.51-66.43-73-120-75-208a9.62,9.62,0,0,1,9.62-9.79H177a9.6,9.6,0,0,1,9.61,9.09c1.09,20.31,4.05,43,12.24,63.15l.06.13,0,.11c15,34,42.29,51.28,81.07,51.28,40.61,0,67.58-16,80.11-47.24,11.92-28.31,12.94-46.64,12.94-76" />
                        </g>
                        <circle id="circle" cx="279.06" cy="88.9" r="88.37" fill="#ff0a52" />
                    </svg>
                </div>

                <nav className="primary-navigation">
                    <ul>
                        <li className="nav-item">
                            <a href="#top">
                                Inicio
                                <div className='line'></div>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#projects">
                                Proyectos
                                <div className='line'></div>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#about">
                                Acerca
                                <div className='line'></div>
                            </a>
                        </li>

                        <li className="nav-item">
                            <ThemeToggle />
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}