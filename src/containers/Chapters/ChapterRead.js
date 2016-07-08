import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import Paper from 'material-ui/paper';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

import { fetchChapter } from '../../actions/chapters';

const buttonStyle = {
    label: {
        lineHeight: '50px', fontWeight: 600
    },
    button: {
        width: '150px', height: '50px', margin: '20px'
    }
};

const style = {
    margin: '50px',
    padding: '30px',
    backgroundColor: '#FAFAFA',
    border: '1px solid #E0E0E0',
    minHeight: '500px',
    maxHeight: '650px',
    overflow: 'scroll'
};

class ChaperRead extends React.Component {
    componentDidMount() {
        this.props.fetchChapter(this.props.params.chapterId);
    }

    render() {
        const lectureNote = this.props.chapter.lectureNote ? this.props.chapter.lectureNote : '';
        return (
            <div class="container-fluid">
                <div style={{ margin: '20px 0' }}>
                    <h2 class="text text-display-1">{this.props.chapter.title}</h2>
                    <h3 class="text text-headline">{this.props.chapter.description}</h3>
                </div>
                <Divider inset={false} />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Paper class="col-md-12" zDepth={2} style={style}>
                        <div className="content" dangerouslySetInnerHTML={{__html: lectureNote}}></div>
                    </Paper>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        chapter: state.chapters.chapter
    }
}

export default connect(mapStateToProps, {fetchChapter})(ChaperRead);