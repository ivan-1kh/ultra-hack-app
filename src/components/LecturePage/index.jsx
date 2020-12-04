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
                <title>Course Video | Single video</title>
                <link href='bootstrap/css/bootstrap.min.css' rel='stylesheet' />
                <link
                    rel='stylesheet'
                    href='js/vendor/player/johndyer-mediaelement-89793bc/build/mediaelementplayer.min.css'
                />
                <link href='css/style.css' rel='stylesheet' />
                <link href='css/font-awesome.min.css' rel='stylesheet' />
                <link href='css/font-circle-video.css' rel='stylesheet' />
                <link
                    href='https://fonts.googleapis.com/css?family=Hind:400,300,500,600,700|Hind+Guntur:300,400,500,700'
                    rel='stylesheet'
                    type='text/css'
                />
            </head>

            <body className='single-video light'>
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
                                            <li>
                                                <a href='index.html'>Courses</a>
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
                                    <div className='col-lg-2 col-sm-4 col-xs-8'>
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
                                                    Mhemmad
                                                    <span className='caret'></span>
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
                                        <div className='clearfix'></div>
                                    </div>
                                </div>
                                <div>
                                    <a href='upload.html'>
                                        <div className='upload-button'>
                                            <i className='cv cvicon-cv-upload-video'></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid'></div>
                <div className='content-wrapper'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-8 col-xs-12 col-sm-12'>
                                <div className='sv-video'>
                                    <span className='mejs-offscreen'>Video Player</span>
                                    <div
                                        id='mep_0'
                                        className='mejs-container svg mejs-video'
                                        tabindex='0'
                                        role='application'
                                        aria-label='Video Player'
                                        style={{ width: "769px", height: "432px" }}
                                    >
                                        <div className='mejs-inner'>
                                            <div className='mejs-mediaelement'>
                                                <video
                                                    poster='images/single-video.png'
                                                    style={{ width: "100%", height: "100%" }}
                                                    width='769'
                                                    height='432'
                                                    src='videos/video-1.mp4'
                                                >
                                                    <source
                                                        src='videos/video-1.mp4'
                                                        type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                                                    />
                                                </video>
                                            </div>
                                            <div className='mejs-layers'>
                                                <div
                                                    className='mejs-poster mejs-layer'
                                                    style={{
                                                        backgroundImage: "url('images/single-video.png')",
                                                        width: "100%",
                                                        height: "100%",
                                                    }}
                                                >
                                                    <img
                                                        width='100%'
                                                        height='100%'
                                                        alt=''
                                                        src='images/single-video.png'
                                                    />
                                                </div>
                                                <div
                                                    className='mejs-overlay mejs-layer'
                                                    style={{ width: "100%", height: "100%", display: "none" }}
                                                >
                                                    <div className='mejs-overlay-loading'>
                                                        <span></span>
                                                    </div>
                                                </div>
                                                <div
                                                    className='mejs-overlay mejs-layer'
                                                    style={{ width: "100%", height: "100%", display: "none" }}
                                                >
                                                    <div className='mejs-overlay-error'></div>
                                                </div>
                                                <div
                                                    className='mejs-overlay mejs-layer mejs-overlay-play'
                                                    style={{ width: "100%", height: "100%" }}
                                                >
                                                    <div
                                                        className='mejs-overlay-button'
                                                        role='button'
                                                        aria-label='Play'
                                                        aria-pressed='false'
                                                    ></div>
                                                </div>
                                            </div>
                                            <div className='mejs-controls'>
                                                <div className='mejs-button mejs-playpause-button mejs-play' style={{}}>
                                                    <button
                                                        type='button'
                                                        aria-controls='mep_0'
                                                        title='Play'
                                                        aria-label='Play'
                                                    ></button>
                                                </div>
                                                <div className='mejs-time-rail' style={{ width: "565px" }}>
                                                    <span
                                                        className='mejs-time-total mejs-time-slider'
                                                        aria-label='Time Slider'
                                                        aria-valuemin='0'
                                                        aria-valuemax='NaN'
                                                        aria-valuenow='0'
                                                        aria-valuetext='00:00'
                                                        role='slider'
                                                        tabindex='0'
                                                        style={{ width: "555px" }}
                                                    >
                                                        <span
                                                            className='mejs-time-buffering'
                                                            style={{ display: "none" }}
                                                        ></span>
                                                        <span
                                                            className='mejs-time-loaded'
                                                            style={{ width: "554px" }}
                                                        ></span>
                                                        <span
                                                            className='mejs-time-current'
                                                            style={{ width: "0px" }}
                                                        ></span>
                                                        <span
                                                            className='mejs-time-handle'
                                                            style={{ left: "-5px" }}
                                                        ></span>
                                                        <span
                                                            className='mejs-time-float'
                                                            style={{ display: "none", left: "299.625px" }}
                                                        >
                                                            <span className='mejs-time-float-current'>02:28</span>
                                                            <span className='mejs-time-float-corner'></span>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className='mejs-time' role='timer' aria-live='off' style={{}}>
                                                    <span className='mejs-currenttime'>00:00</span>
                                                    <span> | </span>
                                                    <span className='mejs-duration'>04:35</span>
                                                </div>
                                                <div className='mejs-button mejs-volume-button mejs-mute' style={{}}>
                                                    <button
                                                        type='button'
                                                        aria-controls='mep_0'
                                                        title='Mute'
                                                        aria-label='Mute'
                                                    ></button>
                                                </div>
                                                <a
                                                    href='javascript:void(0);'
                                                    className='mejs-horizontal-volume-slider mejs-mute'
                                                    aria-label='Volume Slider'
                                                    aria-valuemin='0'
                                                    aria-valuemax='100'
                                                    aria-valuenow='80'
                                                    aria-valuetext='80%'
                                                    role='slider'
                                                    tabindex='0'
                                                    style={{}}
                                                >
                                                    <span className='mejs-offscreen'>
                                                        Use Up/Down Arrow keys to increase or decrease volume.
                                                    </span>
                                                    <div className='mejs-horizontal-volume-total' style={{}}></div>
                                                    <div
                                                        className='mejs-horizontal-volume-current'
                                                        style={{ width: "40px" }}
                                                    ></div>
                                                    <div
                                                        className='mejs-horizontal-volume-handle'
                                                        style={{ left: "28px" }}
                                                    ></div>
                                                </a>
                                                <div className='mejs-button mejs-fullscreen-button' style={{}}>
                                                    <button
                                                        type='button'
                                                        aria-controls='mep_0'
                                                        title='Fullscreen'
                                                        aria-label='Fullscreen'
                                                    ></button>
                                                </div>
                                            </div>
                                            <div className='mejs-clear'></div>
                                        </div>
                                    </div>
                                </div>
                                <h1>
                                    <a href='#'>Analyzing the Mass Effect: Physics 1 part 1</a>
                                </h1>
                                <div className='author'>
                                    <a href='#'>
                                        <img src='images/channel-user.png' alt='' className='sv-avatar' />
                                    </a>
                                    <div className='sv-name'>
                                        <div>
                                            <a href='#'>UltraHack</a> . 52 Videos
                                        </div>
                                    </div>
                                    <div className='sv-views'>
                                        <div className='sv-views-count'>2,729,347 views</div>
                                        <div className='sv-views-progress'>
                                            <div className='sv-views-progress-bar'></div>
                                        </div>
                                        <div className='sv-views-stats'>
                                            <span className='percent'>95%</span>
                                            <span className='green'>
                                                <span className='circle'></span> 39,852
                                            </span>
                                            <span className='grey'>
                                                <span className='circle'></span> 852
                                            </span>
                                        </div>
                                    </div>
                                    <div className='clearfix'></div>
                                </div>
                                <div className='info'>
                                    <h4>About :</h4>
                                    <p>
                                        Here is Descripton Part <br />
                                        Bla bla bla bla bla bla bla
                                        <br />
                                        Ultra Hack 2020 Ultra Hack 2020 Ultra Hack 2020 Ultra Hack 2020
                                    </p>

                                    <div className='comments'>
                                        <div className='reply-comment'>
                                            <div className='rc-ava'>
                                                <a href='#'>
                                                    <img src='images/ava5.png' alt='' />
                                                </a>
                                            </div>
                                            <div className='rc-comment'>
                                                <form action='#' method='post'>
                                                    <textarea rows='3'>Share what you think?</textarea>
                                                    <button type='submit'>
                                                        <i className='cv cvicon-cv-add-comment'></i>
                                                    </button>
                                                </form>
                                            </div>
                                            <div className='clearfix'></div>
                                        </div>
                                        <div className='comments-list'>
                                            <div className='cl-header'>
                                                <div className='c-nav'>
                                                    <ul className='list-inline'>
                                                        <li>
                                                            <a href='#' className='active'>
                                                                Popular Comments
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href='#'>Newest Comments</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='cl-comment'>
                                                <div className='cl-avatar'>
                                                    <a href='#'>
                                                        <img src='images/ava8.png' alt='' />
                                                    </a>
                                                </div>
                                                <div className='cl-comment-text'>
                                                    <div className='cl-name-date'>
                                                        <a href='#'>BOWTZ pros</a> . 1 week ago
                                                    </div>
                                                    <div className='cl-text'>
                                                        Really great story. You're doing a great job. Keep it up pal.
                                                    </div>
                                                    <div className='cl-meta'>
                                                        <span className='green'>
                                                            <span className='circle'></span> 121
                                                        </span>
                                                        <span className='grey'>
                                                            <span className='circle'></span> 2
                                                        </span>{" "}
                                                        .<a href='#'>Reply</a>
                                                    </div>
                                                    <div className='cl-replies'>
                                                        <a href='#'>
                                                            View all 1 replies
                                                            <i className='fa fa-chevron-down' aria-hidden='true'></i>
                                                        </a>
                                                    </div>
                                                    <div className='cl-flag'>
                                                        <a href='#'>
                                                            <i className='cv cvicon-cv-flag'></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className='clearfix'></div>
                                            </div>
                                            <div className='cl-comment-reply'>
                                                <div className='cl-avatar'>
                                                    <a href='#'>
                                                        <img src='images/ava7.png' alt='' />
                                                    </a>
                                                </div>
                                                <div className='cl-comment-text'>
                                                    <div className='cl-name-date'>
                                                        <a href='#'>kingPIN</a> . 6 days ago
                                                    </div>
                                                    <div className='cl-text'>Ultra Hack 2020....</div>
                                                    <div className='cl-meta'>
                                                        <span className='green'>
                                                            <span className='circle'></span> 70
                                                        </span>
                                                        <span className='grey'>
                                                            <span className='circle'></span> 9
                                                        </span>{" "}
                                                        .<a href='#'>Reply</a>
                                                    </div>
                                                </div>
                                                <div className='clearfix'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-xs-12 col-sm-12'>
                                <div className='caption'>
                                    <div className='left'>
                                        <a href='#'>Up Next</a>
                                    </div>
                                    <div className='right'>
                                        <a href='#'>
                                            Autoplay <i className='cv cvicon-cv-btn-off'></i>
                                        </a>
                                    </div>
                                    <div className='clearfix'></div>
                                </div>
                                <div className='list'>
                                    <div className='h-video row'>
                                        <div className='col-lg-6 col-sm-6'>
                                            <div className='v-img'>
                                                <a href='single-video-tabs.html'>
                                                    <img src='images/sv-1.png' alt='' />
                                                </a>
                                                <div className='time'>15:19</div>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-sm-6'>
                                            <div className='v-desc'>
                                                <a href='single-video-tabs.html'>
                                                    Analyzing the Mass Effect: Physics 1 part 2
                                                </a>
                                            </div>
                                            <div className='v-views'>2,729,347 views</div>
                                            <div className='v-percent'>
                                                <span className='v-circle'></span> 55%
                                            </div>
                                        </div>
                                        <div className='clearfix'></div>
                                    </div>
                                    <div className='h-video row'>
                                        <div className='col-lg-6 col-sm-6'>
                                            <div className='v-img'>
                                                <a href='single-video-tabs.html'>
                                                    <img src='images/sv-2.png' alt='' />
                                                </a>
                                                <div className='time'>4:23</div>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-sm-6'>
                                            <div className='v-desc'>
                                                <a href='single-video-tabs.html'>
                                                    Analyzing the Mass Effect: Physics 1 part 3
                                                </a>
                                            </div>
                                            <div className='v-views'>429,347 views</div>
                                            <div className='v-percent'>
                                                <span className='v-circle'></span> 79%
                                            </div>
                                        </div>
                                        <div className='clearfix'></div>
                                    </div>
                                    <div className='h-video row'>
                                        <div className='col-lg-6 col-sm-6'>
                                            <div className='v-img'>
                                                <a href='single-video-tabs.html'>
                                                    <img src='images/sv-3.png' alt='' />
                                                </a>
                                                <div className='time'>7:18</div>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-sm-6'>
                                            <div className='v-desc'>
                                                <a href='single-video-tabs.html'>
                                                    Analyzing the Mass Effect: Physics 1 part 4
                                                </a>
                                            </div>
                                            <div className='v-views'>630,347 views</div>
                                            <div className='v-percent'>
                                                <span className='v-circle'></span> 83%
                                            </div>
                                        </div>
                                        <div className='clearfix'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='container padding-def'>
                                <div className='col-lg-7 col-sm-7 col-xs-12'>
                                    <div className='f-links'>
                                        <ul className='list-inline'>
                                            <li>
                                                <a href='#'>UltraHack 2020</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <script src='js/jquery.min.js'></script>
                <script src='bootstrap/js/bootstrap.min.js'></script>
                <script src='js/vendor/player/johndyer-mediaelement-89793bc/build/mediaelement-and-player.min.js'></script>
                <script src='js/custom.js'></script>
            </body>
        </html>
    );
};
