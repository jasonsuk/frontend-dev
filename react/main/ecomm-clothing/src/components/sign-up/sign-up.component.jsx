import React from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        // Define inputs to submit
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert('Your passwords do not match. Please try again');
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, { displayName });

            // Reset the state empty
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        return (
            <div className="sign-up">
                <h2 className="title">I don't have an account yet</h2>
                <span>Sign up with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="name"
                        type="text"
                        value={this.state.displayName}
                        handleChange={this.handleChange}
                        label="name"
                        required
                    />
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="email"
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="password"
                        required
                    />
                    <FormInput
                        name="confirmPassword"
                        type="password"
                        value={this.state.confirmPassword}
                        handleChange={this.handleChange}
                        label="onfimPassword"
                        required
                    />
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;
