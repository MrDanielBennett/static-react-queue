import React from 'react';
import PropTypes from 'prop-types';

function Ticket({names, location, issue}){
  let styledTickets = {
    backgroundColor: '#303030',
    fontFamily: 'sans-serif',
    color: '#ffffff',
    paddingTop: '30'
  };
  return(
    <div>
      <style global jsx>{`
          div {
            background-color: #424242;
          }
              `}</style>
      <h3>{location} - {names}</h3>
      <p><em>{issue}</em></p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;
