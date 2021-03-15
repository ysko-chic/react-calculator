import React, {Component} from 'react';
import Result from './Result';

class ResultList extends Component {

    render() {
        const {resultlist} = this.props
        const result = resultlist.map(
            info => (<Result key={info.id} data={info.resultlist}/>)
        )

        return (
            <div>
                {result}
            </div>
        )
    }
}

export default ResultList;