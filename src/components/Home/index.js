import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

import './index.css'

class Home extends Component {
  state = {isLogin: true}

  onButton = () => {
    const {isLogin} = this.state
    this.setState({isLogin: !isLogin})
  }

  render() {
    const {isLogin} = this.state
    console.log(isLogin)
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">{isLogin ? 'Please Login' : <Message />}</h1>
          <div>
            <button className="btn" onClick={this.onButton}>
              {isLogin ? <Login /> : <Logout />}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Home
