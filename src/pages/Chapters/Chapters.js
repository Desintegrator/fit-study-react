import React, { Component } from 'react';

import Chapters from '../../components/Chapters/Chapters.js';

class ChaptersPage extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return <div className="container container-ac">
            <Chapters history={this.props.history} />
        </div>
    }
}

export default ChaptersPage;
