import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

export default class Users extends Component {
    render() {
        return (
            <div class="row middle-xs">
                <Paper class="col-md-2" style={{ 'backgroundColor': 'red', height: '200' }} zDepth={3}/>
                <Paper class="col-md-2" style={{ 'backgroundColor': 'gray', height: '200'}} zDepth={2}/>
            </div>
        );
    }
}