import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';

class QuestionIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchQuestions();
    }

    render(){
        let list = this.props.questions.map((question, index)=>{
            //debugger
            return(
                <li className="question-item" key={"question #" + index}>
                    <Link to={"/questions/"+question.id}>{question.body}</Link>
                </li>
            )
        });
        //debugger
        return (
            <div className="question-index">
                <NavBarContainer />
                <div className="question-index-main-block">
                    <div className="create-question-index-block">
                        <button className="create-question-button" onClick={() => this.props.openModal('Add Question')}>What is your question or link?</button>
                    </div>
                    <div className="question-items-list-block">
                        <ul className="question-items-list">
                            {list}
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}

export default QuestionIndex;