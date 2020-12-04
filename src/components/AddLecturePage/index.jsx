import React from "react";
import AddQuestion from "../AddQuestion";
import "./style.css";

export default (props) => {
    const [questions, setQuestions] = React.useState([<AddQuestion />]);

    const handleClick = (e) => {
        var fileInput = document.querySelector("#file-upload");
        var fileUrl = window.URL.createObjectURL(fileInput.files[0]);
        document.querySelector("#video-container").setAttribute("src", fileUrl);
    };

    return (
        <html lang='en'>
            <head>
                <meta charset='utf-8' />
                <meta http-equiv='X-UA-Compatible' content='IE=edge' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta name='description' content='' />
                <meta name='author' content='' />
                <link rel='icon' href='favicon.png' />
                <title>Courses Video | Upload Edit Video Page</title>
                <link href='bootstrap/css/bootstrap.min.css' rel='stylesheet' />
                <link href='css/style.css' rel='stylesheet' />
                <link href='css/font-awesome.min.css' rel='stylesheet' />
                <link href='css/font-circle-video.css' rel='stylesheet' />
                <link
                    href='https://fonts.googleapis.com/css?family=Hind:400,300,500,600,700|Hind+Guntur:300,400,500,700'
                    rel='stylesheet'
                    type='text/css'
                />
            </head>
            <body className='light'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='navbar-container'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-lg-3 col-sm-10 col-xs-10'>
                                        <ul className='list-inline menu'>
                                            <li>
                                                <a href='index.html'>Home</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='visible-xs visible-sm clearfix'></div>
                                    <div className='col-lg-6 col-sm-8 col-xs-12'>
                                        <form action='search.html' method='post'>
                                            <div className='topsearch'>
                                                <div className='input-group'>
                                                    <span className='input-group-addon' id='sizing-addon2'>
                                                        <i className='fa fa-search'></i>
                                                    </span>
                                                    <input
                                                        type='text'
                                                        className='form-control'
                                                        placeholder='Search'
                                                        aria-describedby='sizing-addon2'
                                                    />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className='visible-xs clearfix'></div>
                                    <div className='col-lg-2 col-sm-4  col-xs-8'>
                                        <div className='avatar pull-left'>
                                            <img src='images/avatar.png' alt='avatar' />
                                            <span className='status'></span>
                                        </div>
                                        <div className='selectuser pull-left'>
                                            <div className='btn-group pull-right dropdown'>
                                                <button
                                                    className='btn btn-default dropdown-toggle'
                                                    type='button'
                                                    id='dropdownMenu1'
                                                    data-toggle='dropdown'
                                                    aria-haspopup='true'
                                                    aria-expanded='true'
                                                >
                                                    Mhemmad <span className='caret'></span>
                                                </button>
                                                <ul className='dropdown-menu'>
                                                    <li>
                                                        <a href='login.html'>Login</a>
                                                    </li>
                                                    <li>
                                                        <a href='signup.html'>Sign up</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className='row'></div>
                </div>

                <div className='content-wrapper upload-page edit-page'>
                    <div className='container-fluid u-details-wrap'>
                        <div className='row'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <div className='mainContainer'>
                                                <input id='file-upload' type='file' onChange={handleClick}></input>
                                                <video
                                                    controls
                                                    id='video-container'
                                                    width='1200'
                                                    height='400'
                                                    type='video/mp4'
                                                />
                                                <div id='questions' className='questions'>
                                                    {questions.map((item) => item)}
                                                    <div
                                                        className='plus'
                                                        onClick={() => {
                                                            setQuestions((prev) => {
                                                                return prev.concat([<AddQuestion />]);
                                                            });
                                                        }}
                                                    >
                                                        <img className='plusIcon' src='./plus.png' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-4 '></div>
                        </div>
                    </div>
                </div>
                <script src='js/jquery.min.js'></script>
                <script src='bootstrap/js/bootstrap.min.js'></script>
                <script src='js/custom.js'></script>
            </body>
        </html>
    );
};
