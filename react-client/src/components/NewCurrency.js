import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';

const CurrencyForm = (props) => {
  return (
    <form className="form form-horizontal" id="addCurrencyForm" onSubmit={props.addCurrency}>
    <div className="row">
    <h3 className="centerAlign">Add Currency</h3>
    <div className="col-md-12">
        <FormGroup>
          <ControlLabel>Currency Name </ControlLabel>
            <FormControl
              type="text" placeholder="Enter Currency Name"
              name="currencyName"
               />
        </FormGroup>
      </div>
      <div className="col-md-12">
        <FormGroup>
          <ControlLabel>Buy Price </ControlLabel>
            <FormControl
              type="text" placeholder="Enter Buy Price"
              name="buyPrice"
               />
        </FormGroup>
      </div>
      <div className="col-md-12">
        <FormGroup>
          <ControlLabel>Sell Price </ControlLabel>
            <FormControl
              type="text" placeholder="Enter Sell Price"
              name="sellPrice"
               />
        </FormGroup>
      </div>
      <div className="col-md-12">
        <FormGroup>
          <ControlLabel>Time Stamp</ControlLabel>
            <FormControl
              type="text" placeholder="Enter Time"
              name="timeStamp"
               />
        </FormGroup>
      </div>
    </div>
          <FormGroup>
              <Button type="submit" bsStyle="success" bsSize="large" block>Submit</Button>
          </FormGroup>
    </form>
  );
}

export default CurrencyForm;
