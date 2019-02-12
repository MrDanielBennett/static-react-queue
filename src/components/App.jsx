import React from 'react';
import Header from './Header';
import TicketList from './TicketList';

function App(){
  return (
    <div>
      <style jsx global>{`
          body {
            background-color: #303030;
            font-family: Helvetica;
            color: white;
          }
            `}</style>
      <Header/>
      <TicketList/>
    </div>
  );
}

export default App;
