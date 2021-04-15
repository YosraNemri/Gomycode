import React from "react";
import ProfilePicture from "./Component/ProfilePicture";
import FullName from "./Component/FullName";
import Address from "./Component/Address";
import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <FullName />
            <ProfilePicture />
            <Address />
        </div>
    );
}

export default App;
