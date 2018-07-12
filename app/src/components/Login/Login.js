import React from 'react';
import { Col, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import './Login.css';
import { connect } from 'react-redux';
import { loginUser } from './loginActions';
import { bindActionCreators } from 'redux';

const InputGroup = (props) => (
  <FormGroup>
    <Col xs={12} sm={12} md={12}>
      <FormControl {...props}/>
    </Col>
  </FormGroup>
  );

export class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.loginUser(this.state.email, this.state.password);
  }

  handleChange = stateName => e => {
    this.setState({ [stateName]: e.target.value });
  };

  render() {
    return (
      <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
        <h4>Registration form for login</h4>
          {['email', 'password'].map((param, id) =>
            <InputGroup
              key={id}
              className={param}
              type={param}
              placeholder={param.toUpperCase()}
              value={this.state[param]}
              onChange={this.handleChange(param)}
            />
          )}
          <FormGroup>
            <Col xs={12} sm={12} md={12}>
              <Button bsStyle='info' type='submit'>
                Log in
              </Button> 
            </Col>
          </FormGroup>
      </Form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({loginUser}, dispatch);
}

function mapStateToProps(state) {
  return {
    log: state
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
