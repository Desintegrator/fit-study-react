import React, { Component } from 'react';

class ChapterLessons extends Component {
    render() {
        const {lessons, onLessonSelect} = this.props
        return (
            <div className="card-body">
                <table className="table">
                    <tbody>
                        {lessons.map(lesson => (
                            <tr key={lesson.id_lesson}>
                                <td>
                                    <span
                                        onClick={() => {
                                            onLessonSelect(lesson.id_lesson)
                                        }}
                                    >
                                        {lesson.title_lesson}
                                    </span>
                                </td>
                                <td>
                                    {lesson.status_l}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default ChapterLessons;
