import React from 'react';
import { Navbar,Nav,NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './CurrencyForm.css';
import NewCurrency from './NewCurrency';
import { connect } from 'react-redux';
import * as currencyActions from '../actions/currencyActions';

class CurrencyForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isNewCurrency: false
    }
    this.addCurrencyHandler = this.addCurrencyHandler.bind(this);
    this.addCurrency = this.addCurrency.bind(this);
  }

  addCurrencyHandler(e) {
    e.preventDefault();
    this.setState({isNewCurrency: true})
  }

  addCurrency(e) {
      e.preventDefault();
      const form = document.getElementById('addCurrencyForm');
      if(form.currencyName.value !== ""  && form.buyPrice.value !== "" && form.sellPrice.value !== "" && form.timeStamp.value !== ""){
        const data = new FormData();
        data.append('currencyName', form.currencyName.value);
        data.append('buyPrice', form.buyPrice.value);
        data.append('sellPrice', form.sellPrice.value);
        data.append('timeStamp', form.timeStamp.value);
        this.props.mappedAddCurrency(data);
        form.reset();
        this.setState({isNewCurrency: false})
      } else {
        return ;
      }
  }

  render(){
    return(
      <div>
        <Navbar className="customNav">
          <Navbar.Header>
              <a class="navbar-brand" href="#">
                <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""/>
              </a>
            <Navbar.Brand className="title">Currencies</Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
            <LinkContainer to={{ pathname: '/', query: {  } }} onClick={this.addCurrencyHandler}>
              <NavItem eventKey={1}>Add Currency</NavItem>
            </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="container">
        {this.state.isNewCurrency &&
          <NewCurrency addCurrency={this.addCurrency} />
        }
        {this.props.children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mappedAppState: state.appState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    mappedAddCurrency: currency => dispatch(currencyActions.addNewCurrency(currency))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CurrencyForm);

