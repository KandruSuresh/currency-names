import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';

const CurrencyEditForm = (props) => {
  return (
    <form className="form form-horizontal" id="EditCurrencyForm" onSubmit={props.editCurrencySubmit}>
      <div className="row">
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Currency Name </ControlLabel>
            <input type="hidden" value={props.currencyData._id} name="id"/>
            <FormControl type="text" name="currencyName" defaultValue={props.currencyData.currencyName}/>
          </FormGroup>
        </div>
        <div className="col-md-12">
            <FormGroup>
              <ControlLabel>Buy Price</ControlLabel>
              <FormControl type="text" name="buyPrice" defaultValue={props.currencyData.buyPrice}/>
          </FormGroup>
        </div>
        <div className="col-md-12">
            <FormGroup>
              <ControlLabel>Sell Price</ControlLabel>
              <FormControl type="text" name="sellPrice" defaultValue={props.currencyData.sellPrice}/>
          </FormGroup>
        </div>
        <div className="col-md-12">
            <FormGroup>
              <ControlLabel>Time Stamp</ControlLabel>
              <FormControl type="text" name="timeStamp" defaultValue={props.currencyData.timeStamp}/>
          </FormGroup>
        </div>
      </div>
      <FormGroup>
        <Button type="submit" bsStyle="success" bsSize="large" block>Submit</Button>
      </FormGroup>
    </form>
  );
}

export default CurrencyEditForm;
