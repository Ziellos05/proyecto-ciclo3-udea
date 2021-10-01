import React from 'react';
import ContextProvider from './context/ContextProvider';
import AppContainer from './routes/appContainer/AppContainer';
import SalesScreen from './screens/sales/SalesScreen';


const App = () => {
  return (
    <ContextProvider>
      <AppContainer />
      {/* <SalesScreen /> */}
    </ContextProvider>
  );
}

export default App;
