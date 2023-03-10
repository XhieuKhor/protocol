import React, { Component } from "react";

class ErrorBoundry extends Component {
    constructor(props){
        super(props);
            this.state = {
            hasError: false
        }
    }

    componentDidCatch(Error, info){
        this.setState({hasError : true})
    }

    render() {
        if (this.state.hasError){
            return <h1>Oooooops There was an error</h1>
        } 
        return this.props.children
    }
}

export default ErrorBoundry;