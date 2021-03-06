import React from 'react';

export default Component => class WrappedComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    };

    render() {
        return <Component {...this.props} toggleOpen = {this.toggleOpen} {...this.state}/>
    };

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };
};