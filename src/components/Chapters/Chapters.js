import React, { Component } from 'react';

import { history } from 'react-router-dom';
import ChaptersLessons from '../ChapterLessons/ChapterLessons';

import chaptersList from './Chapters.json';

class Chapters extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chaptersList: chaptersList,
        }

        this.onLessonSelect = this.onLessonSelect.bind(this)
    }

    render() {
        return <div className="accordion" id="accordion">
            {this.renderChapters()}
        </div>
    }

    renderChapters() {
        return (
            
            this.state.chaptersList.map(chapter => (
                <div key={chapter.id_chapter}
                    className="card">
                    <div className="card-header">
                        <h2 className="mb-0">
                            <button 
                                className="btn btn-link btn-block text-left" 
                                type="button" 
                                data-toggle="collapse" 
                                data-target={`#collapse${chapter.id_chapter}`} 
                                aria-expanded="false" 
                                aria-controls={`collapse${chapter.id_chapter}`}

                                onClick={() => {
                                    this.onChapterClick(chapter.id_chapter)
                                }}
                            >
                                Глава {chapter.id_chapter}. {chapter.title_chapter}
                            </button>
                        </h2>
                    </div>

                    <div 
                        id={`collapse${chapter.id_chapter}`}
                        className={chapter.opened ? '' : 'collapse'} 
                        aria-labelledby={chapter.id_chapter}
                        data-parent="#accordion">

                        <ChaptersLessons lessons={chapter.lessons}
                            onLessonSelect={this.onLessonSelect}
                        />

                    </div>
                </div>
            ))
        )
    }

    onLessonSelect(lessonId) {
        const {history} = this.props

        //? Как в Lesson узнать какой урок открыли
        // 1 - глобальный менеджер состояния (Redux - https://react-redux.js.org/)
        // 2 - localStorage / sessionStorage
        // 3 - queryParams -- history.push(`/lesson?lessonId=${lessonId}`)

        localStorage.setItem('lessonId', lessonId)

        history.push('/lesson')
    }

    onChapterClick(chapterId) {
        let {chaptersList} = this.state
        chaptersList = chaptersList.map((_nextChapter) => {
            let nextChapter = _nextChapter
            if (nextChapter.id_chapter === chapterId) {
                nextChapter.opened = true
            } else {
                nextChapter.opened = false
            }
            return nextChapter
        })
        this.setState({chaptersList})
    }
}

export default Chapters;
