import React, { Component } from 'react';
import './App.css';
import Menu from "./NavBAR";
import ProfileList from "./ProfileList";

class UserData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Users: [{
                Name:"Mark Juker Berg",
                Date:Date.now(),
                Image:"https://tinyurl.com/y8h2cxxc",
                Like:0,
                DisLike:0,
                Description:"Founder Of FaceBook"

            },{
                Name:"Elon Musk",
                Date:Date.now(),
                Image:"https://tinyurl.com/y7zduoda",
                Like:0,
                DisLike:0,
                Description:"Ceo Of SpaceX"
            }]
        };
    }
    onClickLike(e) {
        this.setState((prevState, props) => ({
            Like: prevState.counter + props.increment
        }));
    }

    onClickDisLike(e) {
        this.setState((prevState, props) => ({
            DisLike: prevState.counter + props.increment
        }));
    }

    render()
    {
        return (

            <ProfileList Users = {this.state.Users} />
        )
    }
}



class App extends Component {
  render() {
    return (
      <div className="App">
          <Menu/>
          <UserData ProfileList={ProfileList}/>
      </div>
    );
  }
}

export default App;
