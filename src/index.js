import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
import { Provider} from 'react-redux';

import './index.css';
import App from './App';
import rootReducer from './reducers/rootReducer';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());//后边的代码等待澄清

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
serviceWorker.unregister();