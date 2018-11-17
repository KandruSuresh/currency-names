import React from 'react';
import { connect } from 'react-redux';
import { Alert,Glyphicon,Button,Modal } from 'react-bootstrap';
import CurrencyEditForm from './CurrencyEditForm';
import * as currencyActions from '../actions/currencyActions';

class CurrencyTable extends React.Component {
  constructor(props) {
    super(props);
    this.hideEditModal = this.hideEditModal.bind(this);
    this.submitEditCurrency = this.submitEditCurrency.bind(this);
    this.hideDeleteModal = this.hideDeleteModal.bind(this);
    this.cofirmDeleteCurrency = this.cofirmDeleteCurrency.bind(this);
  }

  componentWillMount() {
    this.props.fetchCurrencies();
  }

  showEditModal(currencyToEdit) {
     this.props.mappedshowEditModal(currencyToEdit);
  }

  hideEditModal() {
     this.props.mappedhideEditModal();
  }

  submitEditCurrency(e) {
    e.preventDefault();
    const editForm = document.getElementById('EditCurrencyForm');
    if(editForm.currencyName.value !== "") {
      const data = new FormData();
      data.append('id', editForm.id.value);
      data.append('currencyName', editForm.currencyName.value);
      data.append('buyPrice', editForm.buyPrice.value);
      data.append('sellPrice', editForm.sellPrice.value);
      data.append('timeStamp', editForm.timeStamp.value);
      this.props.editCurrencies(data);
    } else {
      return;
    }
  }

  hideDeleteModal(){
    this.props.mappedhideDeleteModal();
  }

  showDeleteModal(currencyToDelete){
    this.props.mappedshowDeleteModal(currencyToDelete);
  }

  cofirmDeleteCurrency(){
    this.props.deleteCurrencies(this.props.mappedCurrencyState.currencyToDelete);
  }

  render(){
    const currencyState = this.props.mappedCurrencyState;
    const currencies = currencyState.currencies;
    const editCurrency = currencyState.currencyToEdit;
    return(
      <div className="col-md-12">
      <h3 className="centerAlign">Currency List</h3>
      {currencies && currencies.length <= 0 && !currencyState.isFetching &&
        <p>Currencies are not Available</p>
      }
      {currencies && currencies.length > 0 && !currencyState.isFetching &&
      <table className="table booksTable">
      <thead>
       <tr>
          <th>Currency Name</th>
          <th className="textCenter">Buy Price</th>
          <th className="textCenter">Sell Price</th>
          <th className="textCenter">Time Stamp</th>
       </tr>
      </thead>
      <tbody>
        {currencies.map((currency,i) => <tr key={i}>
          <td>{currency.currencyName}</td>
          <td>{currency.buyPrice}</td>
          <td>{currency.sellPrice}</td>
          <td>{currency.timeStamp}</td>
          <td className="textCenter"><Button onClick={() => this.showEditModal(currency)} bsStyle="info" bsSize="xsmall"><Glyphicon glyph="pencil" /></Button></td>
          <td className="textCenter"><Button onClick={() => this.showDeleteModal(currency)} bsStyle="danger" bsSize="xsmall"><Glyphicon glyph="trash" /></Button></td>
         </tr> )
      }
      </tbody>
      </table>
    }

    <Modal show={currencyState.showEditModal} onHide={this.hideEditModal} container={this}
      aria-labelledby="contained-modal-title">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title">Edit Currency</Modal.Title>
      </Modal.Header>
      <Modal.Body>
    <div className="col-md-12">
    {editCurrency  &&
      <CurrencyEditForm currencyData={editCurrency} editCurrencySubmit={this.submitEditCurrency} />
    }
    
    {editCurrency  && !currencyState.isFetching && currencyState.error &&
      <Alert bsStyle="danger">
        <strong>Failed. {currencyState.error} </strong>
      </Alert>
    }
    {editCurrency  && !currencyState.isFetching && currencyState.successMsg &&
      <Alert bsStyle="success">
        <strong> {editCurrency.currencyName} </strong>{currencyState.successMsg}
      </Alert>
    }
    </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.hideEditModal}>Close</Button>
      </Modal.Footer>
    </Modal>

    <Modal
    show={currencyState.showDeleteModal}
    onHide={this.hideDeleteModal}
    container={this}
    aria-labelledby="contained-modal-title"
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title">Delete Your Currency</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    {currencyState.currencyToDelete && !currencyState.error && !currencyState.isFetching &&
      <Alert bsStyle="warning">
        Are you sure you want to delete this currency<strong>{currencyState.currencyToDelete.currencyName} </strong> ?
      </Alert>
    }
    
    {!currencyState.currencyToDelete && !currencyState.error && !currencyState.isFetching&&
      <Alert bsStyle="success">
        <strong>{currencyState.successMsg} </strong>
      </Alert>
    }
    </Modal.Body>
    <Modal.Footer>
     {!currencyState.successMsg && !currencyState.isFetching &&
       <div>
       <Button onClick={this.cofirmDeleteCurrency}>Yes</Button>
       <Button onClick={this.hideDeleteModal}>No</Button>
       </div>
    }
    {currencyState.successMsg && !currencyState.isFetching &&
      <Button onClick={this.hideDeleteModal}>Close</Button>
    }
    </Modal.Footer>
  </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state,ownProps) => {
  return {
    mappedCurrencyState: state.currencyState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCurrencies: () => dispatch(currencyActions.fetchCurrencies()),
    editCurrencies: currencyToEdit => dispatch(currencyActions.editCurrency(currencyToEdit)),
    mappedshowEditModal: currencyToEdit => dispatch(currencyActions.showEditModal(currencyToEdit)),
    mappedhideEditModal: () => dispatch(currencyActions.hideEditModal()),
    deleteCurrencies: currencyToDelete => dispatch(currencyActions.deleteCurrency(currencyToDelete)),
    mappedshowDeleteModal: currencyToDelete => dispatch(currencyActions.showDeleteModal(currencyToDelete)),
    mappedhideDeleteModal: () => dispatch(currencyActions.hideDeleteModal())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CurrencyTable);

