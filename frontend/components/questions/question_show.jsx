import React from 'react';

import NavBarContainer from '../nav_bar/nav_bar_container';

class QuestionShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        //debugger
        this.props.fetchQuestion(this.props.match.params.questionId);
    }

    render(){
        if (!this.props.question){
            return null;
        }

        let list = (
            <li className="answer-item">Answer</li>
        );

        return (
            <div className="question-index">
                <NavBarContainer />
                <div>
                    <div className="question-show-item-block">
                        <h1 className="question-show-item">{this.props.question.body}</h1>
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
export default QuestionShow;