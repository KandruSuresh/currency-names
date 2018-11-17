const INITIAL_STATE = {
  currencies:[],
  currency:null,
  isFetching: false,
  error: null,
  successMsg:null,
  showDeleteModal: false,
  currencyToDelete: null,
  showEditModal: false,
  currencyToEdit: null,
  newCurrency: null
}

export  const currencyReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_CURRENCIES_REQUEST':
          return {
            ...currentState,
            currencies:[],
            currency:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            currencyToDelete: null,
            showEditModal: false,
            currencyToEdit: null,
          }

    case 'FETCH_CURRENCIES_SUCCESS':
          return {
            ...currentState,
            currencies:action.currencies,
            currency:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            currencyToDelete: null,
            showEditModal: false,
            currencyToEdit: null,
          }

    case 'FETCH_CURRENCIES_FAILED':
          return {
            ...currentState,
            currencies:[],
            currency:null,
            isFetching: false,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            currencyToDelete: null,
            showEditModal: false,
            currencyToEdit: null,
          }

    case 'ADD_NEW_CURRENCY_REQUEST':
          return {
            ...currentState,
            currencies:currentState.currencies,
            currency:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            currencyToDelete: null,
            showEditModal: false,
            currencyToEdit: null,
            newCurrency: action.currency
          }

    case 'ADD_NEW_CURRENCY_REQUEST_FAILED':
          return {
            ...currentState,
            currencies:currentState.currencies,
            currency:null,
            isFetching: true,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            currencyToDelete: null,
            showEditModal: false,
            currencyToEdit: null,
            newCurrency: null
          }

    case 'ADD_NEW_CURRENCY_REQUEST_SUCCESS':
          const nextState =  {
            ...currentState,
            currencies:[...currentState.currencies, action.currency],
            currency:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            currencyToDelete: null,
            showEditModal: false,
            currencyToEdit: null,
            newCurrency: action.currency
          }
        return nextState;

  case 'SHOW_EDIT_MODAL':
        return {
          ...currentState,
          currencies:currentState.currencies,
          currency:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          currencyToDelete: null,
          showEditModal: true,
          currencyToEdit: action.currency,
          newCurrency: null
        }

  case 'HIDE_EDIT_MODAL':
        return {
          ...currentState,
          currencies:currentState.currencies,
          currency:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          currencyToDelete: null,
          showEditModal: false,
          currencyToEdit: null,
          newCurrency: null
        }

    case 'EDIT_CURRENCY_REQUEST':
          return {
            ...currentState,
            currencies:currentState.currencies,
            currency:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            currencyToDelete: null,
            showEditModal: true,
            currencyToEdit: action.currency,
            newCurrency: null
          }

    case 'EDIT_CURRENCY_SUCCESS':
         const updatedCurrencies = currentState.currencies.map((currency) => {
           if(currency._id !== action.currency._id){
             return currency;
           }
           return { ...currency, ...action.currency }
         })
          return {
            ...currentState,
            currencies:updatedCurrencies,
            currency:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            currencyToDelete: null,
            showEditModal: true,
            currencyToEdit: action.currency,
            newCurrency: null
          }

  case 'EDIT_CURRENCY_FAILED':
        return {
          ...currentState,
          currencies:currentState.currencies,
          currency:null,
          isFetching: false,
          error: action.error,
          successMsg:null,
          showDeleteModal: false,
          currencyToDelete: null,
          showEditModal: true,
          currencyToEdit: currentState.currencyToEdit,
          newCurrency: null
        }

  case 'DELETE_CURRENCY_REQUEST':
        return {
          ...currentState,
          currencies:currentState.currencies,
          currency:null,
          isFetching: true,
          error: null,
          successMsg:null,
          showDeleteModal: true,
          currencyToDelete: action.currency,
          showEditModal: false,
          currencyToEdit: null,
          newCurrency: null
        }

  case 'DELETE_CURRENCY_SUCCESS':
  const filteredCurrencies = currentState.currencies.filter((currency) => currency._id !== currentState.currencyToDelete._id)
        return {
          ...currentState,
          currencies:filteredCurrencies,
          currency:null,
          isFetching: false,
          error: null,
          successMsg:action.message,
          showDeleteModal: true,
          currencyToDelete: null,
          showEditModal: false,
          currencyToEdit: null,
          newCurrency: null
        }


  case 'DELETE_CURRENCY_FAILED':
        return {
          ...currentState,
          currencies:currentState.currencies,
          currency:null,
          isFetching: false,
          error: action.error,
          successMsg:null,
          showDeleteModal: true,
          currencyToDelete: null,
          showEditModal: false,
          currencyToEdit: null,
          newCurrency: null
        }

  case 'SHOW_DELETE_MODAL':
        return {
          ...currentState,
          currencies:currentState.currencies,
          currency:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: true,
          currencyToDelete: action.currency,
          showEditModal: false,
          currencyToEdit: null,
          newCurrency: null
        }

  case 'HIDE_DELETE_MODAL':
        return {
          ...currentState,
          currencies:currentState.currencies,
          currency:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          currencyToDelete: null,
          showEditModal: false,
          currencyToEdit: null,
          newcurrency: null
        }


    default:
       return currentState;

  }
}
