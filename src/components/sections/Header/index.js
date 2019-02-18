import React, { PureComponent } from 'react';
import {
    withRouter,
    NavLink,
} from 'react-router-dom';

@withRouter
export default class Header extends PureComponent {
    render() {
        return (
            <header>
                Garderon
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Main</NavLink>
                        </li>
                        <li>
                            <NavLink to="/profile/1">Profile</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}
