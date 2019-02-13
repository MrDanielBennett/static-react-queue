import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import { Switch, Route } from 'react-router-dom';
import NewTicketForm from './NewTicketForm';

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
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketForm} />
      </Switch>
      <TicketList/>
    </div>
    );
  }

  export default App;
