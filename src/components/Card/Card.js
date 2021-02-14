import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import CardHeader from '../CardHeader/CardHeader'
import CardFooter from '../CardFooter/CardFooter'

import Cards from './Cards.json'

class Card extends Component {
    constructor(props) {
        super(props);

        const lessonId = localStorage.getItem('lessonId')

        this.state = {
            lessonId: lessonId,
            cards: Cards,
            currentCardNum: 0,
        }
    }

    render() {
        if (!this.state.lessonId) {
            return (
                <Redirect
                    to={{
                        pathname: '/'
                    }}
                />
            )
        }

        return (
            <div>
                <CardHeader />
                {this.renderCardBody()}

                {/* <div class="buttons">
                    ${createButtonBack(first)}
                    ${createButtons(card)}
                </div> --> foter */} 
                <CardFooter />
            </div>
        )
    }

    renderCardBody() {
        const {currentCardNum, cards} = this.state
        const card = cards[currentCardNum]
        return (
            <div class="content">
                <div class="text">
                    <h3>{currentCardNum + 1}. {card.title}</h3>
                    <div class="body">{this.createText(card)}</div>
                </div>                
                
            </div>
            // ${createImg(card)}
        )
    }

    createText() {
        return (
            <span>createText</span>
        )
    }




}

export default Card;
