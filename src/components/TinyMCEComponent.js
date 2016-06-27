import React, { Component } from 'react';

export default class TinyMCE extends Component {
    constructor(props) {
        super(props);
    }

    static get defaultProps() {
        return {
            plugins: "media, image",
            statusbar: false,
        }
    }

    componentWillMount() {
        let selector = `#${this.props.id}`;
        let options = {...this.props, selector: selector };

        tinymce.init(options);
    }

    render() {
        return (
            <textarea id={this.props.id} />
        );
    }
}