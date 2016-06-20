import React from 'react';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
    height          : 200,
    background      : '#ef9a9a',
    backgroundImage : 'url("https://shriviews.files.wordpress.com/2014/07/google-design-google-plus-cover-material.jpg")',
    backgroundSize  : 'cover'
};

const descriptionStyle = {
    height     : 100,
    background : 'white',
    padding    : 15,
    color      : '#999',
    margin     : 0
};

const CourseThumbnail = (props) => (
    <div class="col-md-4 col-xs-6" style={{ 'padding': 10, 'position': 'relative' }}>
        <Paper style={style} zDepth={4}></Paper>

        <FloatingActionButton secondary={true} style={{ position: 'absolute', 'top': '56%', 'right': '5%' }}>
            <ContentAdd />
        </FloatingActionButton>

        <Paper style={ descriptionStyle }>
            <h2 class="text-title">Course title</h2>
            <p class="text-body">{ props.description }</p>
        </Paper>
    </div>
);


export default CourseThumbnail;