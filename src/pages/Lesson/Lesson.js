import React, { Component } from 'react';

class Lesson extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            score: 0
        }
    }

    rightAnswer() {
        let { score } = this.state
        score += 1
        this.setState({ score })
    }



    render() {
        const {score, totalScore} = this.state

        return <div>
            {/* <Progress score={score} totalScore={totalScore} />
            <CardTitle /> */}
            <button
                onClick={()=>this.rightAnswer()}
            >Правильный ответ</button>
            <div>{score}</div>
            {/* <CardImage /> */}
        </div>
    }
}

export default Lesson;
