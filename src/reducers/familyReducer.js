const defaultState = {
  data: {
    family: []
  }
};

function family(state = defaultState, action) {
  switch (action.type) {
    case "DATA_RECEIVE": {
      return Object.assign({}, state, {
        data: action.payload.data
      });
    }

    case "DATA_REQUEST": {
      return Object.assign({}, state, {
        isLoading: true
      });
    }

    case "DATA_RECEIVE_INVALID": {
      return Object.assign({}, state, {
        lastChecked: Date.now(),
        isLoading: false
      });
    }

    default: {
      return state;
    }
  }
}

module.exports = family;
