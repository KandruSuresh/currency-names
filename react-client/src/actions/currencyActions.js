const apiUrl = "/api/";

export const addNewCurrency = (currency) => {
  return (dispatch) => {
    dispatch(addNewCurrencyRequest(currency));
    return fetch(apiUrl, {
      method:'post',
      body: currency,
    }).then(response => {
      if(response.ok){
        response.json().then(data => {
          dispatch(addNewCurrencyRequestSuccess(data.currency, data.message))
        })
      }
      else{
        response.json().then(error => {
          dispatch(addNewCurrencyRequestFailed(error))
        })
      }
    })
  }
}

export const addNewCurrencyRequest = (currency) => {
  return {
    type: 'ADD_NEW_CURRENCY_REQUEST',
    currency
  }
}

export const addNewCurrencyRequestSuccess = (currency,message) => {
  return {
    type: 'ADD_NEW_CURRENCY_REQUEST_SUCCESS',
    currency:currency,
    message:message
  }
}

export const addNewCurrencyRequestFailed = (error) => {
  return {
    type: 'ADD_NEW_CURRENCY_REQUEST_FAILED',
    error
  }
}

export const fetchCurrencies = () => {
  return (dispatch) => {
    dispatch(fetchCurrenciesRequest());
    return fetch(apiUrl)
      .then(response => {
        if(response.ok){
          response.json().then(data => {
            dispatch(fetchCurrenciesSuccess(data.currencies,data.message));
          })
        }
        else{
          response.json().then(error => {
            dispatch(fetchCurrenciesFailed(error));
          })
        }
    })
  }
}

export const fetchCurrenciesRequest = () => {
  return {
    type:'FETCH_CURRENCIES_REQUEST'
  }
}

export const fetchCurrenciesSuccess = (currencies,message) => {
  return {
    type: 'FETCH_CURRENCIES_SUCCESS',
    currencies: currencies,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchCurrenciesFailed = (error) => {
  return {
    type:'FETCH_CURRENCIES_FAILED',
    error
  }
}

export const showEditModal = (currencyToEdit) => {
  return {
    type:'SHOW_EDIT_MODAL',
    currency:currencyToEdit
  }
}

export const hideEditModal = () => {
  return {
    type:'HIDE_EDIT_MODAL'
  }
}

export const editCurrency = (currency) => {
    return (dispatch) => {
      dispatch(editCurrencyRequest(currency));
      return fetch(apiUrl, {
        method:'put',
        body:currency
      }).then(response => {
        if(response.ok){
          response.json().then(data => {
            dispatch(editCurrencySuccess(data.currency,data.message));
          })
        }
        else{
          response.json().then(error => {
            dispatch(editCurrencyFailed(error));
          })
        }
      })
    }
}

export const editCurrencyRequest = (currency) => {
   return {
     type:'EDIT_CURRENCY_REQUEST',
     currency
   }
}

export const editCurrencySuccess = (currency,message) => {
  return {
    type:'EDIT_CURRENCY_SUCCESS',
    currency:currency,
    message:message
  }
}

export const editCurrencyFailed = (error) => {
  return {
    type:'EDIT_CURRENCY_FAILED',
    error
  }
}

export const deleteCurrency = (currency) => {
  return (dispatch) => {
    dispatch(deleteCurrencyRequest(currency));
    return fetch(apiUrl + currency._id ,{
      method:'delete'
    }).then(response => {
      if(response.ok){
        response.json().then(data => {
          dispatch(deleteCurrencySuccess(data.message));
        })
      }
      else{
        response.json().then(error => {
          dispatch(deleteCurrencyFailed(error));
        })
      }
    })

  }
}

export const deleteCurrencyRequest = (currency) => {
   return {
     type:'DELETE_CURRENCY_REQUEST',
     currency
   }
}

export const deleteCurrencySuccess = (message) => {
  return {
    type:'DELETE_CURRENCY_SUCCESS',
    message:message
  }
}

export const deleteCurrencyFailed = (error) => {
  return {
    type:'DELETE_CURRENCY_FAILED',
    error
  }
}

export const showDeleteModal = (currencyToDelete) => {
  return {
    type:'SHOW_DELETE_MODAL',
    currency:currencyToDelete
  }
}
export const hideDeleteModal = () => {
  return {
    type:'HIDE_DELETE_MODAL'
  }
}
