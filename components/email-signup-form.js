import {withFormik} from 'formik';
import Field from './field';
import * as Yup from 'yup';
import { Component } from 'react/cjs/react.production.min';

const fields =  {
    sections: [
        [
            {name: 'email', elementName: 'input', type: 'email', placeholder:"Enter your email"},
        ],
    ]
}
class EmailSignupForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
        }
    }

    render() {
        return (
            <div className="">
                <form className="">
                    {fields.sections.map((section, i)=>{
                            console.log("Section", i, "with", section)
                            return(
                                <div className="" key={i}>
                                    {section.map((field, indexField)=>{
                                        return <Field
                                                    {...field}
                                                    key={indexField}
                                                    value={this.state[field.name]}
                                                    name={field.name}
                                                    onChange={this.props.handleChange}
                                                    onBlur={this.props.handleBlur}
                                                    touched={this.props.touched[field.name]}
                                                    errors={this.props.errors[field.name]}
                                                />
                                    })}
                                </div>
                            )
                        })}
                </form>
            </div>
        )
    }   
}

export default withFormik({
    mapPropsToValues: () => ({
        email: '',
    }),
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Please check your email').required('Please check your email'),
    }),
    handleSubmit: (values, { setSubmitting }) => {
     setTimeout(() => {
       alert(JSON.stringify(values, null, 2));
       setSubmitting(false);
     }, 1000);
   },
})(EmailSignupForm);