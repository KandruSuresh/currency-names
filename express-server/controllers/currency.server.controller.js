import mongoose from 'mongoose';
import Currency from '../models/currency.server.model';

export const getCurrencies = (req,res) => {
  Currency.find().exec((err,currencies) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':'Currencies fetched successfully',currencies});
  });
}

export const addCurrency = (req,res) => {
  console.log(req.body);
  const newCurrency = new Currency(req.body);
  newCurrency.save((err,currency) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':'currency added successfully',currency});
  })
}

export const updateCurrency = (req,res) => {
  Currency.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,currency) => {
    if(err){
    return res.json({'success':false,'message':'Some Error','error':err});
    }
    console.log(currency);
    return res.json({'success':true,'message':'Updated successfully',currency});
  })
}

export const deleteCurrency = (req,res) => {
  Currency.findByIdAndRemove(req.params.id, (err,currency) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':currency.currencyName+' deleted successfully'});
  })
}
