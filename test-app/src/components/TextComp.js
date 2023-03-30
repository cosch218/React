import {Component} from 'react';

class TextComp extends Component {
    render() {
        const {name, children} = this.props;
        return(
            <div>
                <h1>{children}</h1>
                <p>{name}님</p>
            </div>
        );
    };
;}

export default TextComp;