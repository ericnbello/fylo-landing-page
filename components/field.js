import React, {Component} from 'react';

class Field extends Component{
    render(){
        return(
            <div>
                {this.props.elementName === 'input' ?
                <input
                    className="w-full border-2 md:my-5 py-2 px-4"
                    id={this.props.name}
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    required="required"
                    data-validation-required-message="Please enter your name."
                    name={this.props.name} 
                    onChange={this.props.onChange}
                    onBlur={this.props.onBlur}
                />
                :
                <textarea
                    className="form-control"
                    id={this.props.name}
                    placeholder={this.props.placeholder}
                    required="required"
                    data-validation-required-message="Please enter a message."
                    name={this.props.name}
                    onChange={this.props.onChange}
                    onBlur={this.props.onBlur}
                />
                }
                <p className="text-red-600 text-sm m-1 md:-my-5 md:py-1 text-left">
                    {(this.props.touched && this.props.errors) &&
                        <span>{this.props.errors}</span>
                    }
                </p>
            </div>
        );
    }
}

export default Field;