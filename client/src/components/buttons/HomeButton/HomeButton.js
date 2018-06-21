import React from "react";
import { Link } from "react-router-dom";
import { Glyphicon, Button } from "react-bootstrap";
import "./HomeButton.css"

const HomeButton = () => (
    <Link to="/home">
        <Button bsSize ="large">
            <Glyphicon glyph="home" />
        </Button>
    </Link>
);

export default HomeButton;