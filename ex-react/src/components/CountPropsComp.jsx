import { Component } from "react";

class CountPropsComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        }
    }
    render() {
        const {num} = this.props;
        const {count} = this.state;
        return(
            <div>
                <h3>값 : {count}</h3>
                <button
                    onClick={ () => { this.setState( { count : count + num } ) } }
                >
                    count + {num}
                </button>
            </div>
        )
    }
}

export default CountPropsComp;