import React, {Component} from 'react';

class Result extends Component {

    render() {
        return (
            <div>
                {this.props.data}
            </div>
        )
    }
}

export default Result;