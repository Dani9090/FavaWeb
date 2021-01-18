/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import notesApp from 'reducers';

const store = createStore(notesApp
    , /* preloadedState, */
 //* eslint-disable no-underscore-dangle */
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  /* eslint-enable */
export default store;
