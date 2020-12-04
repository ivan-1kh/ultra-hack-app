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
                <title>Courses Video | Home Page</title>
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
                        <div className='btn-color-toggle'>
                            <img src='images/icon_bulb_light.png' alt='' />
                        </div>
                        <div className='navbar-container'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-lg-1 col-sm-2 col-xs-2'>
                                        <a className='navbar-brand' href='index.html'>
                                            <img src='images/logo.svg' alt='Project name' className='logo' />
                                        </a>
                                    </div>
                                    <div className='col-lg-3 col-sm-10 col-xs-10'>
                                        <ul className='list-inline menu'>
                                            <li>
                                                <a href='#'>Courses</a>
                                            </li>
                                            <li>
                                                <a href='channel.html'>Channels</a>
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
                                                    aria-expanded='false'
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
                                    <a href='/upload'>
                                        <div className='upload-button'>
                                            <i className='cv cvicon-cv-upload-video'></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className='row'></div>
                </div>
                <div className='content-wrapper'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='content-block head-div'>
                                    <div className='cb-header'>
                                        <div className='row'>
                                            <div className='col-lg-10 col-sm-10 col-xs-8'>
                                                <ul className='list-inline'>
                                                    <li>
                                                        <a href='#' className='color-active'>
                                                            Featured Videos
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href='#'>New Videos</a>
                                                    </li>
                                                    <li>
                                                        <a href='#'>Recommended For You</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className='col-lg-2 col-sm-2 col-xs-4'>
                                                <div className='btn-group pull-right bg-clean'>
                                                    <button
                                                        type='button'
                                                        className='btn btn-default dropdown-toggle'
                                                        data-toggle='dropdown'
                                                        aria-haspopup='true'
                                                        aria-expanded='false'
                                                    >
                                                        Sort by <span className='caret'></span>
                                                    </button>
                                                    <ul className='dropdown-menu'>
                                                        <li>
                                                            <a href='#'>
                                                                <i className='cv cvicon-cv-relevant'></i> Relevant
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href='#'>
                                                                <i className='cv cvicon-cv-calender'></i> Recent
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href='#'>
                                                                <i className='cv cvicon-cv-view-stats'></i> Viewed
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href='#'>
                                                                <i className='cv cvicon-cv-star'></i> Top Rated
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href='#'>
                                                                <i className='cv cvicon-cv-watch-later'></i> Longest
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='clearfix'></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='cb-content videolist'>
                                        <div className='row'>
                                            <div className='col-lg-3 col-sm-6 videoitem'>
                                                <div className='b-video'>
                                                    <div className='v-img'>
                                                        <a href='single-video-tabs.html'>
                                                            <img src='images/video1-1.png' alt='' />
                                                        </a>
                                                        <div className='time'>3:50</div>
                                                    </div>
                                                    <div className='v-desc'>
                                                        <a href='single-video-tabs.html'>
                                                            Course Aligibra 1: Matrix rank - Elias Renawi
                                                        </a>
                                                    </div>
                                                    <div className='v-views'>
                                                        27,548 views.
                                                        <span className='v-percent'>
                                                            <span className='v-circle'></span> 78%
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-3 col-sm-6 videoitem'>
                                                <div className='b-video'>
                                                    <div className='v-img'>
                                                        <a href='single-video-tabs.html'>
                                                            <img src='images/video1-1.png' alt='' />
                                                        </a>
                                                        <div className='time'>3:50</div>
                                                    </div>
                                                    <div className='v-desc'>
                                                        <a href='single-video-tabs.html'>
                                                            Course Aligibra 1: Matrix rank - Elias Renawi
                                                        </a>
                                                    </div>
                                                    <div className='v-views'>
                                                        27,548 views.
                                                        <span className='v-percent'>
                                                            <span className='v-circle'></span> 78%
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-3 col-sm-6 videoitem'>
                                                <div className='b-video'>
                                                    <div className='v-img'>
                                                        <a href='single-video-tabs.html'>
                                                            <img src='images/video1-1.png' alt='' />
                                                        </a>
                                                        <div className='time'>3:50</div>
                                                    </div>
                                                    <div className='v-desc'>
                                                        <a href='single-video-tabs.html'>
                                                            Course Aligibra 1: Matrix rank - Elias Renawi
                                                        </a>
                                                    </div>
                                                    <div className='v-views'>
                                                        27,548 views.
                                                        <span className='v-percent'>
                                                            <span className='v-circle'></span> 78%
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-3 col-sm-6 videoitem'>
                                                <div className='b-video'>
                                                    <div className='v-img'>
                                                        <a href='single-video-tabs.html'>
                                                            <img src='images/video1-1.png' alt='' />
                                                        </a>
                                                        <div className='time'>3:50</div>
                                                    </div>
                                                    <div className='v-desc'>
                                                        <a href='single-video-tabs.html'>
                                                            Course Aligibra 1: Matrix rank - Elias Renawi
                                                        </a>
                                                    </div>
                                                    <div className='v-views'>
                                                        27,548 views.
                                                        <span className='v-percent'>
                                                            <span className='v-circle'></span> 78%
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-3 col-sm-6 videoitem'>
                                                <div className='b-video'>
                                                    <div className='v-img'>
                                                        <a href='single-video-tabs.html'>
                                                            <img src='images/video1-1.png' alt='' />
                                                        </a>
                                                        <div className='time'>3:50</div>
                                                    </div>
                                                    <div className='v-desc'>
                                                        <a href='single-video-tabs.html'>
                                                            Course Aligibra 1: Matrix rank - Elias Renawi
                                                        </a>
                                                    </div>
                                                    <div className='v-views'>
                                                        27,548 views.
                                                        <span className='v-percent'>
                                                            <span className='v-circle'></span> 78%
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-3 col-sm-6 videoitem'>
                                                <div className='b-video'>
                                                    <div className='v-img'>
                                                        <a href='single-video-tabs.html'>
                                                            <img src='images/video1-2.png' alt='' />
                                                        </a>
                                                        <div className='time'>15:19</div>
                                                    </div>
                                                    <div className='v-desc'>
                                                        <a href='single-video-tabs.html'>
                                                            Course Hidva 1: Function Integral - Mhemmad Abdalla
                                                        </a>
                                                    </div>
                                                    <div className='v-views'>
                                                        8,241,542 views.
                                                        <span className='v-percent'>
                                                            <span className='v-circle'></span> 93%
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-3 col-sm-6 videoitem'>
                                                <div className='b-video'>
                                                    <div className='v-img'>
                                                        <a href='single-video-tabs.html'>
                                                            <img src='images/video1-3.png' alt='' />
                                                        </a>
                                                        <div className='time'>4:23</div>
                                                    </div>
                                                    <div className='v-desc'>
                                                        <a href='single-video-tabs.html'>
                                                            Course Hidva 2: 3D Integral - Sohaib
                                                        </a>
                                                    </div>
                                                    <div className='v-views'>
                                                        2,729,347 views .
                                                        <span className='v-percent'>
                                                            <span className='v-circle'></span> 95%
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-3 col-sm-6 videoitem'>
                                                <div className='b-video'>
                                                    <div className='v-img'>
                                                        <a href='single-video-tabs.html'>
                                                            <img src='images/video1-4.png' alt='' />
                                                        </a>
                                                        <div className='time'>7:18</div>
                                                    </div>
                                                    <div className='v-desc'>
                                                        <a href='single-video-tabs.html'>
                                                            Course OOP: Class Constractor - Fakhry
                                                        </a>
                                                    </div>
                                                    <div className='v-views'>
                                                        7,239,852 views.
                                                        <span className='v-percent'>
                                                            <span className='v-circle'></span> 84%
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='v-pagination'>
                                    <ul className='list-inline'>
                                        <li>
                                            <a href='#'>
                                                <div className='pages active'>1</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                <div className='pages'>2</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                <div className='pages'>3</div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='content-block head-div'>
                                    <div className='cb-header'>
                                        <div className='row'>
                                            <div className='col-lg-10 col-sm-10 col-xs-8'>
                                                <ul className='list-inline'>
                                                    <li>
                                                        <h2>Our Team</h2>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='cb-content'>
                                        <div className='row'>
                                            <div className='col-lg-2 col-sm-4 col-xs-6'>
                                                <div className='b-chanel'>
                                                    <a href='#'>
                                                        <img
                                                            style={{ borderRadius: "50%" }}
                                                            src='personal/mhemmad.jpeg'
                                                            alt=''
                                                            width='170'
                                                            height='196'
                                                        />
                                                        <div className='hover'>
                                                            Mhemmad <br />
                                                            <i className='cv cvicon-cv-liked'></i> 5K
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='col-lg-2 col-sm-4 col-xs-6'>
                                                <div className='b-chanel'>
                                                    <a href='#'>
                                                        <img
                                                            style={{ borderRadius: "50%" }}
                                                            src='personal/elias.jpeg'
                                                            alt=''
                                                            width='170'
                                                            height='196'
                                                        />
                                                        <div className='hover' style={{ display: "none" }}>
                                                            Elias
                                                            <br />
                                                            <i className='cv cvicon-cv-liked'></i> 215K
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='col-lg-2 col-sm-4 col-xs-6'>
                                                <div className='b-chanel'>
                                                    <a href='#'>
                                                        <img
                                                            style={{ borderRadius: "50%" }}
                                                            src='personal/ivan.jpg'
                                                            alt=''
                                                            width='170'
                                                            height='196'
                                                        />
                                                        <div className='hover' style={{ display: "none" }}>
                                                            Ivan
                                                            <br />
                                                            <i className='cv cvicon-cv-liked'></i> 21
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='col-lg-2 col-sm-4 col-xs-6'>
                                                <div className='b-chanel'>
                                                    <a href='#'>
                                                        <img
                                                            style={{ borderRadius: "50%" }}
                                                            src='personal/sohaib.jpeg'
                                                            alt=''
                                                            width='170'
                                                            height='196'
                                                        />
                                                        <div className='hover' style={{ display: "none" }}>
                                                            Sohaib
                                                            <br />
                                                            <i className='cv cvicon-cv-liked'></i> 134
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='col-lg-2 col-sm-4 col-xs-6'>
                                                <div className='b-chanel'>
                                                    <a href='#'>
                                                        <img
                                                            style={{ borderRadius: "50%" }}
                                                            src='personal/fakhry.jpeg'
                                                            alt=''
                                                            width='170'
                                                            height='196'
                                                        />
                                                        <div className='hover' style={{ display: "none" }}>
                                                            Fakhry
                                                            <br />
                                                            <i className='cv cvicon-cv-liked'></i> 1.6M
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='col-lg-2 col-sm-4 col-xs-6'>
                                                <div className='b-chanel'>
                                                    <a href='#'>
                                                        <img
                                                            style={{ borderRadius: "50%" }}
                                                            src='personal/ultrahack.jpg'
                                                            alt=''
                                                            width='170'
                                                            height='196'
                                                        />
                                                        <div className='hover' style={{ display: "none" }}>
                                                            Ultra Hack
                                                            <br />
                                                            <i className='cv cvicon-cv-liked'></i> 265K
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
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
                                    <div className='f-copy'></div>
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
