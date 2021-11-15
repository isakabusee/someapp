import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {isOff: false};
    }
    handleClick() {
        this.setState({isOff:!this.state.isOff});
    }

    render() {
        // const { isOff } = this.state;
        let title=this.state.isOff? "ON": "OFF";
        return(
            <div className="buttonOn">
                <h4>This button turns ON and OFF</h4>
                <button onClick={this.handleClick}>{title}</button>
            </div>
        )
    }
}

export default Toggle;