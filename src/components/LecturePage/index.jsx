import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import "./style.css";
const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

const lectureQuestionData = [
    {
        questionBody: "אם יש לנו נפח גוף 200 סמ״ק והצפיפות 7.8 גרם/סמ״ק מה היא המסה של הגוף?",
        correctAnswer: 1,
        1: "1560 גרם",
        2: "2000 גרם",
        3: "1500 גרם",
        4: "1000 גרם",
        startAt: 115,
        endAt: 188,
        completed: false,
    },
    {
        questionBody: "אם יש לנו מסה קטנה מהעץ:",
        correctAnswer: 2,
        1: "ישקע במים",
        2: "יצוף מעל המים",
        3: "לא יקרה כלום",
        4: "לא יודיע",
        startAt: 10,
        endAt: 94,
        completed: false,
    },
];

export default (props) => {
    const [currentQuestion, setCurrentQuestion] = React.useState();

    var subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        //subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [modal2IsOpen, set2IsOpen] = React.useState(false);
    function openModal2() {
        set2IsOpen(true);
    }

    function afterOpenModal2() {
        // references are now sync'd and can be accessed.
        //subtitle.style.color = '#f00';
    }

    function closeModal2() {
        set2IsOpen(false);
    }

    React.useEffect(() => {
        setInterval(() => {
            let video = document.querySelector("#mainVideo");

            lectureQuestionData.forEach((element) => {
                if (element.endAt === parseInt(video.currentTime) && !element.completed) {
                    video.pause();
                    setCurrentQuestion(element);
                }
            });
        }, 1000);
    }, []);

    const firstAnswer = (e) => {
        if (currentQuestion.correctAnswer === 1) {
            currentQuestion.completed = true;
            setCurrentQuestion(null);
            openModal();
            setTimeout(function () {
                closeModal();
                document.querySelector("#mainVideo").play();
            }, 1500);
        } else {
            document.querySelector("#mainVideo").currentTime = currentQuestion.startAt;
            setCurrentQuestion(null);
            openModal2();
            setTimeout(function () {
                closeModal2();
                document.querySelector("#mainVideo").play();
            }, 1500);
        }
    };

    const secondAnswer = (e) => {
        if (currentQuestion.correctAnswer === 2) {
            currentQuestion.completed = true;
            setCurrentQuestion(null);
            openModal();
            setTimeout(function () {
                closeModal();
                document.querySelector("#mainVideo").play();
            }, 1500);
        } else {
            document.querySelector("#mainVideo").currentTime = currentQuestion.startAt;
            setCurrentQuestion(null);
            openModal2();
            setTimeout(function () {
                closeModal2();
                document.querySelector("#mainVideo").play();
            }, 1500);
        }
    };

    const thirdAnswer = (e) => {
        if (currentQuestion.correctAnswer === 3) {
            currentQuestion.completed = true;
            setCurrentQuestion(null);
            openModal();
            setTimeout(function () {
                closeModal();
                document.querySelector("#mainVideo").play();
            }, 1500);
        } else {
            document.querySelector("#mainVideo").currentTime = currentQuestion.startAt;
            setCurrentQuestion(null);
            openModal2();
            setTimeout(function () {
                closeModal2();
                document.querySelector("#mainVideo").play();
            }, 1500);
        }
    };

    const fourthAnswer = (e) => {
        if (currentQuestion.correctAnswer === 4) {
            currentQuestion.completed = true;
            setCurrentQuestion(null);
            openModal();
            setTimeout(function () {
                closeModal();
                document.querySelector("#mainVideo").play();
            }, 1500);
        } else {
            document.querySelector("#mainVideo").currentTime = currentQuestion.startAt;
            setCurrentQuestion(null);
            openModal2();
            setTimeout(function () {
                closeModal2();
                document.querySelector("#mainVideo").play();
            }, 1500);
        }
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
                                                <a href='/'>Home</a>
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
                <div className='container-fluid'></div>
                <div className='content-wrapper'>
                    <div className='container' style={{ width: "1650px" }}>
                        <div className='row'>
                            <div className='col-lg-8 col-xs-12 col-sm-12'>
                                <video
                                    id='mainVideo'
                                    poster='/Screenshot_1.png'
                                    controls={true}
                                    style={{ width: "100%", height: "100%" }}
                                    type='video/mp4'
                                    src='/lecture.mp4'
                                ></video>
                                <div
                                    className='custom-message'
                                    style={{
                                        position: "absolute",
                                        top: "100px",
                                        left: "100px",
                                        display: currentQuestion ? "flex" : "none",
                                        flexDirection: "column",
                                        fontSize: "20px",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        backgroundColor: "#000000",
                                        color: "#FFFFFF",
                                        color: "#FFFFFF",
                                        width: "800px",
                                        height: "400px",
                                        padding: "20px",
                                        margin: "20px",
                                        border: "2px solid red",
                                        borderRadius: "25px",
                                        direction: "rtl",
                                        zIndex: 999,
                                    }}
                                >
                                    <h2>{currentQuestion ? currentQuestion.questionBody : ""}</h2>
                                    <a className='answerButton' style={{ color: "#ffffff" }} onClick={firstAnswer}>
                                        {currentQuestion ? currentQuestion[1] : ""}
                                    </a>
                                    <a className='answerButton' style={{ color: "#ffffff" }} onClick={secondAnswer}>
                                        {currentQuestion ? currentQuestion[2] : ""}
                                    </a>
                                    <a className='answerButton' style={{ color: "#ffffff" }} onClick={thirdAnswer}>
                                        {currentQuestion ? currentQuestion[3] : ""}
                                    </a>
                                    <a className='answerButton' style={{ color: "#ffffff" }} onClick={fourthAnswer}>
                                        {currentQuestion ? currentQuestion[4] : ""}
                                    </a>
                                </div>
                                <div>
                                    {/*<button onClick={openModal}>Open Modal</button>*/}
                                    <Modal
                                        isOpen={modalIsOpen}
                                        onAfterOpen={afterOpenModal}
                                        onRequestClose={closeModal}
                                        style={customStyles}
                                    >
                                        <div className='modal-header'>
                                            <button type='button' className='close' onClick={closeModal}>
                                                &times;
                                            </button>
                                            <h4 className='modal-title'>Good job!</h4>
                                        </div>
                                        <div className='modal-body'>
                                            <iframe
                                                src='https://giphy.com/embed/l49JNZ87F3AmPoH0A'
                                                frameBorder='0'
                                                className='giphy-embed'
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                        {/* <div className='modal-footer'>
                                            <button
                                                type='button'
                                                onClick={closeModal}
                                                className='btn btn-default'
                                                data-dismiss='modal'
                                            >
                                                Continue
                                            </button>
                                        </div> */}
                                    </Modal>
                                    <Modal
                                        isOpen={modal2IsOpen}
                                        onAfterOpen={afterOpenModal2}
                                        onRequestClose={closeModal2}
                                        style={customStyles}
                                    >
                                        <div className='modal-header'>
                                            <button type='button' className='close' onClick={closeModal}>
                                                &times;
                                            </button>
                                            <h4 className='modal-title'>Incorrect answer</h4>
                                        </div>
                                        <div className='modal-body'>
                                            <iframe
                                                src='https://giphy.com/embed/W5qyPxP1CVLFVsmlsl'
                                                width='250'
                                                height='250'
                                                frameBorder='0'
                                                class='giphy-embed'
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                        {/* <div className='modal-footer'>
                                            <button
                                                type='button'
                                                onClick={closeModal}
                                                className='btn btn-default'
                                                data-dismiss='modal'
                                            >
                                                Continue
                                            </button>
                                        </div> */}
                                    </Modal>
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
                                                    <img
                                                        style={{ width: "220px", height: "150px" }}
                                                        src='/Screenshot_1.png'
                                                        alt=''
                                                    />
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
                                                    <img
                                                        style={{ width: "220px", height: "150px" }}
                                                        src='/Screenshot_2.png'
                                                    />
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
                                                    <img
                                                        style={{ width: "220px", height: "150px" }}
                                                        src='/Screenshot_3.png'
                                                    />
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
