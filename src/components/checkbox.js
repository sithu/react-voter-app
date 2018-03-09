import * as React from 'react';

export class Checkbox extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            isChecked: false,
        };
    };

    toggleCheckbox = (event) => {
        this.setState({
            isChecked: !this.state.isChecked,
        })

        console.log(this.props.question.id);
        console.log(!this.state.isChecked);
        this.props.onCheckboxChange(!this.state.isChecked, this.props.question.id);
    }

    render() {
        return <div>
            <label>
                <input type="Checkbox"
                    value={this.props.question.label}
                    checked={this.state.isChecked}
                    onChange={this.toggleCheckbox} 
                />
                {this.props.question.label}
            </label>
        </div>
    }

}