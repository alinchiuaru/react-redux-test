import React from 'react';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Settings from 'material-ui/svg-icons/action/settings';
import { Link } from 'react-router';

const logoStyle = {
    height          : 200,
    background      : '#ef9a9a',
    backgroundImage : 'url("http://www.omgubuntu.co.uk/wp-content/uploads/2014/08/can.jpg")',
    backgroundSize  : 'cover'
};

const computeLogoStyle = (props) => {
    if ( !props.logo )
        return logoStyle;

    return {...logoStyle, backgroundImage: `url(${props.logo})`};
}


const descriptionStyle = {
    height     : 100,
    background : '#FAFAFA',
    padding    : 15,
    color      : '#545555',
    margin     : 0,
};


const CourseThumbnail = (props) => (
    <div class="col-md-4 col-xs-6" style={{ 'padding': 10, 'position': 'relative' }}>
        <Paper style={computeLogoStyle(props)} zDepth={4}></Paper>

        <Link to={props.link}>
             <FloatingActionButton style={{ position: 'absolute', 'top': '56%', 'right': '5%' }}>
                {props.icon}
            </FloatingActionButton>
        </Link>

        <Paper style={ descriptionStyle }>
            <h2 class="text-title">{ props.title }</h2>
            <p class="text-body" style={{  textOverflow : 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{ props.description }</p>
        </Paper>
    </div>
);


export default CourseThumbnail;