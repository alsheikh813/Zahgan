import React from 'react'
import $ from 'jquery';

class Signin extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: ''
      };

      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
      var obj = {
        email: this.state.email,
        password: this.state.password
      }

      console.log(obj)
      $.ajax({
        type: "POST",
        url: '/account/signin',
        data: {
          email: obj.email,
          password: obj.password
        },
        success: function (res) {
          console.log(res)
          alert(res.message)
        }
      });

      event.preventDefault();
    }
    

  render() {
    return (
      <div id="zz" className="container-fluid" >
      <h2> Sign in </h2>
      <form onSubmit={this.handleSubmit}>
        Email : <input 
        placeholder="email"
        value={this.state.email}
        onChange={e=>this.setState({email:e.target.value})}/>
        <br></br>
        Password :<input 
        placeholder="password"
        value={this.state.password}
        type="password"
        onChange={e=>this.setState({password:e.target.value})}/>
        <br></br>
        <input type="submit" value="Sign In" />
      </form>
      </div>
    );
  }
}
export default Signin

