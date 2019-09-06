import React from 'react';
import { Link } from "react-router-dom";
import catanddog from './catanddog.jpg';

export default class LandingPage extends React.Component {
    static defaultProps = {
        onLoginSuccess: () => {}
      }
    
      state = { error: null }
      handleSubmit = ev => {
        ev.preventDefault();
        const { user_name, password } = ev.target;
        user_name.value = '';
        password.value = '';
        this.props.onLoginSuccess();
      } 
    render(){
        const { error } =this.state;
        return (
            <>
            <header role='banner' className='banner'>
                <h1>Petful</h1>
                <Link to={'/adoption'}>Start Adpoting!</Link>
            </header>
           
            <img src={catanddog} height="500" width="500" alt="logo" />
            <section className='welcome-message'>
            <p>
            Welcome to Petful
            </p>
            <p>
            People can adopt a cat, or a dog, or both, but they may only adopt the animal that came to the shelter first is the one to be adopted first.
            </p>
           
            </section>

             <form className='LoginFrom' onSubmit={this.handleSubmit}>
             <div role='alert'>
                {error && <p className='red'>{error}</p>}
                </div>
                <div className='user_name'>
                <label htmlFor='LoginForm__user_name'>
                    User name
                </label>
                <input
                    required
                    name='user_name'
                    id='LoginForm__user_name'>
                </input>
                </div>
                <div className='password'>
                <label htmlFor='LoginForm__password'>
                    Password
                </label>
                <input
                    required
                    name='password'
                    type='password'
                    id='LoginForm__password'>
                </input>
                </div>
                <button type='submit'>
                Login
                </button>   
            </form>
         </>   
        )
    }
}