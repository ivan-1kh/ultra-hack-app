import React from "react";

export default (props) => {
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
            <body class='light'>
                <div class='container-fluid'>
                    <div class='row'>
                        <div class='navbar-container'>
                            <div class='container'>
                                <div class='row'>
                                    <div class='col-lg-3 col-sm-10 col-xs-10'>
                                        <ul class='list-inline menu'>
                                            <li>
                                                <a href='index.html'>Home</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class='visible-xs visible-sm clearfix'></div>
                                    <div class='col-lg-6 col-sm-8 col-xs-12'>
                                        <form action='search.html' method='post'>
                                            <div class='topsearch'>
                                                <div class='input-group'>
                                                    <span class='input-group-addon' id='sizing-addon2'>
                                                        <i class='fa fa-search'></i>
                                                    </span>
                                                    <input
                                                        type='text'
                                                        class='form-control'
                                                        placeholder='Search'
                                                        aria-describedby='sizing-addon2'
                                                    />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class='visible-xs clearfix'></div>
                                    <div class='col-lg-2 col-sm-4  col-xs-8'>
                                        <div class='avatar pull-left'>
                                            <img src='images/avatar.png' alt='avatar' />
                                            <span class='status'></span>
                                        </div>
                                        <div class='selectuser pull-left'>
                                            <div class='btn-group pull-right dropdown'>
                                                <button
                                                    class='btn btn-default dropdown-toggle'
                                                    type='button'
                                                    id='dropdownMenu1'
                                                    data-toggle='dropdown'
                                                    aria-haspopup='true'
                                                    aria-expanded='true'
                                                >
                                                    Mhemmad <span class='caret'></span>
                                                </button>
                                                <ul class='dropdown-menu'>
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
                <div class='container-fluid'>
                    <div class='row'></div>
                </div>
                <div class='content-wrapper upload-page edit-page'>
                    <div class='container-fluid u-details-wrap'>
                        <div class='row'>
                            <div class='container'>
                                <div class='row'>
                                    <div class='col-lg-12'>
                                        <div class='u-details'>
                                            <div class='row'>
                                                <div class='col-lg-12 ud-caption'>Upload Details</div>
                                                <div class='col-lg-2'>
                                                    <img
                                                        src='/Screenshot_1.png'
                                                        style={{
                                                            width: "180px",
                                                            height: "140px",
                                                            borderRadius: "5px",
                                                        }}
                                                    />
                                                </div>
                                                <div class='col-lg-10'>
                                                    <div class='u-title'>Video Title</div>
                                                    <div class='u-size'>102.6 MB . 2:13 MIN Remaining</div>
                                                    <div class='u-progress'>
                                                        <div class='progress'>
                                                            <div
                                                                class='progress-bar'
                                                                role='progressbar'
                                                                aria-valuenow='35'
                                                                aria-valuemin='0'
                                                                aria-valuemax='100'
                                                                style={{ width: "100%" }}
                                                            >
                                                                <span class='sr-only'>100% Complete</span>
                                                            </div>
                                                        </div>
                                                        <div class='u-close'>
                                                            <a href='#'>
                                                                <i class='cvicon-cv-cancel'></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class='u-desc'>Video Uploaded!!</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                    </div>
                    <div class='container'>
                        <div class='row'>
                            <div class='col-lg-12 '>
                                <div class='u-form'>
                                    <div class='row'>
                                        <div class='col-lg-12'>
                                            <div class='form-group'>
                                                <label for='e1'>Video Title</label>
                                                <input
                                                    type='text'
                                                    class='form-control'
                                                    id='e1'
                                                    placeholder='Video title'
                                                />
                                            </div>
                                        </div>
                                        <div class='col-lg-12'>
                                            <div class='form-group'>
                                                <label for='e2'>About</label>
                                                <textarea class='form-control' name='e2' id='e2' rows='3'>
                                                    Description
                                                </textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='row'>
                                        <div class='col-lg-3'>
                                            <div class='form-group'>
                                                <label for='e3'>Course(your courses)</label>
                                                <select class='form-control' id='e3'>
                                                    <option>Aligibra 1</option>
                                                    <option>Hidva 1</option>
                                                    <option>Aligibra 2</option>
                                                    <option>Hidva 2</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class='col-lg-3'>
                                            <div class='form-group'>
                                                <label for='e4'>Privacy Settings</label>
                                                <select class='form-control' id='e4'>
                                                    <option>Public</option>
                                                    <option>Private</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class='col-lg-3'>
                                            <div class='form-group'>
                                                <label for='e5'>Monetize</label>
                                                <select class='form-control' id='e5'>
                                                    <option>Yes</option>
                                                    <option>No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class='col-lg-3'>
                                            <div class='form-group'>
                                                <label for='e6'>Paid Video</label>
                                                <select class='form-control' id='e6'>
                                                    <option>Yes</option>
                                                    <option>No</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class='u-area'>
                                    <form action='/addlecture' method='get'>
                                        <button class='btn btn-primary u-btn'>Advance</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div class='container-fluid'>
                        <div class='row'>
                            <div class='container padding-def'>
                                <div class='col-lg-7  col-sm-7 col-xs-12'>
                                    <div class='f-links'>
                                        <ul class='list-inline'>
                                            <li>
                                                <a href='#'>UltraHack 2020</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class='delimiter'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <script src='js/jquery.min.js'></script>
                <script src='bootstrap/js/bootstrap.min.js'></script>
                <script src='js/custom.js'></script>
            </body>
        </html>
    );
};
