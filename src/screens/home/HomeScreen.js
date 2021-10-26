import React, { useContext } from 'react';
import { AppContext } from '../../context/ContextProvider';

const HomeScreen = () => {
  const { user } = useContext(AppContext);
  return (
    <div>
      <h1 style={{ marginBottom: 50 }}>Hola!, Somos los REACTivos</h1>
      {
        user.userList.map((element) => {
          return (
            <div style={{ flexDirection: 'row' }}>
              <h2>{element.name}</h2>
              <h4>{element.email}</h4>
              <div style={{height:1, backgroundColor:'grey', width:'50%', marginBottom: 15}}></div>
            </div>

          )
        })
      }
    </div>
  );
};

export default HomeScreen;
