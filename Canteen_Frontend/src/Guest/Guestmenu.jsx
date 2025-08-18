import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';


function Guestmenu() {
     const [today, setToday] = useState('');
  const [maxDate, setMaxDate] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [error, setError] = useState('');

    useEffect(() => {
    const now = new Date();

    // Format today's date
    const nowday = now.toISOString().split('T')[0];
   
    setToday(nowday);

    // Max = today + 7 days
    const nextWeek = new Date();
    nextWeek.setDate(now.getDate() + 7);
    const maxYear = nextWeek.getFullYear();
    const maxMonth = String(nextWeek.getMonth() + 1).padStart(2, '0');
    const maxDay = String(nextWeek.getDate()).padStart(2, '0');
    const formattedMax = `${maxYear}-${maxMonth}-${maxDay}`;
    setMaxDate(formattedMax);
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedDate(value);

    const selected = new Date(value);
    const day = selected.getDay(); // 0 = Sunday, 6 = Saturday

    if (day === 0 || day === 6) {
      setError('Weekends (Saturday and Sunday) are not allowed.');
    } else {
      setError('');
    }
  };
    return (

        <div className="layout">
            <Sidebar />
            <div className="main-area">
                <Header />
                <div className="main-content">
                    <h4>Choose date and time when you want food</h4>

                    <form className="p-4 border rounded bg-light mx-auto">
                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">Date:</label>
                            <input type="date"
                             id="date"
                              name="date" 
                              required 
                              className="form-control" 
                              value={selectedDate }
                              min={today}
                              max={maxDate}
                              onChange={handleChange}
                              />
                               {error && <div style={{ color: 'red', marginTop: '5px' }}>{error}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="meal_type" className="form-label">Time:</label>
                            <select name="meal_type" id="meal_type" className="form-select">
                                <option value="Select">--Select--</option>
                                <option value="Breakfast" id="breakfast">Breakfast</option>
                                <option value="Lunch" id="lunch">Lunch</option>
                                <option value="Evening" id="evening">Evening</option>
                            </select>
                        </div>

                        <div className="text-center">
                            <input type="submit" value="Done" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Guestmenu;
