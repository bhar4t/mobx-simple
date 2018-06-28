import React from 'react';

export default class Time extends React.Component {

    componentDidMount() {
        setInterval(() => {
            this.setState(() => {
                console.log('setting state');
                return { unseen: "does not display" }
            });
        }, 1000);
    }

    shouldComponentUpdate(nextProps) {
        const differentTitle = this.props.title !== nextProps.title;
        const differentDone = this.props.done !== nextProps.done
        return differentTitle || differentDone;
    }

    render() {
        console.log('render called');
        return (<div>Bharat</div>);
    }
}
