import React from "react";
import "./style.css";

export default (props) => {
    const [startAt, setStartAt] = React.useState(null);

    React.useEffect(() => {
        let str = "";

        str += parseInt(props.time / 60).toString();
        str += ":";
        if (props.time % 60 < 10) {
            str += "0";
        }
        str += parseInt(props.time % 60).toString();

        setStartAt(str);
    });

    const closeQuestion = (e) => {
        e.target.parentElement.parentElement.remove();
    };

    return (
        <div className='Question'>
            <div className='row'>
                <div className='form-group'>
                    <div className='col-lg-12'>
                        <div className='form-group'>
                            <label for='e1'>Question</label>
                            <input type='text' className='form-control' id='e1' placeholder='Your Qustion' />
                        </div>
                    </div>
                    <div className='col-lg-12'>
                        <div className='form-group'>
                            <label for='e3'>Answers</label>
                            <input type='text' className='form-control' id='e3' placeholder='Answer 1' />
                            <input type='text' id='e3' placeholder='Answer 2' className='form-control' />
                            <input type='text' id='e3' placeholder='Answer 3' className='form-control' />
                            <input type='text' className='form-control' id='e3' placeholder='Answer 4' />
                        </div>
                    </div>
                </div>
                <div className='col-lg-12'>
                    <div className='form-group'>
                        <label for='e6'>Correct Answer</label>
                        <select className='form-control' id='e6'>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='form-group'>
                        <label for='e4'>Segment from:</label>
                        <input type='text' className='form-control' id='e4' placeholder='Start at' />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='form-group'>
                        <label for='e4'>To:</label>
                        <input type='text' className='form-control' id='e4' placeholder='End at' value={startAt} />
                    </div>
                </div>
                <img src='/close-icon.png' className='exit-icon' onClick={closeQuestion} />
            </div>
        </div>
    );
};
