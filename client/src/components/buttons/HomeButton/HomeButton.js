import React from "react";
import { Link } from "react-router-dom";
import { Glyphicon, Button } from "react-bootstrap";
import "./HomeButton.css"


const HomeButton = () => (
    <div>
        <Link to="/home">
            <Button bsSize="large">
                <Glyphicon glyph="home" />
            </Button>
        </Link>

    </div>
);

export default HomeButton;