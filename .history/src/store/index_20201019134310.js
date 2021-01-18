import { createStore } from 'redux';
import notesApp from 'reducers';

const store = createStore(notesApp
    , /* preloadedState, */
 // + /* eslint-disable no-underscore-dangle */
 // eslint-disable-next-line no-undef
 +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
export default store;
