import React from 'react';
import "./ReservationPopup.css"; // Include 'src/' in the import path

function ReservationPopup({ trigger, setTrigger, selectedSessionTime, handleReserveSeats }) {
  const [seats, setSeats] = React.useState(1);

  return (
    trigger && (
      <div className="reservation-popup">
        <div className="reservation-popup-inner">
          <h2>Reserve seats for {selectedSessionTime}</h2>
          <div className="reservation-seats">
          <label>
            Number of seats:
            <input 
              type="number" 
              value={seats}
              onChange={e => setSeats(e.target.value)}
            />
          </label>
          <button onClick={() => {
                console.log('Sending to handleReserveSeats:', selectedSessionTime, seats);
                handleReserveSeats(selectedSessionTime, seats);
                setTrigger(false);
            }}>
                Confirm Reservation
            </button>
            </div>
            <button
          onClick={() => setTrigger(false)}
          className="close-button">
          X
        </button>
        </div>
      </div>
    )
  );
}

export default ReservationPopup;
