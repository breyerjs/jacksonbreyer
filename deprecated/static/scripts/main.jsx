//Global ReactBootstrap
import MenuItem from './menu_item.jsx';
var Accordion = ReactBootstrap.Accordion;
var Panel = ReactBootstrap.Panel;
var Col = ReactBootstrap.Col;
var Row = ReactBootstrap.Row;
var Jumbotron = ReactBootstrap.Jumbotron;


class Menu extends React.Component {
  render() {
    return (
        <div>
        <a  href="/">
            <img  src="img/avatar.png"
                  id={"prof_pic"} />
        </a>
          <ul>
              <MenuItem pageName={"/"} 
                        handleClick={function(){console.log("hai");}} />
              <MenuItem pageName={"about"} 
                        handleClick={function(){console.log("moo");}} />
              <MenuItem pageName={"projects"} 
                        handleClick={function(){console.log("moo");}} />
              <MenuItem pageName={"interests"} 
                        handleClick={function(){console.log("moo");}} />  
              <MenuItem pageName={"contacts"} 
                        handleClick={function(){console.log("moo");}} />        
          </ul>
        </div>
    );
  }
}

class App extends React.Component {
  render() {
    return( 
      <Row>
        <Col sm={1} md={1} />
        <Col sm={2} md={2}>
          <Menu />
        </Col>
      </Row>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('content'));
