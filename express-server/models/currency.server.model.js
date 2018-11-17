import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  currencyName: String,
  buyPrice: String,
  sellPrice: String,
  timeStamp: String,
});

export default mongoose.model('Todo', Schema);