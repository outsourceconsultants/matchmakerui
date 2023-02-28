import React from 'react';
import { Nav , NavLink, NavMenu} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/search">
                        Search
                    </NavLink>
                    <NavLink to="/history">
                        History
                    </NavLink>
                    <NavLink to="/results">
                        Results
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;