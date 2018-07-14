import React from "react";
import { Link } from "react-router-dom";
import { Glyphicon, Button } from "react-bootstrap";
import "./HomeButton.css"
import { login, logout, isLoggedIn } from '../../../utils/AuthService.js';


const HomeButton = () => (
    <div>
        <Link to="/home">
            <Button bsSize="large">
                <Glyphicon glyph="home" />
            </Button>
        </Link>
        <span>
            {
                (isLoggedIn()) ? (<button className="btn btn-danger log" onClick={() => logout()}>Log Out</button>) : (<button className="btn btn-info log" onClick={() => login()}>Log In</button>)
            }
        </span>
    </div>
);

export default HomeButton;