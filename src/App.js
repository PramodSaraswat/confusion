import React from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import {DISHES} from './shared/dishes';

class App extends React.Component {

	constructor(props){
		super(props);
		this.state={
			dishes:DISHES
		};

	}
render(){
	return (
    <div>
        <Navbar dark color="secondary">
          <div className="container">
            <NavbarBrand href="#">Con fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
    </div>
  );}
}

export default App;
