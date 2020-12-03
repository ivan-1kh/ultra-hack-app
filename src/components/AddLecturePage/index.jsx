import React from "react";
import AddQuestion from "../AddQuestion";
import "./style.css";

export default (props) => {
    const [questions, setQuestions] = React.useState([
        <AddQuestion />
    ])

    const handleClick = (e) => {
            var fileInput = document.querySelector('#file-upload');
            var fileUrl = window.URL.createObjectURL(fileInput.files[0]);
            document.querySelector("#video-container").setAttribute("src", fileUrl);
    }

    return <div className="mainContainer">
        <input
            id="file-upload"
            type="file"
            onChange={handleClick}
        ></input>
        <video
            controls
            id="video-container"
            width="640"
            height="264"
            type="video/mp4"
        />
        <div id="questions">
            {questions.map((item) => item)}
        </div>
        <div className="plus" onClick={() => {
            setQuestions((prev) => {
                return prev.concat([<AddQuestion />])
            })
        }}>
            +
        </div>
    </div>;
};
