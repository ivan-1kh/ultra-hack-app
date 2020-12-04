import React from "react";

export default (props) => {
  const handleClick = (e) => {
    window.location = "/uploading";
  };

  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <link rel="icon" href="favicon.png" />
        <title>Course Video | Upload Video Page</title>
        <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="css/style.css" rel="stylesheet" />
        <link href="css/font-awesome.min.css" rel="stylesheet" />
        <link href="css/font-circle-video.css" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css?family=Hind:400,300,500,600,700|Hind+Guntur:300,400,500,700"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body className="light">
        <div className="container-fluid">
          <div className="row">
            <div className="btn-color-toggle">
              <img src="images/icon_bulb_light.png" alt="" />
            </div>
            <div className="navbar-container">
              <div className="container">
                <div className="row">
                  <div className="col-lg-1 col-sm-2 col-xs-2">
                    <a className="navbar-brand" href="index.html">
                      <img
                        src="images/logo.svg"
                        alt="Project name"
                        className="logo"
                      />
                    </a>
                  </div>
                  <div className="col-lg-3 col-sm-10 col-xs-10">
                    <ul className="list-inline menu">
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="Index.html">Courses</a>
                      </li>
                    </ul>
                  </div>
                  <div className="visible-xs visible-sm clearfix"></div>
                  <div className="col-lg-6 col-sm-8 col-xs-12">
                    <form action="search.html" method="post">
                      <div className="topsearch">
                        <div className="input-group">
                          <span
                            className="input-group-addon"
                            id="sizing-addon2"
                          >
                            <i className="fa fa-search"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                            aria-describedby="sizing-addon2"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="visible-xs clearfix"></div>
                  <div className="col-lg-2 col-sm-4  col-xs-8">
                    <div className="avatar pull-left">
                      <img src="images/avatar.png" alt="avatar" />
                      <span className="status"></span>
                    </div>
                    <div className="selectuser pull-left">
                      <div className="btn-group pull-right dropdown">
                        <button
                          className="btn btn-default dropdown-toggle"
                          type="button"
                          id="dropdownMenu1"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="login.html">Login</a>
                          </li>
                          <li>
                            <a href="signup.html">Sign up</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid"></div>
        <div className="content-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 upload-page">
                <div className="u-area">
                  <i className="cv cvicon-cv-upload-video"></i>
                  <p className="u-text1">Select Video files to upload</p>
                  <p className="u-text2">or drag and drop video files</p>
                  <form action="/uploading" method="get">
                    <center>
                      <input
                        id="file-upload"
                        type="file"
                        onChange={handleClick}
                      ></input>
                    </center>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container-fluid">
            <div className="row">
              <div className="container padding-def">
                <div className="col-lg-7  col-sm-7 col-xs-12">
                  <div className="f-links">
                    <ul className="list-inline">
                      <li>
                        <a href="#">UltraHack 2020</a>
                      </li>
                    </ul>
                  </div>
                  <div className="delimiter"></div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <script src="js/jquery.min.js"></script>
        <script src="bootstrap/js/bootstrap.min.js"></script>
        <script src="js/custom.js"></script>
      </body>
    </html>
  );
};
